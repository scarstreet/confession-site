<template>
  <v-container fluid>
    <v-col style="width:96%; margin-left:auto;margin-right:auto">
      <v-row align="center" style="margin-top:20px;margin-bottom:40px">
        <v-avatar size="70" color="primary">
          <span  class="heading" style="color:white">{{ userName[0] }}</span>
        </v-avatar>
        <h1 class="ml-5">{{ userName }}</h1>
        <v-spacer></v-spacer>
        <span class="mr-4" style="color:rgba(180,180,180,255)">posts : {{ userPosts.length }}</span>
      </v-row>
      <v-row>
        <v-divider></v-divider>
      </v-row>
      <v-row style="margin-top:30px; margin-bottom:20px">
        <span class="display-1">Posts</span>
      </v-row>
      <v-row v-for="p,_ in userPosts" :key="_" justify="center">
        <PostCard
          :id="p.id"
          :title="p.title"
          :content="p.content"
          :isOwned="true"
          :commentCnt="p.comment_count"
          style="width:95%"
        ></PostCard>
      </v-row>
    </v-col>
  </v-container> 
</template>

<script>
import PostCard from '../components/PostCard.vue';

export default {
  name: "Profile",
  data: () => ({

  }),
  components: {
    PostCard
  },
  computed: {
    // isPostOwned(id) {
    //   return this.$store.commit("isPostOwned", id);
    // },
    userPosts() { 
      console.log(this.$store.state.ownPosts)
      return this.$store.state.ownPosts
    },
    userName() { 
      return this.$store.state.userData.name || 'username'
    }
  },
  methods: {

  },
};
</script>

<style></style>
