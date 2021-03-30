<template>
  <div class="header-nav">
    <div class="logo">
      <img src="../../assets/image/logo.png" />
      <div class="myeng">
        <span style="font-size:0.20rem;">上海北斗导航研发与转化功能型平台</span>
      </div>
    </div>
  
    <van-icon @click="show=true" size="24" name="points" />
    <van-popup v-model="show" closeable close-icon-position="top-right" close-icon="close" position="left" :style="{ width:'98%',height: '100%' }">
        <div style="margin-top:0.6rem;width:100%;height:100%;overflow:hidden">
            <van-tree-select
            style="height:100%"
            :items="menuData"
            :active-id.sync="activeId"
            @click-nav="topath"
            :main-active-index.sync="activeIndex"
            />
        </div>
        
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
    show:false,
      activeId: 1,
      activeIndex: 0,
      menuData: [
        {
          text: "网站首页",
          pathurl: "/home"
        },
        {
          text: "平台介绍",
          pathurl: "/platform",
          children: [
            {
              text: "平台简介"
            },
            {
              text: "立项过程"
            },
            {
              text: "组织架构"
            }
          ]
        },
        {
          text: "机构设置",
          children: [
            {
              text: "智能无人系统感知与导航联合实验室"
            },
            {
              text: "卫星导航测试实验室"
            },
            {
              text: "智慧交通研发服务创新平台"
            }
          ]
        },
        {
          text: "研发与转化"
        },
        {
          text: "新闻动态",
          pathurl: "/news",
          children: [
            {
              text: "平台新闻"
            },
            {
              text: "行业资讯"
            }
          ]
        },
        {
          text: "加入我们"
        }
      ],
      mySwiper: null,
      isnowmean: false,
      nowindex: 0
    };
  },
  methods:{
    isnow(row, index) {
      console.log(row);
      this.nowindex = index;
      this.isnowmean = true;
    },
    nomean(row) {
      console.log(row);
      this.isnowmean = false;
    },
    topath(row) {
      console.log(row)
      this.show = false;
      if (this.menuData[row].pathurl) {
        this.$router.push(this.menuData[row].pathurl);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header-nav {
  width: 100%;
  height: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.1rem;
  flex: 1;
  .van-sidebar-item--select::before{
    background-color:black;
  }
  .van-tree-select{
      height: 100% !important;
  }
  .van-popup{
      overflow: hidden;
  }
  .logo {
    display: flex;
    align-items: flex-end;
    img {
      width: 1.47rem;
      height: 0.3rem;
    }
    .myeng {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      letter-spacing: 0.01rem;
      margin-left: 0.1rem;
    }
  }
 
}
</style>
