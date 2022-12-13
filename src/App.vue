<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <Logo class="pa-2" style="text-align: center"></Logo>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
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

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon> -->
      <!-- </v-btn> -->
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

<script>
import Logo from "@/components/Logo.vue";
import Login from "@/components/Login.vue";

export default {
  name: "App",
  components: {
    Logo,
    Login,
  },
  data: () => ({
    loginDialog: false,
    loginDialogMode: "",
    menuDefault: [
      { label: "Log In", cdt: true },
      { label: "Register", cdt: true },
    ],
    menuLoggedIn: [
      { label: "Profile", cdt: true },
      { label: "Add Post", cdt: true },
      { label: "Admin", cdt: true },
      { label: "Log Out", cdt: true },
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
  },
  methods: {
    openLoginDialog() {
      this.loginDialog = true;
    },
    changeDialogMode() {
      if (this.loginDialogMode === 'Register')
        this.loginDialogMode = 'Log In'
      else
        this.loginDialogMode = 'Register'
    },
    menuHandler(pressed) {
      if (pressed == "Log In" || pressed == "Register") {
        this.loginDialogMode = pressed;
        this.loginDialog = true;
      }
    },
    test() {
      console.log("btn pressed");
    },
  },
};
</script>
