import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { type RouterOptions } from 'vue-router'

const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

// 路由集合
const routes: (RouteRecordRaw | any)[] = [
    {
        path: '/',
        redirect: { path: '/home' },
        children: [
            {
                path: '/:pathMatch(.*)*',
                component: () => import('@/views/CompanyHome/CompanyHome.vue')
            }
        ]
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/CompanyHome/CompanyHome.vue')
    },
    {
        path: '/about_us',
        name: 'about_us',
        component: () => import('@/views/AboutUs/AboutUs.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [...routes]
} as RouterOptions)
export default router
