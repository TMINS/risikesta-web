import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 注册路由
import router from './router/index'
// 路由拦截
import './router/guard'

// 注册 pinia
import pinia from "./store/config"

createApp(App).use(ElementPlus).use(pinia).use(router).mount('#app')
