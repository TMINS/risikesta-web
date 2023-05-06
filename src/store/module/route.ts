import { defineStore } from "pinia"
import { loadComponent } from "@/router/load"
import router from "@/router/index"
import { RouteLocationNormalized } from "vue-router"
import pinia from "../config"
import onAction from "../onAction"

export const useRouteStore = defineStore("customRoute", {
  state: () => {
    return {
      routes: [],
      isAddRoutes: false, //是否加载远程路由
    }
  },
  persist: true,//缓存开关
  getters: {},
  actions: {
    asyncLoadComponent(path: string) {
      const component = loadComponent(path)
      console.log(component)
      /**eg:start */
      /**添加路由 需要配置 name  便与后续增加子路由 */
      router.addRoute({ name: "test", path: "/test", component })
      /**eg:end */
    },
    /**获取路由表 */
    async getRoutes() {
      // let list = []
      // async action
    },
    /**
     * @name cacheRoute
     * @param route
     * @description 缓存鉴权失效的路由
     */
    cacheRoute(route: RouteLocationNormalized) {
      // 将目标路由暂存
      let { path, params, query } = route
      let routeInfo = {
        path,
        params,
        query,
      }
      sessionStorage.setItem("targetRoute", JSON.stringify(routeInfo))
    },

    /**
     * @name redirectHistoryRoute
     * @description 重定向到上一次失效的路由
     */
    redirectHistoryRoute() {
      let target = { path: "/home" }
      // 进入首页 或 返回登录失效前的页面
      if (sessionStorage.getItem("targetRoute")) {
        target = JSON.parse(sessionStorage.getItem("targetRoute") || "")
        setTimeout(() => {
          sessionStorage.removeItem("targetRoute")
        }, 1000)
      }
      router.push({
        ...target,
        path: target.path,
      })
    },
  },
})

useRouteStore(pinia).$onAction(onAction)
