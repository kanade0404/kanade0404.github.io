<template>
  <v-toolbar color="teal lighten-3">
    <v-toolbar-title class="title" @click="clickedTitle"><span>kanade page</span></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="clickedAboutMe">About Me</v-btn>
      <v-btn flat @click="clickedSkills">Skills</v-btn>
      <v-btn flat @click="clickedContact">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    clickedTitle () {
      this.$router.push('/')
    },
    clickedAboutMe () {
      this.$router.push('/about')
    },
    clickedSkills () {
      this.$router.push('/skills')
    },
    clickedContact () {
      this.$router.push('/contact')
    }
  }
}
</script>

<style>
.title{
  cursor: pointer;
}
</style>
