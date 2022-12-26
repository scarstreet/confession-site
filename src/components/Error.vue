<template>
    <v-dialog
    v-model="isDialogOpen"
    scrollable
    persistent
    :overlay="false"
    max-width="200px"
    transition="dialog-transition"
  >
    <v-card width="300px" height="200px">
      <v-card-title primary-title>
        <span>Oops!</span>
        <v-spacer/>
        <v-btn icon @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        {{ errorMessage }}
      </v-card-text>
      <!-- <v-toolbar absolute width="100%" color="black">
        <v-toolbar-title style="color: white">Oops!</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon color="white" @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar> -->
      <!-- <v-container :style="'margin-top:' + marginTop + 'px; height:100%'" fluid>
        <v-col align="center" justify="center" style="height:100%">
          <v-row class="h3">Oops!</v-row>
          <v-row>{{ errorMessage }}</v-row>
        </v-col>
      </v-container> -->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Error',
  props: {
    isDialogOpen: Boolean,
    errorMessage:String
  },
  methods: {
    closeDialog() {
      this.$emit('close-error')
    }
  }
}
</script>

<style>

</style>