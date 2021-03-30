import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import store from './store.js'
import './permission' //路由判断
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

window.addEventListener("resize",()=> {
  console.log(document.documentElement.clientWidth)
  if(document.documentElement.clientWidth<1220){
    store.commit('setDemoValue', 1);   
    console.log(store.getters.getDemoValue)
  }else{
    // 
    store.commit('setDemoValue', 2);   
// this.$store.getters. getDemoValue
  }
})





new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
