import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { type RouterOptions } from 'vue-router'

import HomePage from '@/views/CompanyHome/CompanyHome.vue';
import HomePageMobile from '@/views/CompanyHomeMobile/CompanyHomeMobile.vue';
import AboutUsPage from "@/views/AboutUs/AboutUs.vue";
import AboutUsMobilePage from "@/views/AboutUsMobile/AboutUsMobile.vue";


const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

console.log(` isMobile ${isMobile} navigator.userAgent -${navigator.userAgent} `)

// 路由集合
const routes: (RouteRecordRaw | any)[] = [
    {
        path: '/',
        redirect: { path: '/home' },
    },
    {
        path: '/home',
        name: 'home',
        component: isMobile ? HomePageMobile : HomePage,
    },
    {
        path: '/about_us',
        name: 'about_us',
        component: isMobile ? AboutUsMobilePage : AboutUsPage,
    },

]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [...routes]
} as RouterOptions)

export default router
