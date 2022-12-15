import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index'

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
          content:
            "Donec nisl dolor,",
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
    // ASYNC MUTATIONS
    addPost({ state }, postInfo) {
      state.isPosting = true;
      console.log("ADD POST CALLED");
      postInfo["id"] = state.postsDumb.length + 1;
      state.ownPosts.push(postInfo);
      state.ownPosts.push(postInfo);
      state.isPosting = false;
    },
    addComment({ state }, comment, postId) {
      console.log(postId)
      state.currentComments.commentCnt += 1
      state.currentComments.comments.push({
        user: 'You',
        content: comment,
      })
    },
    getTotalPostCount({ state }) {
      state.allPostsCount = state.postsDumb.length;
      state.availablePages = Math.ceil(state.allPostsCount / state.postPerPage);
    },
    getPage({ state }, page) {
      state.isLoading = true;
      var idxStart = (page - 1) * state.postPerPage;
      var idxEnd = page * state.postPerPage;
      if (idxEnd - idxStart == state.postPerPage)
        state.posts = state.postsDumb.slice(idxStart, idxEnd);
      else
        state.posts = state.postsDumb.slice(idxStart, state.postsDumb.length);
      state.currentPage = page;
      state.isLoading = false;
      return state.posts;
    },
    getPost({ state }) {
      var postId = router.currentRoute.params.id;
      state.currentPost = state.postsDumb.filter((x) => x.id == postId)[0];
      state.comments;
    },
    deletePost({ state }, postId) {
      state.isLoading = true;
      state.postsDumb = state.postsDumb.filter((val) => {
        return val.id != postId;
      });
      state.ownPosts = state.ownPosts.filter((val) => {
        return val.id != postId;
      });
      state.allPostsCount = state.postsDumb.length;
      state.isLoading = false;
    },
    editUser({ state }, userId, newUserData) {
      console.log(state + " " + userId + " " + newUserData);
    },
    getUserDatas({ state }, userId) {
      console.log(state + " " + userId);
    },
    getUserData({ state }, id) {
      console.log(state + " " + id);
    },
    async logIn({ state, dispatch }, username, password) {
      // TODO
      state.isLoading = true;
      console.log(state + " " + username + " " + password);
      await dispatch("getUserData", 0);
      state.isLoading = false;
    },
    logOut({ state }) {
      // TODO
      console.log("LOGOUT CALLED");
      state.isLoggedIn = false;
      state.userData = {};
      state.ownPosts = [];
    },
  },
  modules: {},
});
