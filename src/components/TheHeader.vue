<template>
  <div>
    <v-navigation-drawer
      clipped
      app
      v-model="navBar"
      width="200"
    >
      <v-list dense class="pt-0">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click="clickedAboutMe">
            <v-list-tile-title>About Me</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <span style="color: gray">
              <i class="fas fa-lg fa-laptop-code"></i>
            </span>
          </v-list-tile-action>
          <v-list-tile-content @click="clickedSkills">
            <v-list-tile-title>Skills</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contacts</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click="clickedContact">
            <v-list-tile-title>Contacts</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed color="teal lighten-3">
      <v-toolbar-title class="title" @click="clickedTitle">
        <span>kanade.dev</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="clickedAboutMe">About Me</v-btn>
        <v-btn flat @click="clickedSkills">Skills</v-btn>
        <v-btn flat @click="clickedContact">Contact</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="side-icon" @click.stop="navBar = !navBar"></v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    navBar: false
  }),
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
$tab: 959px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
.title {
  cursor: pointer;
  height: 25px;
}
.side-icon {
  display: none;
  @include tab {
    display: inline;
  }
  @include sp {
    display: inline;
  }
}
</style>
