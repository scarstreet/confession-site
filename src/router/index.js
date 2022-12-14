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
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/new-post",
    name: "NewPost",
    component: NewPost,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
