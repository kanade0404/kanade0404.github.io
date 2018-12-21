<template>
  <v-app light>
    <section id="main">
      <div class="content">
        <div class="content-item icon">
          <img src="https://avatars3.githubusercontent.com/u/32828502?s=400&u=334422e5e252dbe944aa8b3ab56d2f1d6ca4398c&v=4" alt="">
        </div>
        <div class="content-item name">かなで(kanade)</div>
        <div class="content-item job">Web Engineer</div>
        <div class="content-item location">Kanagawa Japan</div>
      </div>
    </section>
  </v-app>
</template>

<style scoped>
#app{
  padding: 30px;
}
#main {
  margin: 0 auto;
  background-color: #efefef;
  width: 60%;
}
img{
  border-radius: 50%;
  height: 200px;
  border: 6px solid #008080;
}
.content{
  text-align: center;
}
.content-item{
  font-size: 30px;
  margin: 10px;
  color:#008000;
}
</style>
