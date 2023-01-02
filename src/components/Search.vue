<template>
  <v-row>
    <v-text-field
      v-model="toSearch"
      dense
      outlined
      rounded
    ></v-text-field>
    <v-btn icon @click="find">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    toSearch:'',
  }),
  methods: {
    find() {
      this.$router.push(`/search/${this.toSearch}/1`)
    }
  }

}
</script>

<style>

</style>