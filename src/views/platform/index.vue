<template>
  <div class="news-box">
      <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide1">
            <!-- <div style="font-size:0.20rem">上海北斗导航</div>
            <div style="font-size:0.40rem;margin-top:0.05rem">研发与转化功能型平台</div>
            <div style="font-size:0.18rem;margin-top:0.6rem">打造世界顶尖的导航产业技术创新服务平台</div> -->
          </div>
          <!-- <div class="swiper-slide swiper-slide2"></div>
          <div class="swiper-slide swiper-slide3"></div> -->
        </div>
        <!-- 小圆点-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <img src="../../assets/image/pt.jpg" style="width:100%">
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data(){
    return{
      mySwiper:null,
    }
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
  },
 
}
</script>

<style  lang="less" scoped>
.news-box{
    width: 100%;
    height: 100%;
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
            background: url("../../assets/image/ptbanner.jpg") bottom no-repeat;
            background-size: 100% 100%;
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
}
</style>
