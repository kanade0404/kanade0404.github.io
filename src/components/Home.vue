<template>
  <div>
    <div class="content-item icon">
      <img
        src="https://avatars3.githubusercontent.com/u/32828502?s=400&u=334422e5e252dbe944aa8b3ab56d2f1d6ca4398c&v=4"
        alt
      >
    </div>
    <div class="content-info">
      <div class="content-item name">
        <span class="group pa-2">
          <v-icon x-large>account_circle</v-icon>
        </span>
        かなで(kanade)
      </div>
      <div class="content-item job">
        <span class="group pa-2">
          <v-icon x-large>work</v-icon>
        </span>
        Web Engineer
      </div>
      <div class="content-item location">
        <span class="group pa-2">
          <v-icon x-large>room</v-icon>
        </span>
        Kanagawa Japan
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  height: 200px;
  border: 6px solid #008080;
}
.content-info {
  width: 50%;
  margin: 0 auto;
  padding-left: 60px;
  text-align: left;
}
.content-item {
  font-size: 30px;
  margin: 10px;
  color: #008000;
}
</style>
