<template>
  <v-dialog
    v-model="isDialogOpen"
    scrollable
    persistent
    :overlay="false"
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card width="500px" height="420px">
      <v-toolbar absolute width="100%" color="black">
        <v-toolbar-title style="color: white">{{ dialogMode }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon color="white" @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container :style="'margin-top:'+marginTop+'px'">
        <v-row align="center" justify="center" style="height:100%">
          <v-col v-if="dialogMode == 'Register'" align="center" justify="center"  style="height:100%">
            <v-form v-model="isFormValid">
              <v-text-field
                v-model="username"
                :rules="[rules.required, rules.minLen]"
                name="username"
                label="Username"
              ></v-text-field>
              <v-text-field
                :append-icon="pwShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="pwShow ? 'text' : 'password'"
                :rules="[rules.required, rules.minLen]"
                v-model="password"
                name="password"
                label="Password"
                @click:append="pwShow = !pwShow"
              ></v-text-field>
              <v-text-field
                :append-icon="repwShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="repwShow ? 'text' : 'password'"
                :rules="[rules.required]"
                v-model="rePassword"
                name="repassword"
                label="Re-confirm Password"
                @click:append="repwShow = !repwShow"
              ></v-text-field>
            </v-form>
            <v-btn :disabled="!isFormValid || password!=rePassword" color="black" style="color: white" @click="Register()">{{ dialogMode }}</v-btn>
            <p v-if="hasError" class="caption" style="color: red">error message goes here</p>
            <v-btn text color="black" small @click="changeDialogMode()"
              >Already have an account? Click here to log in</v-btn
            >
          </v-col>
          <v-col v-else align="center" justify="center"  style="height:100%">
            <v-form v-model="isFormValid">
              <v-text-field
                v-model="username"
                :rules="[rules.required]"
                name="username"
                label="Username"
              ></v-text-field>
              <v-text-field
                :append-icon="pwShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="pwShow ? 'text' : 'password'"
                :rules="[rules.required]"
                v-model="password"
                name="password"
                label="Password"
                @click:append="pwShow = !pwShow"
              ></v-text-field>
            </v-form>
            <v-btn :disabled="!isFormValid" color="black" style="color: white" @click="logIn()">{{ dialogMode }}</v-btn>
            <p v-if="hasError" class="caption" style="color: red">error message goes here</p>
            <v-btn text color="black" small @click="changeDialogMode()"
              >Don't have an account? Click here to register!</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "Login",
  props: {
    isDialogOpen: Boolean,
    dialogMode: String,
  },
  data: () => ({
    pwShow: false,
    repwShow: false,
    hasError: false,
    isFormValid: false,
    username: "",
    password: "",
    rePassword: "",
    rules: {
      required: (v) => !!v || "This field may not be empty.",
      minLen: (v) => v.length >= 4 || "Min 4 characters.",
    },
  }),
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    marginTop() {
      if (this.dialogMode == 'Register')
        return '70';
      else return '120';
    },
    passwordSame() {
      return this.password == this.rePassword;
    },
  },
  methods: {
    changeDialogMode() {
      this.clearTextFields();
      this.$emit('change-dialog-mode');
    },
    closeDialog() {
      // console.log(this.dialogMode);
      this.$emit("close-dialog");
      this.clearTextFields()
    },
    clearTextFields() {
      this.pwShow=  false;
      this.repwShow= false;
      this.hasError= false;
      this.isFormValid= false;
      this.username= "";
      this.password= "";
      this.rePassword= "";
    },
    async Register() {
      await this.$store.dispatch('addUser', this.username, this.password)
      this.closeDialog()
    },
    async logIn() {
      await this.$store.dispatch('logIn', this.username, this.password)
      this.closeDialog()
    }
  },
};
</script>

<style></style>
