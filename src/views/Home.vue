<template>
  <div :style="bgImage">
    <v-col style="height:100%; color: white; padding-top: 70px;" justify="center" align="center">
      <v-row>
        <v-col align="center">
          <p class="h1" style="font-size: 60px">THE<br class="smol">CONFESSION<br class="smol">SITE</p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <p class="overline">Welcome to the confession site.<br>A place where you can confess your secrets anonymously.</p>
      </v-row>
      <v-row justify="center">
        <v-col align="center" justify="center" style="text-align:center">
          <v-row justify="center">
            <v-btn class="ma-2" color="rgba(0,0,0,.7)" style="color:white" @click="toExplore()">Read Confessions</v-btn>
          </v-row>
          <v-row v-if="!isLoggedIn" justify="center">
            <v-btn class="ma-2" color="rgba(0,0,0,.7)" style="color:white" @click="login('Register')">Register</v-btn>
          </v-row>
          <v-row v-if="!isLoggedIn" justify="center">
            <v-btn class="ma-2" color="rgba(0,0,0,.7)" style="color:white" @click="login('Log In')">Log In</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
  }),
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    bgImage() {
      return {
        backgroundImage: `url(${require("../assets/background.jpg")})`,
        backgroundColor: 'rgba(0,0,0,.8)',
        backgroundBlendMode: 'multiply',
        backgroundSize: "cover",
        height: "100%",
      };
    },
  },
  methods: {
    login(mode) {
      this.$root.$emit('login',mode)
    },
    toExplore() {
      this.$router.push('/explore')
    }
  }
  
};
</script>

<style>

</style>
