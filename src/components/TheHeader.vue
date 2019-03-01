<template>
  <v-toolbar color="teal lighten-3">
    <v-toolbar-title class="title" @click="clickedTitle">
      <span>kanade.dev</span>
    </v-toolbar-title>
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

<style lang="scss" scoped>
$sp: 480px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.title {
  cursor: pointer;
  height: 25px;
}
.side-icon {
  display: none;
  @include sp {
    display: inline;
  }
}
</style>
