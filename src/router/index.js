import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },//this.$route.meta.keepAlive
    {
      path: '/home',
      component: () => import('../components/Home.vue'),
      meta: {keepAlive: true,title:'首页'}
    },
    {
      path: '/collect',
      //component: Collect
      component: () => import('../components/Collect.vue'),
      meta: {title:'收藏'}
    },
    {
      path: '/add',
      component: () => import('../components/Add.vue'),
      meta: {title:'添加'}
    },
    {
      path: '/detail/:bid',
      component: () => import('../components/Detail.vue'),
      meta: {title:'详情'},
      name: 'detail'
    },
    {
      path: '/list',
      component: () => import('../components/List.vue'),
      meta: {title:'列表'}
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
