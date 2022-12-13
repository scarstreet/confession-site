<template>
  <div class="subtitle-1" style="text-align: center" v-text="'THE CONFESSION SITE'" @click="goHome()">
  </div>
</template>

<script>

export default {
  name: 'Logo',

  data: () => ({
    //
  }),
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
};
</script>