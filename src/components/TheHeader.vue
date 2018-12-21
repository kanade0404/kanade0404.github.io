<template>
  <v-toolbar>
    <v-toolbar-title><router-link to="/">kanade pages</router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>About Me</v-btn>
      <v-btn flat><router-link to="/skills">Skill</router-link></v-btn>
      <v-btn flat>SNS</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>
