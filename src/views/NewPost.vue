<template>
  <v-container fluid>
    <v-dialog v-model="toSubmit" width="500px" height="300px">
      <v-card width="500px" height="300px">
        <v-container fluid style="height: 100%">
          <v-col style="height: 100%" align="center" justify="center">
            <v-row align="center" justify="center" style="height:70%; width: 80%;">
              <h2>
                Are you sure you want to submit your post "{{ title }}"?
              </h2>
            </v-row>
            <v-row>
              <v-col><v-btn color="red" text @click="toSubmit = false">Cancel</v-btn></v-col>
              <v-col><v-btn color="primary" text @click="submitPost()">Submit</v-btn></v-col>
            </v-row>
          </v-col>
        </v-container>
      </v-card>
    </v-dialog>
    <v-col>
      <v-form v-model="isFormValid">
      <v-row justify="center" style="margin-bottom:30px;margin-top:10px">
        <h1>New Confession</h1>
      </v-row>
      <v-row>
        <v-text-field outlined
          name="name"
          label="Title"
          v-model="title"
          :rules="[rules.required, rules.maxLen]"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-textarea outlined
          label="Content"
          name="name"
          textarea
          v-model="content"
          :rules="[rules.required]"
        ></v-textarea>
      </v-row>
      </v-form>
      <v-row justify="center">
        <v-btn color="primary" :disabled="!isFormValid" @click="toSubmit = true">submit</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'NewPost',
  data: () => ({
    isFormValid: false,
    toSubmit: false,
    title: '',
    content: '',
    rules: {
      required: (v) => !!v || "This field may not be empty.",
      maxLen: (v) => v.length < 100 && v.length!=0 || "Max 100 characters.",
    },
  }),
  computed: {},
  methods: {
    async submitPost() { 
      await this.$store.dispatch('addPost', {
        title: this.title,
        content: this.content,
        commentCnt: 3,
      })
      this.$router.push('/profile')
      this.clearFields()
    },
    clearFields() { 
      this.title= ''
      this.content = ''
      this.isFormValid = false
      this.toSubmit = false
    }
  }
}
</script>

<style>

</style>