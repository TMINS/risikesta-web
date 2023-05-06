import { defineStore } from "pinia";
import pinia from "./config";
import onAction from "./onAction";
/**
 * 公共数据
 */

export const useStore = defineStore("main", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
  persist: true,
});

/**
 * @example
 */
export const unsubscribe = useStore(pinia).$onAction(onAction);
