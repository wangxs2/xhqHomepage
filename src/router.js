import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home/index'
import platform from '@/views/platform/index' 
import joinUs from '@/views/joinUs/index' 
import joinUsDetail from '@/views/joinUsDetail/index' 
import setUp from '@/views/setUp/index' 
import setUpOne from '@/views/setUp/setUpOne/index' 
import setUpTwo from '@/views/setUp/setUpTwo/index' 
import setUpThree from '@/views/setUp/setUpThree/index' 
import news from '@/views/news/index' 
import newsOne from '@/views/news/newsOne/index' 
import newsTwo from '@/views/news/newsTwo/index' 

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
        {
          path: '/setUp',
          name: '机构设置',
          component: setUp,
          children: [
            {
              path: '/setUp/setUpOne',
              name: '智能无人系统感知与导航联合实验室',
              component: setUpOne
            },
            {
              path: '/setUp/setUpTwo',
              name: '卫星导航测试实验室',
              component: setUpTwo
            },
            {
              path: '/setUp/setUpThree',
              name: '智慧交通研发服务创新平台',
              component: setUpThree
            }
          ]
        },
        {
          path: '/news',
          name: '新闻资讯',
          component:news,
          children: [
            {
              path: '/news/newsOne',
              name: '平台新闻',
              component: newsOne
            },
            {
              path: '/news/newsTwo',
              name: '行业资讯',
              component: newsTwo
            }
          ]
        }
        
      ],
    },


   
  ],
});
