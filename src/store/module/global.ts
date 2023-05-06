import { defineStore } from "pinia"
import { useRouteStore } from "./route"
import pinia from "../config"
import onAction from "../onAction"

export const useGlobalStore = defineStore("globalStore", {
  state: () => {
    return {
      giveMap: {} || null, //登录用户的点赞列表
    }
  },
  persist: true,//缓存开关
  getters: {},
  actions: {
    loginComplate() {
      // 重新登录之后的路由重定向
      const routeStore = useRouteStore()
      routeStore.redirectHistoryRoute()
      // 获取登录用户的点赞列表
    },

    setUserInfo() { },
  },
})

useGlobalStore(pinia).$onAction(onAction)
