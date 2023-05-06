<template>
  <footer class="base-botton">
    <section class="mini-nav">

      <div class="logo">
        <img src="@/assets/img/logo.png" alt="">
      </div>

      <ul>
        <li v-for="(item, index) in miniNav" :key="index">
          <h4>{{ item.name }}</h4>
          <p v-for="(item2, index2) in item.nav" :key="index2">{{ item2.name || '-' }}</p>
        </li>
      </ul>
    </section>


    <section class="other-info">
      <div class="policy">
        <p>隐私政策</p>
        <p>用户协议</p>
      </div>
      <p>深圳市科斯达科技有限公司 2020-2023 版权所有</p>
      <div class="filings">
        <img class="filings-icon1" src="@/assets/img/filings1.png" alt="">
        <span>粤ICP备20054146号</span>
        <!-- <img class="filings-icon2" src="@/assets/img/filings2.png" alt="">
        <span>粤公网安备 67867689877787</span> -->
      </div>
    </section>
  </footer>
</template>


<script lang='ts' setup>
import { ref } from 'vue'
const miniNav = ref([
  {
    name: 'WIFI电池摄像机',
    path: '',
    nav: [
      {
        name: 'WIFI版',
        path: ''
      },
      {
        name: 'WIFI云台版',
        path: '',

      },
      {
        name: '',
        path: '',
      },
      {
        name: '',
        path: '',
      },
      {
        name: '',
        path: '',
      },
    ]
  },
  {
    name: '4G电池摄像机',
    path: '',
    nav: [
      {
        name: '4G版',
        path: '',
      },
      {
        name: '4G云台版',
        path: '',
      },
      {
        name: '',
        path: '',
      },
      {
        name: '',
        path: '',
      },
      {
        name: '',
        path: '',
      },
    ]
  },
  {
    name: '公司',
    path: '',
    nav: [
      {
        name: '帮助中心',
        path: '',
      },
      {
        name: '用户实拍视频',
        path: '',
      },
      {
        name: '关于我们',
        path: '',
      },
      {
        name: '联系我们',
        path: '',
      },
      {
        name: '服务',
        path: '',
      },
    ]
  },
  {
    name: '品牌合作',
    path: '',
    nav: [
      {
        name: '加盟代理商',
        path: '',
      },
      {
        name: '供应商合作',
        path: '',
      },
      {
        name: '推广合作',
        path: '',
      },
      {
        name: '',
        path: '',
      },
      {
        name: '',
        path: '',
      },
    ]
  },
])
</script>


<style lang='scss' scoped>
.base-botton {
  min-height: calc(842px - 184px - 170px);
  background: #13151B;
  padding: 184px 240px 170px;
  color: #fff;
  font-size: 16px;

  .mini-nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 70px;

    .logo {
      flex-shrink: 0;
      width: 222px;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }

    ul {
      width: calc(100% - 160px - 222px);
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      li {
        h4 {
          font-size: 26px;
          font-weight: normal;
          padding-bottom: 40px;
        }

        p {
          padding-bottom: 20px;
          font-size: 16px;
        }
      }
    }
  }

  .other-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid rgba($color: #D8D8D8, $alpha: .1);
    padding: 30px 0 0;

    .policy {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 18px;

      p {
        padding: 0 30px;
        font-size: 16px;
      }

      p:first-child {
        border-right: 1px solid rgba($color: #979797, $alpha: .2);
      }
    }

    .filings {
      padding-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 16px;
      }

      .filings-icon1 {
        width: 46px;
        height: auto;
        margin-right: 4px;
      }

      .filings-icon2 {
        width: 18px;
        height: auto;
        margin-left: 28px;
        margin-right: 4px;
      }
    }
  }
}
</style>