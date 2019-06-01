<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs1></v-flex>
      <v-flex xs10>
        <v-card light color="teal lighten-3">
          <v-img class="white--text" height="200px" v-bind:src="require('@/assets/headline.jpg')">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex 12 xs align-end flexbox>
                  <span class="display-1 font-weight bold">Who am I?</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <v-container fluid grid-list-md text-xs-center>
              <v-layout column wrap>
                <v-flex xs12>
                  <v-layout v-bind="binding">
                    <v-flex xs3>
                      <span>
                        <v-icon size="{sp:medium, pc:x-large}">account_circle</v-icon>
                        <span>かなで(kanade)</span>
                      </span>
                    </v-flex>
                    <v-flex xs3>
                      <span>
                        <v-icon size="{sp:medium, pc:x-large}">work</v-icon>
                        <span>Web Engineer</span>
                      </span>
                    </v-flex>
                    <v-flex xs3>
                      <span>
                        <v-icon size="{sp:medium, pc:x-large}">room</v-icon>
                        <span>Kanagawa</span>
                      </span>
                    </v-flex>
                    <v-flex xs3>
                      <span>
                        <v-icon size="{sp:medium, pc:x-large}">favorite</v-icon>
                        <span>Python</span>
                      </span>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-card-actions>
            <v-btn class="mx-3" href="https://twitter.com/py_kanade" dark icon>
              <v-icon size="24px">fab fa-twitter</v-icon>
            </v-btn>
            <v-btn class="mx-3" href="https://github.com/kanade0404" dark icon>
              <v-icon size="24px">fab fa-github</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs1></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pc: window.innerWidth > 480,
    sp: window.innerWidth <= 480
  }),
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.xs) binding.column = true;
      return binding;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
