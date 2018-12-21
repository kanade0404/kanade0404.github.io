import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Skill from '@/components/Skill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    }
  ]
})
