<template>
  <v-container fluid>
    <v-col>
      <v-row class="mt-1" id="top" style="width:80%; margin-left: auto; margin-right: auto;"><Search/></v-row>
      <v-row><PageControl/></v-row>
      <v-row
        v-for="(p, _) in currentPosts"
        :key="_"
        align="center"
        justify="center"
        style="margin-left: auto; margin-right: auto"
      >
        <PostCard
          :id="p.id"
          :title="p.title"
          :content="p.content"
          :isOwned="isPostOwned(p.id)"
          :commentCnt="p.comment_count"
          style="margin-left: auto; margin-right: auto"
        ></PostCard>
      </v-row>
      <v-row><PageControl/></v-row>
    </v-col>
  </v-container>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import PageControl from "../components/PageControl.vue";
import Search from "@/components/Search.vue"

export default {
  name: "Explore",
  components: {
    PostCard,
    PageControl,
    Search,
  },
  data: () => ({}),
  mounted() {},
  computed: {
    currentPosts() {
      return this.$store.state.posts;
    },
    currentPage() {
      return this.$store.state.currentPage;
    },
  },
  methods: {
    isPostOwned(id) {
      if (this.$store.state.isLoggedIn == false) return false;
      if (this.$store.state.ownPosts.filter((p) => p.id == id).length != 0) return true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
