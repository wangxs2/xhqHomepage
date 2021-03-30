import Vue from 'vue';
import Router from 'vue-router';
import news from '@/views/news/index' 
import home from '@/views/home/index'
import platform from '@/views/platform/index' 
import joinUs from '@/views/joinUs/index' 
import joinUsDetail from '@/views/joinUsDetail/index' 

Vue.use(Router);

const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
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
        {
          path: '/joinUs',
          name: '加入我们',
          component:joinUs,
        },
        {
          path: '/joinUsDetail',
          name: '加入我们详情',
          component:joinUsDetail,
        },
        
      ],
    },


   
  ],
});
