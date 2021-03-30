<template>
  <div class="header-nav">
    <div class="logo">
      <img src="../../assets/image/logo.png" />
      <div class="myeng">
        <span style="font-size:0.20rem;">上海北斗导航研发与转化功能型平台</span>
      </div>
    </div>
    <div class="mean-list">
      <div
        class="mean-iteam"
        v-for="(iteam,index) in menuData"
        @mouseleave="nomean(iteam)"
        @mouseenter="isnow(iteam,index)"
        @click="topath(iteam,index)"
        :key="index"
      >
        <span :class="nowindex1==index?'font-mean font-mean1':'font-mean'" style="cursor: pointer;">{{iteam.name}}</span>
        <div class="children-meab" v-if="iteam.children&&nowindex==index&&isnowmean">
          <div v-for="(item,inde) in iteam.children" :key="inde">
            <span class="font-mean" style="cursor: pointer;">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          name: "网站首页",
          pathurl: "/home"
        },
        {
          name: "平台介绍",
          pathurl: "/platform",
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
      ishow: false,
      nowindex: 0,
      nowindex1:1,
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
    topath(row,idex) {
      this.nowindex1 = idex;
      if (row.pathurl) {
        this.$router.push(row.pathurl);
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
  padding: 0 1rem;
  flex: 1;
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
      margin-left: 0.2rem;
    }
  }
  .mean-list {
    display: flex;
    font-size: 0.22rem;
    margin-left: 0.16rem;
    flex: 1;
    justify-content: space-around;
    .mean-iteam {
      position: relative;
      margin-right: 0rem;
      .children-meab {
        position: absolute;
        left: 0;
        top: 0.4rem;
        z-index: 10;
        background: #ffffff;
        text-align: left;
        // width: 100%;
      }
      .font-mean {
        display: block;
        box-sizing: border-box;
        padding: 0.05rem 0.1rem;
        line-height: 0.23rem;
        white-space: nowrap;
      }
      .font-mean1{
         background: black;
        color: #ffffff;
      }
      .font-mean:hover {
        background: black;
        color: #ffffff;
      }
    }
    .mean-iteam:last-child {
      margin-right: 0;
    }
  }
}
</style>
