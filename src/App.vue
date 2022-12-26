<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <Logo class="pa-2" style="text-align: center"></Logo>
      </div>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="white" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in whichMenu"
            :key="index"
            @click="menuHandler(item.label)"
          >
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <Login
        :isDialogOpen="loginDialog"
        :dialogMode="loginDialogMode"
        v-on:change-dialog-mode="changeDialogMode"
        v-on:close-dialog="loginDialog = false"
      />
      <router-view />
    </v-main>
  </v-app>
</template>

<script></script>
<script>
import Logo from "@/components/Logo.vue";
import Login from "@/components/Login.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Logo,
    Login,
  },
  async mounted() {
    // await this.$store.dispatch("getTotalPostCount").then(() => {
    //   this.$store.dispatch("getPage", this.$store.state.currentPage);
    // });
    console.log(this.$store.state.allPostsCount);
    this.$root.$on("login", (mode) => {
      this.loginDialogMode = mode;
      this.loginDialog = true;
    });
  },
  data: () => ({
    loginDialog: false,
    loginDialogMode: "",
    menuDefault: [
      { label: "Log In" },
      { label: "Register" },
      { label: "Explore" },
    ],
    menuLoggedIn: [
      { label: "Profile" },
      { label: "Add Post" },
      { label: "Explore" },
      { label: "Log Out" },
    ],
  }),
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    whichMenu() {
      if (this.isLoggedIn) return this.menuLoggedIn;
      return this.menuDefault;
    },
    isAdmin() {
      if (!this.isLoggedIn) {
        return false
      } else {
        return this.$store.state.userData.isAdmin
      }
    }
  },
  methods: {
    openLoginDialog() {
      this.loginDialog = true;
    },
    changeDialogMode() {
      if (this.loginDialogMode === "Register") this.loginDialogMode = "Log In";
      else this.loginDialogMode = "Register";
    },
    async menuHandler(pressed) {
      if (pressed == "Log In" || pressed == "Register") {
        this.loginDialogMode = pressed;
        this.loginDialog = true;
      } else if (pressed == "Explore") {
        this.$router.push("/explore/1");
      } else if (pressed == "Add Post") {
        this.$router.push("/new-post");
      } else if (pressed == "Profile") {
        this.$router.push("/profile");
      } else if (pressed == "Admin") {
        this.$router.push("/admin");
      } else if (pressed == "Log Out") {
        await this.$store.dispatch("logOut");
        this.$router.push("/");
      }
    },
    test() {
      console.log("btn pressed");
    },
  },
};
</script>
