import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Explore from "../views/Explore.vue";
import NewPost from "../views/NewPost.vue";
import Profile from "../views/Profile.vue";
import Post from "../views/Post.vue";
import store from '../store/index'

Vue.use(VueRouter);

function returnHome() {
  store.commit('returnHome')
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
    props: () => {
      store.dispatch("getPost");
      if (store.state.currentPost == undefined) {
        returnHome()
      }
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    props: () => {
      if (!store.state.isLoggedIn) {
        returnHome();
      }
      if (!store.state.userData.isAdmin) {
        returnHome();
      }
    },
  },
  {
    path: "/new-post",
    name: "NewPost",
    component: NewPost,
    props: () => {
      if (!store.state.isLoggedIn) {
        returnHome();
      }
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    props: () => {
      if (!store.state.isLoggedIn) {
        returnHome();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
