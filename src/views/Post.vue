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
        <v-icon class="ml-2">mdi-comment-processing-outline</v-icon></v-row
      >
      <v-divider style="margin-bottom: 30px;"></v-divider>
      <v-row v-for="(c,_) in currentComments.comments" :key="_">
        <v-card class="ma-2" elevation="1">
          <v-container fluid>
            <v-row>
              <v-col cols="2"><b>User {{c.user}}</b></v-col>
              <v-divider vertical></v-divider>
              <v-col>{{c.content}}</v-col>
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
  computed: {
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
};
</script>

<style></style>
