import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to,from,savedPosition:any) {
        if(from.path.includes('detail')){
            return savedPosition
        }else{
            return { top: 0 }
        }
    }
})

export default router