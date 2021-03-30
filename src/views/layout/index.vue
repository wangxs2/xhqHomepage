<template>
  <div class="all-box">
    <hpc v-if="$store.getters.getDemoValue==2"></hpc>
    <hmobile v-if="$store.getters.getDemoValue==1"></hmobile>
   
    <div class="appmain">
      <app-main></app-main>
    </div>
    <div class="footer-box">
        <div class="mean-list">
          <div
            class="mean-iteam"
            v-for="(iteam,index) in menuData"
          
            @click="topath(iteam,index)"
            :key="index"
          >
            <span :class="nowindex1==index?'font-mean font-mean1':'font-mean'" style="cursor: pointer;">{{iteam.name}}</span>
        </div>
      </div>
        <div style="color:#ffffff; margin-top:0.1rem;">版权所有 © 2019 上海西虹桥导航技术有限公司 盗用必究</div>
      <div style="display:flex;color:#ffffff;justify-content: center; align-items: center;margin-top:0.01rem;">
        <div>沪icp备19034830号-1</div>
        <div  style="display:flex;color:#ffffff;justify-content: center; align-items: center;margin-left:0.1rem"> <img src="http://static.websiteonline.cn/website/plugin/record_police/view/icons/ghs.png"/>  沪公网安备 31011802003918号</div>
      </div>
    </div>
  </div>
</template>

<script>

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
      nowindex: 0,
      nowindex1:0,
    };
  },
  created(){
    this.isMobile()
  },
 
  methods: {
     topath(row,idex) {
      if (row.pathurl) {
        this.$router.push(row.pathurl);
      }
    },
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
  
  .appmain{
    
  }
  .footer-box{
    width:100%;
    height:1.3rem;
    background:black;
    margin-top:-0.1rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.12rem;
    .mean-list {
    display: flex;
    font-size: 0.14rem;
    margin-left: 0.16rem;
    color:#ffffff;
    margin-top:0.1rem;
    justify-content: center;
    .mean-iteam {
      position: relative;
      margin-right: 0rem;
      .font-mean {
        display: block;
        box-sizing: border-box;
        padding: 0.05rem 0.1rem;
        line-height: 0.23rem;
        white-space: nowrap;
      }
      
    }
    .mean-iteam:last-child {
      margin-right: 0;
    }
  }
  }
}
</style>
