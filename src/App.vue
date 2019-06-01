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
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
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
  padding-top: 80px;
  height: auto !important;
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: relative;
}
#main {
  margin: 0 auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding-bottom: 100px;
}
</style>
