<template>
  <div>
    <div class="skills-info">
      <div class="skill-category">
        <div class="font-weight-medium display-2 business">業務経験</div>
        <div class="skills-item dotnet">.NET Framework</div>
        <div class="skills-item spring-boot">Spring Boot</div>
        <div class="skills-item angularjs">AngularJS</div>
      </div>
      <div class="skill-category">
        <div class="font-weight-medium display-2 private">個人経験</div>
        <div class="skills-item django">Django</div>
        <div class="skills-item laravel">Laravel</div>
        <div class="skills-item vue">Vue</div>
        <div class="skills-item angular">Angular</div>
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
.larvel{
  color: #FF00FF;
}
</style>
