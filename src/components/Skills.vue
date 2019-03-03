<template>
  <div class="content">
    <div class="skill-category">
      <h3 class="font-weight-medium headline skills-title business">業務</h3>
      <div class="skills-content">
        <div class="skills-item spring-boot">Spring Boot</div>
        <div class="skills-item dotnet">.NET Framework</div>
        <div class="skills-item angularjs">AngularJS</div>
        <div class="skills-item">PostgreSQL</div>
        <div class="skills-item">Git</div>
        <div class="skills-item">Subversion</div>
      </div>
    </div>
    <div class="skill-category">
      <h3 class="font-weight-medium headline skills-title private">個人</h3>
      <div class="skills-content">
        <div class="skills-item django">Django</div>
        <div class="skills-item laravel">Laravel</div>
        <div class="skills-item vue">Vue</div>
        <div class="skills-item angular">Angular</div>
        <div class="skills-item">Docker</div>
      </div>
    </div>
    <div class="skill-category">
      <h3 class="font-weight-medium headline skills-title">興味</h3>
      <div class="skills-content">
        <div class="skills-item">テスト自動化</div>
        <div class="skills-item">Kotlin</div>
        <div class="skills-item">Go言語</div>
        <div class="skills-item">Google App Engine</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  background-color: #e0e0e0;
  padding: 20px;
}
.skills-title {
  text-align: center;
}
.skills-content {
  margin:20px;
}
.skills-item{
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
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
.angularjs, .angular{
  color: red;
}
.dotnet{
  color: #008000;
}
.spring-boot{
  color: #808000;
}
.vue{
  color: #00FF00;
}
.django{
  color: #0000FF;
}
.laravel{
  color: #FF00FF;
}
</style>
