<template>
  <div>
    <div class="skills-info">
      <div class="skill-category">
        <div class="font-weight-medium display-2 business">Business</div>
        <div class="skills-item cs">C#(2018.4〜9)</div>
        <div class="skills-item java">Java(2018.10〜9)</div>
        <div class="skills-item js">JavaScript(2018.4〜6, 10〜)</div>
      </div>
      <div class="skill-category">
        <div class="font-weight-medium display-2 private">Private</div>
        <div class="skills-item py">Python(1年以上)</div>
        <div class="skills-item php">PHP(ちょっとだけ)</div>
        <div class="skills-item ts">TypeScript(ちょっとだけ)</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills-item{
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
}
.category-type{
  margin: 10px;
}
.business{
  color: #795548;
}
.private{
  color: #607D8B;
}
.cs{
  color: #008000;
}
.java{
  color: #808000;
}
.js{
  color: #00FF00;
}
.py{
  color: #0000FF;
}
.php{
  color: #FF00FF;
}
.ts{
  color: #008080;
}
</style>
