<template>
  <div>
    <v-list class="teal darken-2" dark>
      <template v-for="item in items">
        <v-list-tile :key="item.title">
          <v-list-tile-content class="white--text">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {actions: '', title: 'プログラミング'},
      {actions: '', title: 'カードゲーム'},
      {actions: '', title: 'アニメ'},
      {actions: '', title: '経済学'}
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
