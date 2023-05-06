/**
 * 路由表
 */
export default [
    {
        path: "/",
        redirect: 'home',
        component: () => import("@/views/layout/index.vue"),
        meta: {
            auth: false,
        },
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/index.vue"),
                meta: {
                    auth: false,
                    // transition: "slide-left",
                },
            },
            {
                path: "/about",
                name: "about",
                component: () => import("@/views/about/index.vue"),
                meta: {
                    auth: false,
                    // transition: "slide-left",
                },
            },
            {
                path: "/detail",
                name: "detail",
                component: () => import("@/views/detail/index.vue"),
                meta: {
                    auth: false,
                    // transition: "slide-left",
                },
            },
            {
                path: "/product",
                name: "product",
                component: () => import("@/views/product/index.vue"),
                meta: {
                    auth: false,
                    // transition: "slide-left",
                },
            },
            {
                path: "/download",
                name: "download",
                component: () => import("@/views/download/index.vue"),
                meta: {
                    auth: false,
                    // transition: "slide-left",
                },
            },
            {
                path: "/contact",
                name: "contact",
                component: () => import("@/views/contact/index.vue"),
                meta: {
                    auth: false,
                    // transition: "slide-left",
                },
            },

        ]
    }
]