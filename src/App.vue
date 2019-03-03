<template>
  <div id="app">
    <TheHeader/>
    <v-app class="body-content" light>
      <section id="main">
        <router-view/>
      </section>
    </v-app>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
$sp: 480px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
html,
body,
#app {
  height: 100%;
}
.body-content {
  padding-top: 40px;
}
#main {
  margin: 0 auto;
  width: 60%;
  @include sp {
    width: 80%;
  }
}
</style>
