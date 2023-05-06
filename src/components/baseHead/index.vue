<template>
  <header class="base-head" :class="show ? '' : 'hide'">
    <section>
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="" />
      </div>

      <ul>
        <li v-for="(item, index) in nav" :key="index"
          :class="nowPath === item.path || item.childRoute.includes(nowPath) ? 'active' : ''" @click="handleRoute(item)">
          <span>{{ item.name }}</span>
          <div class="child" v-if="item.children.length > 0">
            <p v-for="(child, index2) in item.children" :key="index2" @click.stop="handleRoute(item, index2)">{{
              child.name }}</p>
          </div>
        </li>
      </ul>

      <div class="language">
        <p class="active">中国站</p>
        <p>国际站</p>
      </div>
    </section>
  </header>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useWindowScroll } from '@vueuse/core'
interface nav {
  name: string,
  path?: string,
  point?: string,
  children?: nav[]
}
const show = ref(true)
const nav = ref([
  {
    name: "首页",
    path: "/home",
    children: [],
    childRoute: []
  },
  {
    name: "产品",
    path: "/product",
    childRoute: ['/detail'],
    children: [
      {
        name: "低功耗系列",
        point: "consumption",
      },
      {
        name: "无线套装系列",
        point: "wireless",
      },
      {
        name: "常规类产品系列",
        point: "convention",
      },
      {
        name: "方案类产品系列",
        point: "programme",
      },
    ],
  },
  {
    name: "下载",
    path: "/download",
    children: [],
    childRoute: []
  },
  {
    name: "关于我们",
    path: "/about",
    children: [],
    childRoute: []
  },
  {
    name: "联系我们",
    path: "/contact",
    children: [],
    childRoute: []
  },
])
const route = useRoute()
const router = useRouter()
const nowPath = ref(route.path)//当前路由
// const nowPathPoint = ref(route.query.point || 'consumption')



const { y } = useWindowScroll()
watch(y, () => {

  if (nowPath.value === '/product' || nowPath.value === '/detail') {
    // 产品  滚动隐藏
    if (y.value > 96) {
      show.value = false
    } else {
      show.value = true
    }
  }

})

watch(route, () => {
  nowPath.value = route.path
})



function handleRoute(item: nav, index?: number) {
  let query = {}
  if (item.children && item.children.length > 0 && index != null) {
    query = {
      point: item.children[index]?.point
    }
  }
  router.push({
    path: item.path,
    query
  })

  nowPath.value = item.path as string

}

</script>

<style lang="scss" scoped>
.base-head {
  width: calc(100% - 400px);
  height: 96px;
  padding: 0 200px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
  background: #fff;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;

  section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      img {
        width: 222px;
        height: auto;
      }
    }

    ul {
      height: 100%;
      display: flex;
      align-items: center;

      li {
        height: 100%;
        padding: 0 44px;
        display: flex;
        align-items: center;
        font-size: 16px;
        position: relative;
        cursor: pointer;

        .child {
          width: 216px;

          padding: 0 20px;
          position: absolute;
          top: calc(100% + 1px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          visibility: hidden;
          opacity: 0;

          p {
            height: 80px;
            font-size: 16px;
            text-align: center;
            line-height: 80px;
            color: #000;
            border-bottom: 1px solid #e5e5e5;
            cursor: pointer;
          }

          .active {
            color: #00A4BB;
          }
        }
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

      li:hover {
        .child {
          visibility: visible;
          opacity: 1;
        }
      }

      .active::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        width: 80px;
        background: #00A4BB;
      }
    }

    .language {
      display: flex;
      align-items: center;

      p {
        background: #f0f0f0;
        color: #767676;
        width: 80px;
        text-align: center;
        height: 36px;
        font-size: 14px;
        line-height: 36px;
        border-radius: 30px;
        margin-left: 14px;
      }

      .active {
        background: #000000;
        color: #fff;
      }
    }
  }
}

.hide {
  top: -96px;
}
</style>
