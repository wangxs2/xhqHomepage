<template>
  <div class="news-box">
     <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide1">
            <div style="font-size:0.20rem">上海北斗导航</div>
            <div style="font-size:0.40rem;margin-top:0.05rem">研发与转化功能型平台</div>
            <div style="font-size:0.18rem;margin-top:0.6rem">打造世界顶尖的导航产业技术创新服务平台</div>
          </div>
          <!-- <div class="swiper-slide swiper-slide2"></div>
          <div class="swiper-slide swiper-slide3"></div> -->
        </div>
        <!-- 小圆点-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <img src="../../assets/image/home.jpg" style="width:100%">
    <div class="footer">
      <div>
        <div style="border-bottom:0.01rem solid #eeeeee;margin-top:0.1rem">
          <div style="font-size:0.24rem"><strong>上海西虹桥导航技术有限公司</strong></div>
          <div style="text-transform:uppercase">shanghai west hongqiao naavigation Technology Co., Ltd.</div>
        </div>
         <div style="margin-top:0.1rem">Tel：+8621- 69726452、69726470</div>
         <div style="margin-top:0.1rem">Email：office@shnavi.cn</div>
         <div style="margin-top:0.1rem">Address：上海市青浦区徐泾镇高泾路599号C栋102</div>
         <div  style="margin-top:0.1rem">Room 102, Building c, 599 Gaojing Road, Qingpu District, Shanghai, China</div>
      </div>
      <div style="margin-left:0.5rem;margin-top:0.1rem;">
        <div>
          您的姓名 <input class="srk"/>
        </div>
        <div style="margin-top:0.1rem">
          您的电话 <input class="srk"/>
        </div>
        <div style="margin-top:0.1rem;">
          咨询内容 <textarea rows="4" cols="20"></textarea>
        </div>
        <div style="text-align:right">
          <button>提交</button>
        </div>
        
      </div>
    </div>
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

<style lang="less" scoped>
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
            background: url("../../assets/image/banner1.jpg") bottom no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            color: #ffffff;
            box-sizing: border-box;
            padding-left: 0.1rem;
            // padding: 0 0.1rem;
          }
          .swiper-slide2 {
            background: url("../../assets/image/banner2.jpg") bottom no-repeat;
            background-size: cover;
          }
        }
      }
    }
    .footer{
      width:100%;
      background:black;
      color:#ffffff;
      text-align:left;
      display: flex;
      justify-content:center;
      .srk{
        background:transparent;
        border: 1px solid #ffffff;
        width: 2.5rem;
        height: 0.3rem;
        
      }
      textarea{
        background:transparent;
        width: 2.5rem;
        border: 1px solid #ffffff;
        // margin-left:0.1rem;
      }
      button{
        width: 80%;
        background: #076ce0;
        color:#ffffff;
        height: 0.36rem;
        border:none;
        border-radius: 0.02rem;
        margin-top: 0.2rem;
      }
    }
}
</style>
