<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs2></v-flex>
      <v-flex xs8>
        <v-card color="teal lighten-3" v-for="item in items" :key="item.title">
          <v-card-title primary-title class="content-card">
            <div>
              <div class="headline title">
                <v-icon>{{item.icon}}</v-icon>
                {{item.title}}
              </div>
              <div>{{item.description}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs2></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "プログラミング",
        icon: "computer",
        description:
          "サーバーサイド>フロントエンド。現在仕事はJavaとJavaScript、個人だとPythonやTypeScriptを使います。GoやKotlinにも興味あり。"
      },
      {
        title: "ゲーム",
        icon: "videogame_asset",
        description: "今はHearthStone。昔はポケモン(ダブル)とか遊戯王とか。"
      },
      {
        title: "アニメ",
        icon: "tv",
        description: "コードギアス, Visual Arts作品,  響け！ユーフォニアム"
      },
      {
        title: "経済学",
        icon: "school",
        description:
          "以前はUrban EconomicsとかEconomic Growth Theoryとか。最近はGame TheoryとかMarket Designなどの方が興味があります。"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.title {
  text-align: left;
}
.content-card {
  margin: 10px;
}
</style>
