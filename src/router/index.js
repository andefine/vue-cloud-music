import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import Login from '@/views/login/login'
import MyMusic from '@/views/my-music/my-music'
import Home from '@/views/home/home'
import Video from '@/views/video/video'
import Recommend from '@/views/recommend/recommend'
import Friend from '@/views/friend/friend'
import Radio from '@/views/radio/radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/my-music',
          name: 'my-music',
          component: MyMusic
        },
        {
          path: '/home',
          redirect: '/recommend',
          name: 'home',
          component: Home,
          children: [
            {
              path: '/recommend',
              name: 'recommend',
              component: Recommend
            },
            {
              path: '/friend',
              name: 'friend',
              component: Friend
            },
            {
              path: '/radio',
              name: 'radio',
              component: Radio
            }
          ]
        },
        {
          path: '/video',
          name: 'video',
          component: Video
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
