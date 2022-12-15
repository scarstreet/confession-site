<template>
  <v-container fluid>
    <v-col>
      <v-row class="my-3 mx-2"
        ><h1>{{ currentPost.title }}</h1></v-row
      >
      <v-row class="mx-2 my-3 text-pre-wrap" style="text-align: justify">
        {{ currentPost.content }}</v-row
      >
      <v-row class="ma-4" align="center" justify="center"
        >{{ currentPost.commentCnt }}
        <v-icon class="ml-2">mdi-comment-processing-outline</v-icon>
      </v-row>
      <v-divider style="margin-bottom: 30px"></v-divider>
      <v-row align="center" justify="center">
        <v-textarea
          v-model="comment"
          :disabled="!isLoggedIn"
          outlined
          :label="textAreaHint"
        ></v-textarea>
        <v-btn icon color="primary" :disabled="!isLoggedIn" style="margin-bottom:30px" @click="addComment()">
          <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-row>
      <v-row v-for="(c, _) in currentComments.comments" :key="_" style="width:100%" fluid>
        <v-card class="ma-2" elevation="1" style="width: 100%">
          <v-container fluid>
            <v-row>
              <v-col cols="2"
                ><b>{{ c.user }}</b></v-col
              >
              <v-divider vertical></v-divider>
              <v-col>{{ c.content }}</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Post",
  created() {},
  data: () => ({
    comment: "",
  }),
  computed: {
    textAreaHint() {
      if (this.isLoggedIn) return "Comment";
      return "Log in or register to comment on posts";
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    currentPostID() {
      return this.$route.params.id;
    },
    currentPost() {
      return this.$store.state.currentPost;
    },
    currentComments() {
      return this.$store.state.currentComments;
    },
  },
  methods: {
    async addComment() {
      await this.$store.dispatch('addComment', this.comment, this.$route.params.id)
      this.comment=''
    },
  },
};
</script>

<style></style>
