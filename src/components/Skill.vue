<template>
  <div class="container">
    <div class="wrapper">
      <v-treeview :items="items"></v-treeview>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Python',
        children: [
          { id: 2, name: 'Django' },
          { id: 3, name: 'TensorFlow' },
          { id: 4, name: 'PyTorch' }
        ]
      },
      {
        id: 5,
        name: 'JavaScript',
        children: [
          { id: 6, name: 'AngularJS' },
          { id: 7, name: 'Vue.js' },
          { id: 8, name: 'jQuery' }
        ]
      },
      {
        id: 9,
        name: 'Java',
        children: [
          { id: 10, name: 'Spring Boot' }
        ]
      },
      {
        id: 11,
        name: 'C#',
        children: [
          { id: 12, name: '.NET Framework' }
        ]
      },
      {
        id: 13,
        name: 'PHP',
        children: [
          { id: 14, name: 'Laravel' }
        ]
      },
      {
        id: 15,
        name: 'TypeScript',
        children: [
          { id: 16, name: 'Angular' }
        ]
      },
      {
        id: 17,
        name: 'SQL',
        children: [
          { id: 18, name: 'MySQL' },
          { id: 19, name: 'PostgreSQL' },
          { id: 20, name: 'Oracle' }
        ]
      },
      {
        id: 21,
        name: 'Git'
      },
      {
        id: 22,
        name: 'SubVersion'
      },
      {
        id: 23,
        name: 'Vagrant'
      },
      {
        id: 24,
        name: 'Docker'
      },
      {
        id: 25,
        name: 'Google Cloud Platform'
      }
    ]
  })
}
</script>

<style scoped>
.wrapper {
  margin: 30px;
  text-align: center;
  background-color: #efefef;
}
</style>
