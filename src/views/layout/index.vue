<template>
  <div class="all-box">
    
    
    <hpc v-if="$store.getters.getDemoValue==2"></hpc>
    <hmobile v-if="$store.getters.getDemoValue==1"></hmobile>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide1">
            <div style="font-size:0.20rem">上海北斗导航</div>
            <div style="font-size:0.40rem;margin-top:0.05rem">研发与转化功能型平台</div>
            <div style="font-size:0.18rem;margin-top:0.6rem">打造世界顶尖的导航产业技术创新服务平台</div>
          </div>
          <div class="swiper-slide swiper-slide2"></div>
          <div class="swiper-slide swiper-slide3"></div>
        </div>
        <!-- 小圆点-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="appmain">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import appMain from "./appMain";
import hmobile from "./hmobile";
import hpc from "./hpc";
export default {
  components: {
    appMain,
    hpc,
    hmobile
  },
  data() {
    return {
      menuData: [
        {
          name: "网站首页",
          pathurl: "/home"
        },
        {
          name: "平台介绍",
          children: [
            {
              name: "平台简介"
            },
            {
              name: "立项过程"
            },
            {
              name: "组织架构"
            }
          ]
        },
        {
          name: "机构设置",
          children: [
            {
              name: "智能无人系统感知与导航联合实验室"
            },
            {
              name: "卫星导航测试实验室"
            },
            {
              name: "智慧交通研发服务创新平台"
            }
          ]
        },
        {
          name: "研发与转化"
        },
        {
          name: "新闻动态",
          pathurl: "/news",
          children: [
            {
              name: "平台新闻"
            },
            {
              name: "行业资讯"
            }
          ]
        },
        {
          name: "加入我们"
        }
      ],
      mySwiper: null,
      isnowmean: false,
      nowindex: 0
    };
  },
  created(){
    this.isMobile()
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        cirular: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    /* 鼠标滑过pagination控制swiper切换*/
    for (let i = 0; i < this.mySwiper.pagination.bullets.length; i++) {
      this.mySwiper.pagination.bullets[i].onmouseover = function() {
        this.click();
      };
      //如果你在swiper初始化后才决定使用clickable，可以这样设置
      this.mySwiper.params.pagination.clickable = true;
      //此外还需要重新初始化pagination
      this.mySwiper.pagination.destroy();
      this.mySwiper.pagination.init();
      this.mySwiper.pagination.bullets
        .eq(0)
        .addClass("swiper-pagination-bullet-active");
    }
  },
  methods: {
    isMobile() {
      console.log(this.$store.getters.getDemoValue)
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      console.log(flag);
      if (flag === null) {
        //pc
         this.$store.commit('setDemoValue', 2); 
      } else {
         this.$store.commit('setDemoValue', 1); 
      }
    },

  
  }
};
</script>

<style lang="less" scoped>
.all-box {
  width: 100%;
  height: 100%;
  
  .header-nav1{
    padding: 0;
  }
  .banner {
    width: 100%;
    height: 5rem;
    border-bottom: 0.01rem solid #eeeeee;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 100%;
          height: 100%;
        }
        .swiper-slide1 {
          background: url("../../assets/image/banner1.jpg") bottom no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #ffffff;
          box-sizing: border-box;
          padding-left: 1rem;
          // padding: 0 0.1rem;
        }
        .swiper-slide2 {
          background: url("../../assets/image/banner2.jpg") bottom no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .appmain{
    
  }
}
</style>
