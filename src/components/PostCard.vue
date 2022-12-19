<template>
  <v-card class="ma-3" width="85%" min-height="250px">
    <v-dialog v-model="toDelete" width="500px" height="300px">
      <v-card width="500px" height="300px">
        <v-container fluid style="height: 100%">
          <v-col style="height: 100%" align="center" justify="center">
            <v-row align="center" justify="center" style="height:70%; width: 80%;">
              <h2>
                Are you sure you want to delete your post "{{ title }}"?
              </h2>
            </v-row>
            <v-row>
              <v-col><v-btn color="red" text @click="deletePost()">DELETE</v-btn></v-col>
              <v-col><v-btn color="primary" text @click="toDelete = false">Cancel</v-btn></v-col>
            </v-row>
          </v-col>
        </v-container>
      </v-card>
    </v-dialog>
    <v-card-title>
      <span  @click="gotoPost()">{{ title }}</span>
      <v-spacer></v-spacer>
      <v-btn v-if="isOwned" @click="toDelete = true" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text
      @click="gotoPost()"
      max-height="20px"
      class="overflow-hidden text-pre-wrap"
      style="
        max-height: 120px;
        text-align: justify;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
      ">{{ content }}</v-card-text
    >
    <v-card-actions class="ma-4" @click="gotoPost()">
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
    isOwned: Boolean,
    commentCnt: Number,
  },
  data: () => ({
    toDelete: false,
  }),
  methods: {
    deletePost() {
      this.toDelete = false;
      this.$store.dispatch('deletePost', this.id);
    },
    async gotoPost() {
      console.log(this.id);
      await this.$store.dispatch("getPost", this.id);
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
