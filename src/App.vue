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
html, body, #app{
  height: 100%;
}
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
