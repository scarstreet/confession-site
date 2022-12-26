import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // DUMMY DATA, DELETE LATER
    userDumb: {
      id: 0,
      name: "username",
      password: "password",
      isAdmin: true,
      posts: {
        count: 4,
        postIds: [1, 3, 8, 5],
      },
    },
    postsDumb: [
      {
        id: 1,
        title: "Title 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. \n\n Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. \n\n Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 2,
        title: "Title 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 3,
        title: "Title 3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 4,
        title: "Title 4",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 5,
        title: "Title 5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 6,
        title: "Title 6",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 7,
        title: "Title 7",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 8,
        title: "Title 8",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 9,
        title: "Title 9",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 10,
        title: "Title 10",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 11,
        title: "Title 11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 12,
        title: "Title 12",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 13,
        title: "Title 13",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 14,
        title: "Title 14",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 15,
        title: "Title 15",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
      {
        id: 16,
        title: "Title 16",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus. Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. Donec nisl dolor, pulvinar eu imperdiet a, dignissim at ligula. Suspendisse mauris sapien, fermentum ac eleifend sit amet, pellentesque a nibh. In hac habitasse platea dictumst. Aliquam eget nibh mattis, auctor magna tempus, rhoncus mauris. Nam pretium euismod metus ut lacinia. Donec fringilla mi in consequat sollicitudin. Morbi vulputate tortor a lorem elementum, at ultricies orci iaculis. Pellentesque lobortis ac risus eget vestibulum.",
        commentCnt: 3,
      },
    ],
    // KEYS
    CLIENT_ID:
      "296117240787-asv9ba5nv4lp911t02mujgjnd3m9tn1k.apps.googleusercontent.com",
    API_KEY: "AIzaSyBFHcSZoPKvTRAnwS-BPrUH2sl3IrlFEGY",
    // progress
    isLoading: false,
    encounteredError: "",
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
    currentComments: {
      postId: -1,
      comments: [
        {
          user: "User 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel libero et augue congue pellentesque non sit amet justo. Pellentesque viverra enim et dictum egestas. Phasellus consectetur, ipsum id lacinia hendrerit, mi nunc auctor sapien, vitae commodo sem nunc at tellus.",
        },
        {
          user: "User 2",
          content:
            "Sed luctus mauris ante, at tincidunt nisl venenatis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis elit nec mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in augue eros. Suspendisse vitae felis nisi. Nam iaculis ante nec bibendum vestibulum. Suspendisse potenti. Morbi et eros fermentum, feugiat mauris ac, rhoncus magna. Donec luctus lectus nec porta dictum. Phasellus scelerisque rhoncus nisl in euismod. Vivamus non diam tortor. ",
        },
        {
          user: "User 3",
          content: "Donec nisl dolor,",
        },
      ],
    },
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
    async addUser({ state, dispatch }, { username, password }) { // DONE
      state.isLoading = true;
      axios
        .post("http://localhost:5000/users", {
          username: username,
          password: password,
        })
        .then((res) => {
          // user id data.res.insertId
          state.isLoggedIn = true;
          var id = res.data.insertId;
          if (id != undefined) {
            console.log(`user created with Id ${id}`);
            dispatch("getUserData", id);
          } else {
            var errStr = "Something went wrong. Please try again later.";
            var error = res.data.errno;
            if (error == 1062) {
              errStr = "This username is already taken";
              console.log(errStr);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async addPost({ state, dispatch }, postInfo) { // DONE
      state.isLoading = true;
      axios
        .post("http://localhost:5000/posts", { 
          u_id: state.userData.id,
          title: postInfo.title,
          content: postInfo.content,
        })
        .then(async (res) => {
          if (res.data.insertId != undefined) {
            await dispatch('getUserData', state.userData.id);
            await dispatch("getUserPosts", state.userData.id);
            router.push(`/post/${res.data.insertId}`)
          } else {
            var errStr = 'Something went wrong. Try again later'
            console.log(errStr)
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async addComment({ state }, { comment, postId }) { // DONE
      state.isLoading = true;
      axios
        .post("http://localhost:5000/comments", {
          u_id: state.userData.id,
          p_id: postId,
          content: comment,
        })
        .then((res) => {
          if (res.data.insertId != undefined) {
            router.push(`/posts/${postId}`)
          } else {
            var errStr = "Something went wrong. Try again later";
            console.log(errStr);
           }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getTotalPostCount({ state }) { // DONE
      state.isLoading = true;
      axios
        .get("http://localhost:5000/posts/totalpost/t")
        .then((res) => {
          if (res.data["COUNT(*)"] != undefined) {
            state.allPostsCount = res.data["COUNT(*)"];
          } else {
            var errStr = 'Something went wrong. Try again Later.'
            console.log(errStr)
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getPage({ state }, page) { // DONE
      state.isLoading = true;
      axios
        .get(`http://localhost:5000/posts/p/${page}`)
        .then((res) => {
          state.currentPage = page
          state.posts = res.data
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async getPost({ state }) { // + comments, DONE
      state.isLoading = true;
      var postId = router.currentRoute.params.id;
      console.log('hi')
      axios
        .get(`http://localhost:5000/posts/${postId}`)
        .then(async (res) => {
          state.currentPost = res.data
          await axios.get(`http://localhost:5000/comments/${postId}`).then((ress) => {
            state.currentComments = ress.data
            console.log(ress)
          });
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async deletePost({ state, dispatch }, postId) { // DONE
      state.isLoading = true;

      axios
        .delete(`http://localhost:5000/posts/${postId}`)
        .then(async (res) => {
          if (res.data.insertId == undefined) {
            var errStr = 'Something went wrong, try again later';
            console.log(errStr);
          } else {
            dispatch("getUserData", state.userData.id);
            dispatch("getUserPosts", state.userData.id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getUserData({ state }, id) { //DONE
      state.isLoading = true;
      axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => {
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
          axios.get(`http://localhost:5000/posts/user/${id}`).then((res) => {
            var posts = res.data;
            var postIds = []
            posts.forEach(p => {
              postIds.push(p.id)
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
    async getUserPosts({ state }) { // DONE
      state.isLoading = true;
      axios.get(`http://localhost:5000/posts/user/${state.userData.id}`).then((res) => {
        state.ownPosts = res.data;
      });
      state.isLoading = false;
    },
    async logIn({ state, dispatch }, {username, password}) { //DONE
      state.isLoading = true;
      axios
        .get(`http://localhost:5000/users/login/${username}`)
        .then((res) => {
          console.log(res)
          if (res.data.id != undefined) {
            if (res.data.password === password) {
              state.isLoggedIn = true;
              dispatch("getUserData", res.data.id);
            }
            else {
              var errStr = 'Username or password wrong';
              console.log(errStr);
            }
          } else {
            console.log("Username or password wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      state.isLoading = false;
    },
    async logOut({ state }) { //DONE
      state.ownPosts = [];
      state.userData = {};
      state.isLoggedIn = false;
    },
  },
  modules: {},
});
