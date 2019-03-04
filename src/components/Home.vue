<template>
  <div class="content">
    <div class="content-item icon">
      <img
      class="icon"
        src="https://avatars3.githubusercontent.com/u/32828502?s=400&u=334422e5e252dbe944aa8b3ab56d2f1d6ca4398c&v=4"
        alt
      >
    </div>
    <div class="content-info">
      <div class="content-item name">
        <span class="group pa-2">
          <v-icon size="{sp:medium, pc:x-large}">account_circle</v-icon>
        </span>
        かなで(kanade)
      </div>
      <div class="content-item job">
        <span class="group pa-2">
          <v-icon size="{sp:medium, pc:x-large}">work</v-icon>
        </span>
        Web Engineer
      </div>
      <div class="content-item location">
        <span class="group pa-2">
          <v-icon size="{sp:medium, pc:x-large}">room</v-icon>
        </span>
        Kanagawa
      </div>
    </div>
  </div>
</template>

<script>
export default {
  return: {
    data: {
      pc: window.innerWidth > 480,
      sp: window.innerWidth <= 480
    }
  }
}
</script>

<style lang="scss" scoped>
$sp: 480px;
$tab: 959px;
$ipadpro: 1024px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin pro {
  @media (max-width: ($ipadpro)) {
    @content;
  }
}
img {
  border-radius: 50%;
  height: 200px;
  border: 6px solid #008080;
}
.content {
  text-align: center;
  background-color: #e0e0e0;
  padding: 10px;
}
.content-info {
  width: 60%;
  margin: 0 auto;
  padding-left: 110px;
  text-align: left;
  @include tab {
    width: 100%;
    padding-left: 0;
  }
  @include pro {
    width: 70%;
    padding-left: 50px;
  }
  @include sp {
    padding-left: 5px;
    width: 100%;
  }
}
.content-item {
  font-size: 30px;
  margin: 10px;
  color: #008000;
  @include sp {
    font-size: 15px;
  }
  .icon {
    @include sp {
      height: 100px;
    }
  }
}
</style>
