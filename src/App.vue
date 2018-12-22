<template>
  <div id="app">
    <TheHeader/>
    <v-app class="body-content" light>
      <section id="main">
        <div class="content">
          <router-view/>
        </div>
      </section>
    </v-app>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
.body-content{
  padding-top: 40px;
}
#main {
  margin: 0 auto;
  background-color: #efefef;
  width: 60%;
}
.content {
  text-align: center;
}
</style>
