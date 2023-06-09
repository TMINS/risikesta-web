<template>
    <div class="product">

        <div class="mini-nav" :class="adsorption ? 'fold' : ''">
            <div class="logo" v-show="adsorption" @click="handleRoute">
                <img src="@/assets/img/logo.png" alt="" />
            </div>
            <p></p>
            <ul>
                <li v-for="(item, index) in nav" :key="index" :class="activeIndex == index ? 'active' : ''"
                    @click="handleScroll(item.top)">{{
                        item.name }}</li>
            </ul>
        </div>


        <div class="banner">
            <el-carousel ref="carousel" :height="660 / 1920 * 100 + 'vw'" :interval="5000" arrow="never" :loop="false">
                <el-carousel-item v-for="(item, index) in productData.bannerList" :key="index">
                    <div class="banner-item">
                    <img :src="item.img" alt="">
                    <div class="info">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.subTitle }}</p>
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

        <div class="consumption classification" ref="consumption">
            <h3 class="title">低功耗系列</h3>
            <div class="flex">
                <card v-for="(item, index) in productData.consumptionData" :key="index" :data="item"
                    @click="handleClick(item.id)" />
            </div>
        </div>

        <div class="wireless classification" ref="wireless">
            <h3 class="title">无线套装系列</h3>
            <div class="flex">
                <cards v-for="(item, index) in productData.wirelessData" :key="index" :data="item"
                    @click="handleClick(item.id)" />
            </div>

        </div>


        <div class="convention classification" ref="convention">
            <h3 class="title">常规产品系列</h3>
            <div class="flex">
                <card v-for="(item, index) in productData.conventionData" :key="index" :data="item"
                    @click="handleClick(item.id)" />
            </div>

        </div>


        <div class="programme classification" ref="programme">
            <h3 class="title">方案类系列</h3>
            <div class="flex">

                <card v-for="(item, index) in productData.programmeData" :key="index" :data="item"
                    @click="handleClick(item.id)" />
            </div>

        </div>

        <!-- 占位 -->
        <div style="height:120px"></div>
    </div>
</template>


<script lang='ts' setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import card from '@/components/card/index.vue'
import cards from '@/components/cards/index.vue'
import { productData } from '@/mock/productPageData'
import { ElCarousel } from 'element-plus'
import eventBus from '@/eventBus'

const nav = ref([
    {
        name: "低功耗系列",
        point: "consumption",
        top: 0
    },
    {
        name: "无线套装系列",
        point: "wireless",
        top: 0
    },
    {
        name: "常规安防系列",
        point: "convention",
        top: 0
    },
    {
        name: "方案系列",
        point: "programme",
        top: 0
    },
])
const adsorption = ref(false)
const route = useRoute()
const activeIndex = ref(0)

const router = useRouter()


const { y } = useWindowScroll()

watch(y, () => {
    if (y.value > 96) {
        adsorption.value = true
    } else {
        adsorption.value = false
    }
    nav.value.map((item, index) => {
        if (y.value > item.top) {
            if (activeIndex.value !== index) {
                activeIndex.value = index
                eventBus.emit('updateNav', item.point)
            }
        }
        return item
    })
})

watch(route, reset)
onMounted(() => {
    nav.value = nav.value.map(item => {
        item.top = (document.getElementsByClassName(item.point)[0] as HTMLDivElement)?.offsetTop
        return item
    })

    nextTick(() => {
        setTimeout(() => {
            reset()
        }, 100)
    })

    eventBus.on('productPageChange', () => {
        setTimeout(() => {
            reset()
        }, 100)
    })

})
onUnmounted(() => {
    eventBus.off('productPageChange')
})

const carousel = ref(null)
function handlePrev() {
  let obj = carousel.value as any
  obj.prev()
}
function handleNext() {
  let obj = carousel.value as any
  obj.next()
}

/**
 * @description 重定向到指定位置
 */
function reset() {
    if (route.query && route.query.point) {
        let res = nav.value.filter(item => item.point === route.query.point)
        res[0] && handleScroll(res[0].top)
    }

}
/**
 * 
 * @param top 
 * @description 滚动到指定位置
 */
function handleScroll(top: number) {
    window.scrollTo({
        top: top + 50,
        behavior: 'smooth'
    })
}

function handleClick(id: number) {
    router.push({
        path: '/detail',
        query: {
            id
        }
    })
}
function handleRoute() {
    router.push('/home')
}

</script>


<style lang='scss' scoped>
.product {
    padding: 96px 0 0;

    .mini-nav {
        width: calc(100% - 400px);
        height: 96px;
        padding: 0 200px;
        position: fixed;
        top: 96px;
        left: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;

        .logo {
            cursor: pointer;
            position: relative;
            img {
                width: 222px;
                height: auto;
            }
           
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        li {
            height: 100%;
            line-height: 96px;
            padding: 0 40px;
            font-size: 16px;
            position: relative;
            cursor: pointer;
        }

        .active {
            color: #00A4BB;
        }

        .active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 3;
            transform: translateX(-50%);
            display: block;
            width: 80px;
            height: 2px;
            background: #00A4BB;
        }
    }

    .fold {
        top: 0px;
    }

    .banner {
        width: 100%;
        height: 660px;
        overflow: hidden;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }

        img:hover {
            transform: scale(1.02);
        }
        .banner-item{
            height: 660px;
        }
        .info{
            position: absolute;
            left: 50%;
            top: 230px;
            transform: translateX(-50%);
            color: #fff;
            h3{
                font-size: 55px;
            }
            p{
                font-size: 16px;
                padding-top: 20px;
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
            flex-wrap: wrap;

            .info {
                // width: 49%;
                width: calc(50% - 10px);
            }
        }

    }
}
</style>