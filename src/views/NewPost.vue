<template>
  <v-container fluid>
    <span>{{ mode }}</span>
    <span>{{ toEdit }}</span>
    <v-dialog v-model="toSubmit" width="500px" height="300px">
      <v-card width="500px" height="300px">
        <v-container fluid style="height: 100%">
          <v-col style="height: 100%" align="center" justify="center">
            <v-row
              align="center"
              justify="center"
              style="height: 70%; width: 80%"
            >
              <h2>
                Are you sure you want to {{ mode }} your post "{{ title }}"?
              </h2>
            </v-row>
            <v-row>
              <v-col
                ><v-btn color="red" text @click="toSubmit = false"
                  >Cancel</v-btn
                ></v-col
              >
              <v-col
                ><v-btn color="primary" text @click="commitPost()">{{
                  mode
                }}</v-btn></v-col
              >
            </v-row>
          </v-col>
        </v-container>
      </v-card>
    </v-dialog>
    <v-col>
      <v-form v-model="isFormValid">
        <v-row justify="center" style="margin-bottom: 30px; margin-top: 10px">
          <h1>New Confession</h1>
        </v-row>
        <v-row>
          <v-text-field
            outlined
            label="Title"
            id="title"
            v-model="title"
            :rules="[rules.required, rules.maxLen]"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-textarea
            outlined
            label="Content"
            id="content"
            textarea
            v-model="content"
            :rules="[rules.required]"
          ></v-textarea>
        </v-row>
      </v-form>
      <v-row justify="center">
        <v-btn
          color="primary"
          :disabled="!isFormValid"
          @click="toSubmit = true"
          >{{ mode }}</v-btn
        >
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
// import eventBus from '../main';

export default {
  name: "NewPost",
  data: () => ({
    isFormValid: false,
    toSubmit: false,
    rules: {
      required: (v) => !!v || "This field may not be empty.",
      maxLen: (v) => (v.length < 100 && v.length != 0) || "Max 100 characters.",
    },
  }),
  computed: {
    i_title() {
      var x = document.getElementById("title").value;
      return x;
    },
    i_content() {
      var x = document.getElementById("content").value;
      return x;
    },
    mode() {
      return this.$store.state.postMode;
    },
    title() {
      return this.$store.state.editPost.title;
    },
    id() {
      return this.$store.state.editPost.id;
    },
    content() {
      return this.$store.state.editPost.content;
    },
    toEdit() {
      return this.$store.state.editPost;
    },
  },
  methods: {
    commitPost() {
      if (this.mode == "submit") this.submitPost();
      else this.editPost();
    },
    async editPost() {
      await this.$store.dispatch("updatePost", {
        title: this.i_title,
        content: this.i_content,
        postId: this.id,
      });
      this.$router.push("/profile");
      this.clearFields();
    },
    async submitPost() {
      await this.$store.dispatch("addPost", {
        title: this.i_title,
        content: this.i_content,
      });
      this.$router.push("/profile");
      this.clearFields();
    },
    clearFields() {
      this.isFormValid = false;
      this.toSubmit = false;
      this.$store.state.editPost.title = "";
      this.$store.state.editPost.id = -1;
      this.$store.state.editPost.content = "";
      this.$store.state.postMode = "submit";
    },
  },
};
</script>

<style></style>
