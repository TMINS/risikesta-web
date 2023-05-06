<template>
  <div class="home">

    <section>
      <div class="banner">
        <el-carousel ref="carousel" :height="984 / 1920 * 100 + 'vw'" :interval="5000" arrow="never" :loop="false">
          <el-carousel-item v-for="(item, index) in homeData.bannerList" :key="index">
            <div class="banner-item" :class="(index + 1) % 2 == 0 ? 'banner-item-black' : ''">
              <img :src="item.img" alt="">
              <div class="banner-info">
                <p>{{ item.subTitle }}</p>
                <h3>{{ item.title }}</h3>
                <span>{{ item.desc }}</span>
                <div class="handle" @click="handleClick(item.id)">了解更多</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>

        <div class="arrow-left" @click="handlePrev">
          <img src="@/assets/img/arrow-white.png" alt="">
        </div>
        <div class="arrow-right" @click="handleNext">
          <img src="@/assets/img/arrow-white.png" alt="">
        </div>

      </div>

      <div class="classification">
        <h3 class="title">RISIKESTA产品类</h3>
        <div class="flex">
          <card :data="homeData.productData[1]" @click="handleClick(homeData.productData[1].id)" />
          <card :data="homeData.productData[2]" @click="handleClick(homeData.productData[2].id)" />

        </div>
      </div>


      <div class="classification">
        <h3 class="title">RISIKESTA方案类</h3>
        <card :data="homeData.programmeData" @click="handleClick(homeData.programmeData.id)" />
      </div>


      <div class="app">
        <div class="app-img">
          <img class="phone" src="@/assets/img/app-phone.png" alt="">
          <img class="shadow" src="@/assets/img/app-shadow.png" alt="">
          <img class="monitor" src="@/assets/img/app-monitor.png" alt="">
        </div>
        <div class="info">
          <h3>随连随看</h3>
          <h2>RSMART App</h2>
          <p>不论何时何地，打开Risikesta App，随时随地都可轻松查看不论何时何地，打开Risikesta App。</p>
          <div class="handle">
            <p @click="handleLoadDown(homeData.iosUrl)"><span>IOS下载</span></p>
            <p @click="handleLoadDown(homeData.androidUrl)"><span>Android下载</span></p>
            <img src="@/assets/img/more.png" alt="">
          </div>
        </div>
      </div>



      <div class="more">

        <h3 class="title">RISIKESTA是行业领先的低功耗产品及方案提供商
          可为用户提供从设备到云平台全链路解决方案</h3>
        <p @click="() => router.push({
          path: '/about'
        })">了解更多</p>
      </div>


    </section>
  </div>
</template>


<script lang='ts' setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import card from '@/components/card/index.vue'
import { ElCarousel } from 'element-plus'
import { homeData } from '@/mock/homeData'

const carousel = ref(null)
const router = useRouter()
function handlePrev() {
  let obj = carousel.value as any
  obj.prev()
}
function handleNext() {
  let obj = carousel.value as any
  obj.next()
}
function handleClick(id: number) {
  router.push({
    path: '/detail',
    query: {
      id
    }
  })
}
function handleLoadDown(url: string) {
  window.open(url)
}
</script>


<style lang='scss' scoped>
.home {
  .banner {
    height: 984px;
    position: relative;

    .banner-item {
      height: 984px;
      position: relative;

      img {
        width: 100%;
        height: 984px;
      }

      .banner-info {
        position: absolute;
        top: 260px;
        left: 200px;
        color: #000;

        p {
          font-size: 34px;
        }

        h3 {
          font-size: 70px;
          padding-top: 24px;
        }

        span {
          display: inline-block;
          font-size: 14px;
          padding-top: 24px;
          color: rgba($color: #000, $alpha: .7);
        }

        .handle {
          margin-top: 100px;
          background: #000;
          border-radius: 50px;
          width: 214px;
          height: 68px;
          text-align: center;
          line-height: 68px;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }

    .banner-item:hover {
      transform: scale(1.02);
    }

    .banner-item-black {
      .banner-info {
        color: #fff;

        span {
          color: rgba($color: #fff, $alpha: .7);
        }

        .handle {
          background: #fff;
          color: #000;
        }
      }


    }

    .arrow-right,
    .arrow-left {
      position: absolute;
      top: 50%;
      cursor: pointer;

      img {
        width: 38px;
        height: 38px;
      }
    }

    .arrow-right {
      transform: rotate(180deg);
      right: 100px;
    }

    .arrow-left {
      left: 100px;
    }

    :deep(.el-carousel__indicators) {
      li button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #878787;
      }

      .is-active {
        button {
          background: #878787;
        }
      }
    }
  }




  .classification {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 160px 80px 0;

    .title {
      padding-bottom: 60px;
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .info {
        width: 49%;
      }
    }

  }

  .app {
    height: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;

    .app-img {
      width: 800px;
      height: 824px;
      position: relative;

      .phone {
        position: absolute;
        right: 20px;
        top: 0;
        z-index: 1;
        width: 310px;
        height: 633px;
      }

      .phone:hover {
        z-index: 3;
        transform: scale(1.03);
      }

      .shadow {
        position: absolute;
        top: 600px;
        right: -40px;
      }

      .monitor {
        position: absolute;
        left: 72px;
        top: 300px;
        width: 656px;
        height: 522px;
        z-index: 2;
      }

      .monitor:hover {
        z-index: 4;
        transform: scale(1.03);
      }
    }

    .pic {
      width: 600px;
    }

    .info {
      padding-left: 100px;

      h3 {
        font-size: 48px;
      }

      h2 {
        font-size: 88px;
      }

      p {
        padding-top: 28px;
        font-size: 18px;
        color: rgba($color: #000000, $alpha: .6);
        max-width: 80%;
      }

      .handle {
        display: flex;
        padding-top: 106px;

        p {
          border-radius: 50px;
          height: 68px;
          line-height: 68px;
          width: 200px;
          text-align: center;
          background: #000;
          color: #fff;
          padding: 0;
          font-size: 20px;
          cursor: pointer;
        }

        p:first-child {
          margin-right: 12px;
          color: #ffffff;
          background: #00A4BB;
        }

        img {
          width: 68px;
          height: 68px;
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }

  }

  .more {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 176px 0 286px;

    h3 {
      max-width: 60%;
      font-size: 48px;
      line-height: 84px;
    }

    p {
      margin-top: 62px;

      background-color: #000;
      color: #fff;
      text-align: center;
      line-height: 68px;
      height: 68px;
      width: 286px;
      border-radius: 50px;
      cursor: pointer;
    }
  }
}
</style>