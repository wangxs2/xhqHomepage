import Vue from 'vue';
import Router from 'vue-router';
import news from '@/views/news/index' 
import home from '@/views/home/index'
import platform from '@/views/platform/index' 

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'layout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/layout/index.vue'),
      children: [
        {
          path: '/news',
          name: '新闻资讯',
          component:news,
        },
        {
          path: '/home',
          name: '网站首页',
          component:home,
        },
        {
          path: '/platform',
          name: '平台介绍',
          component:platform,
        },
        
      ],
    },


   
  ],
});
