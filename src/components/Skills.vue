<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap v-bind="binding">
      <v-flex xs12>
        <v-card light color="teal lighten-3">
          <v-card-text class="px-0">{{categories[0]}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="lang in languages" v-bind:key="lang.name">
        <v-card light color="light-green lighten-4">
          <v-card-text class="px-0">{{lang.name}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card light color="teal lighten-3">
          <v-card-text class="px-0">{{categories[1]}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="fw in framework" v-bind:key="fw.name">
        <v-card light color="light-green lighten-4">
          <v-card-text class="px-0">{{fw.name}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card light color="teal lighten-3">
          <v-card-text class="px-0">{{categories[2]}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="db in databases" v-bind:key="db.name">
        <v-card light color="light-green lighten-4">
          <v-card-text class="px-0">{{db.name}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card light color="teal lighten-3">
          <v-card-text class="px-0">{{categories[3]}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="ot in others" v-bind:key="ot.name">
        <v-card light color="light-green lighten-4">
          <v-card-text class="px-0">{{ot.name}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    categories: ["Language", "Framework", "Database", "Others"],
    languages: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" }
    ],
    framework: [
      { name: "Django" },
      { name: "Spring Boot" },
      { name: "Angular" },
      { name: "Vue.js" }
    ],
    databases: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Oracle" },
      { name: "MongoDB" }
    ],
    others: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "GClP" }
    ]
  }),
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.xs) binding.column = true;
      return binding;
    }
  }
};
</script>



<style lang="scss" scoped>
</style>
