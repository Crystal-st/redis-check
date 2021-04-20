import Vue from 'vue'
import Router from 'vue-router'
import RedisShow from '@/components/RedisShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RedisShow',
      component: RedisShow
    }
  ]
})
