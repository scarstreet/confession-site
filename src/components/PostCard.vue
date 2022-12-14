<template>
  <v-card class="ma-3" width="85%" min-height="250px" @click="gotoPost()">
    <v-card-title>
      {{ title }}
      <v-spacer></v-spacer>
      <v-btn v-if="isOwned" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text
      max-height="20px"
      class="overflow-hidden text-pre-wrap"
      style="
        max-height: 120px;
        text-align: justify;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
      "
      >{{ content }}</v-card-text
    >
    <v-card-actions class="ma-4">
      <v-spacer></v-spacer>
      {{ commentCnt }}
      <v-icon class="ml-2">mdi-comment-processing-outline</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    id: Number,
    title: String,
    content: String,
    isOwned: String,
    commentCnt: Number,
  },
  data: () => ({}),
  methods: {
    deletePost() {
      this.$store.dispatch();
    },
    async gotoPost() {
      console.log(this.id);
      await this.$store.dispatch('getPost', this.id);
      this.$router.push("/post/" + this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
v-card-text {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
</style>
