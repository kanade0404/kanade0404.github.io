<template>
  <v-card color="grey lighten-2">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs 12>
          <v-card color="teal lighten-3" v-for="item in items" :key="item.title">
            <v-card-title primary-title class="content-card">
              <div>
                <div class="headline">{{item.title}}</div>
                <div>{{item.description}}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'プログラミング',
        description: 'サーバーサイドの方が好きです。PythonとJavaScriptをよく使います。'
      },
      {
        title: 'ゲーム',
        description: '今はHearthStone。昔はポケモン(ダブル)とか遊戯王とか。'
      },
      {
        title: 'アニメ',
        description: 'コードギアスとかkey系が好きです。'
      },
      {
        title: '経済学',
        description: '以前は都市経済学とか内生的成長理論とか。最近はゲーム理論とかマーケットデザインなどの方が興味があります。'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.content-card {
  margin: 10px;
}
</style>
