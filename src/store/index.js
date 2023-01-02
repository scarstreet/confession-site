import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // progress
    isLoading: false,
    error: false,
    errStr: "",
    // user data
    isLoggedIn: false,
    userData: {},
    ownPosts: [],
    // post data
    allPostsCount: 0,
    currentPage: 1,
    postPerPage: 10,
    availablePages: 0,
    currentPost: {},
    posts: [],
    currentComments: [],
  },
  getters: {
    isLoggedIn() {},
    userData() {},
    currentComments() {},
  },
  mutations: {
    returnHome() {
      router.push("/");
    },
    posts(state) {
      return state.posts;
    },
    availablePages(state) {
      return state.availablePages;
    },
    setCurrentPost(state, post) {
      state.currentPost = post;
    },
    isPostOwned(state, id) {
      if (state.isLoggedIn == false) return false;
      if (state.ownPosts.filter((p) => p.id == id).length != 0) return true;
      return false;
    },
  },
  actions: {
    // ASYNC MUTATIONS chickensoup
    async addUser({ state, dispatch }, { username, password }) {
      // OK
      state.isLoading = true;
      axios
        .post("http://localhost:5000/users", {
          username: username,
          password: password,
        })
        .then((res) => {
          // user id data.res.insertId
          if (id != undefined) {
            state.isLoggedIn = true;
            var id = res.data.insertId;
            console.log(`user created with Id ${id}`);
            dispatch("getUserData", id);
            router.push("/profile");
          } else {
            state.errStr = "Something went wrong. Please try again later.";
            state.error = true;
            var error = res.data.errno;
            if (error == 1062) {
              state.errStr = "This username is already taken";
              console.log(state.errStr);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async addPost({ state, dispatch }, postInfo) {
      // OK
      state.isLoading = true;
      axios
        .post("http://localhost:5000/posts", {
          u_id: state.userData.id,
          title: postInfo.title,
          content: postInfo.content,
        })
        .then(async (res) => {
          console.log(state.userData);
          if (res.data.insertId != undefined) {
            await dispatch("getUserData", state.userData.id);
            await dispatch("getUserPosts", state.userData.id);
          } else {
            state.errStr = "Something went wrong. Try again later";
            state.error = true;
            console.log(state.errStr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async addComment({ state }, { comment, postId }) {
      // OK
      state.isLoading = true;
      axios
        .post("http://localhost:5000/comments", {
          u_id: state.userData.id,
          p_id: postId,
          content: comment,
        })
        .then((res) => {
          console.log(res);
          if (res.data.insertId != undefined) {
            // router.push(`/posts/${postId}`)
          } else {
            state.errStr = "Something went wrong. Try again later";
            state.error = true;
            console.log(state.errStr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getTotalPostCount({ state }) {
      // OK
      state.isLoading = true;
      axios
        .get("http://localhost:5000/posts/totalpost/t")
        .then((res) => {
          if (res.data["COUNT(*)"] != undefined) {
            state.allPostsCount = res.data["COUNT(*)"];
            state.availablePages = Math.ceil(res.data["COUNT(*)"] / 10);
          } else {
            state.errStr = "Something went wrong. Try again Later.";
            state.error = true;
            console.log(state.errStr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getPage({ state }) {
      // OK
      state.isLoading = true;
      var page = router.currentRoute.params.page;
      axios
        .get(`http://localhost:5000/posts/p/${page}`)
        .then((res) => {
          state.currentPage = page;
          state.posts = res.data;
          if (state.posts.length == 0) router.push("/explore/1");
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getPost({ state }) {
      // OK
      state.isLoading = true;
      var postId = router.currentRoute.params.id;
      axios
        .get(`http://localhost:5000/posts/${postId}`)
        .then(async (res) => {
          state.currentPost = res.data;
          if (state.currentPost == "") {
            router.push("/explore/1");
            return;
          }
          await axios
            .get(`http://localhost:5000/comments/${postId}`)
            .then((ress) => {
              state.currentComments = ress.data;
            });
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getSearch({ state }) {
      // TODO
      state.isLoading = true;
      var page = router.currentRoute.params.page;
      var toSearch = router.currentRoute.params.to_search;
      axios
        .get(`http://localhost:5000/posts/search/${toSearch}/${page}`)
        .then((res) => {
          state.currentPage = page;
          state.posts = res.data;
          if (state.posts.length == 0) router.push(`/search/${toSearch}/1`);
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getTotalSearchCount({ state }) {
      // OK
      state.isLoading = true;
      var toSearch = router.currentRoute.params.to_search;
      axios
        .get(`http://localhost:5000/posts/totalpost/s/${toSearch}`)
        .then((res) => {
          if (res.data[0]["COUNT(*)"] != undefined) {
            state.allPostsCount = res.data[0]["COUNT(*)"];
            state.availablePages = Math.ceil(res.data[0]["COUNT(*)"] / 10);
          } else {
            state.errStr = "Something went wrong. Try again Later.";
            state.error = true;
            console.log(state.errStr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async updatePost({ state, dispatch }, { title, content, postId }) {
      state.isLoading = true;
      axios
        .update(`http://localhost:5000/posts/${postId}`, {
          title: title,
          content: content,
        })
        .then(async (res) => {
          console.log(state.userData);
          if (res.data.insertId != undefined) {
            await dispatch("getUserData", state.userData.id);
            await dispatch("getUserPosts", state.userData.id);
          } else {
            state.errStr = "Something went wrong. Try again later";
            state.error = true;
            console.log(state.errStr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async deletePost({ state, dispatch }, postId) {
      // OK
      state.isLoading = true;

      axios
        .delete(`http://localhost:5000/posts/${postId}`)
        .then(async (res) => {
          if (res.data.insertId == undefined) {
            state.error = true;
            state.errStr = "Something went wrong, try again later";
            console.log(state.errStr);
          } else {
            dispatch("getUserData", state.userData.id);
            dispatch("getUserPosts", state.userData.id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getUserData({ state }, id) {
      // OK
      state.isLoading = true;
      axios
        .get(`http://localhost:5000/users/${id}`)
        .then(async (res) => {
          var user = {
            id: id,
            name: res.data.username,
            password: res.data.password,
            isAdmin: res.data.is_admin == 1 ? true : false,
            posts: {
              count: 0,
              postIds: [],
            },
          };
          state.userData = user;
          await axios
            .get(`http://localhost:5000/posts/user/${id}`)
            .then((res) => {
              var posts = res.data;
              var postIds = [];
              posts.forEach((p) => {
                postIds.push(p.id);
              });
              state.userData.posts.postIds = postIds;
              state.userData.posts.count = postIds.length;
            });
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getUserPosts({ state }) {
      // OK
      state.isLoading = true;
      axios
        .get(`http://localhost:5000/posts/user/${state.userData.id}`)
        .then((res) => {
          state.ownPosts = res.data;
          state.ownPosts.reverse();
        });
      state.isLoading = false;
    },
    async logIn({ state, dispatch }, { username, password }) {
      // OK
      state.isLoading = true;
      axios
        .get(`http://localhost:5000/users/login/${username}`)
        .then(async (res) => {
          console.log(res);
          if (res.data.id != undefined) {
            if (res.data.password === password) {
              state.isLoggedIn = true;
              await dispatch("getUserData", res.data.id);
              router.push("/profile");
            } else {
              state.error = true;
              state.errStr = "Username or password wrong";
              console.log(state.errStr);
            }
          } else {
            state.error = true;
            state.errStr = "Username or password wrong";
            console.log("Username or password wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async logOut({ state }) {
      // OK
      state.ownPosts = [];
      state.userData = {};
      state.isLoggedIn = false;
    },
  },
  modules: {},
});
