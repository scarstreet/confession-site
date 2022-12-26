<template>
  <v-content class="ma-2 pa-0" fluid>
    <v-row justify="center" align="center">
      <v-btn icon :disabled="currentPage == 1" @click="changePage(-1)"
        ><v-icon>mdi-chevron-left</v-icon></v-btn
      >
      {{currentPage}}
      <v-btn
        icon
        :disabled="currentPage == availablePages"
        @click="changePage(1)"
        ><v-icon>mdi-chevron-right</v-icon></v-btn
      >
    </v-row>
  </v-content>
</template>

<script>
export default {
  name: "PageControl",
  data: () => ({}),
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    availablePages() {
      return this.$store.state.availablePages;
    },
  },
  methods: {
    changePage(n) {
      var toPage = parseInt(this.currentPage) + n
      this.$router.push(`/explore/${toPage}`)
      // this.$store.dispatch('getPage', this.currentPage + n)
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style></style>
