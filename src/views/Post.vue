<template>
  <div>post {{currentPostID}}</div>
</template>

<script>
export default {
  name: 'Post',
  created() {
    this.$watch(
      () => {
        this.$route.params,
          (to, from) => {
          console.log(to)
          console.log(from)
        }
      }
    )
  },
  computed: {
    currentPostID() {
      return this.$route.params.id
    }
  }
}
</script>

<style>

</style>