import { createRouter,createWebHistory, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { type RouterOptions } from 'vue-router'

import HomePage from '@/views/CompanyHome/CompanyHome.vue';
import HomePageMobile from '@/views/CompanyHomeMobile/CompanyHomeMobile.vue';
import AboutUsPage from "@/views/AboutUs/AboutUs.vue";
import AboutUsMobilePage from "@/views/AboutUsMobile/AboutUsMobile.vue";
import BlogList from "@/views/Blog/pc/BlogList.vue";
import BlogListMobile from '@/views/Blog/mobile/BlogListMobile.vue';
import BlogDetail from '@/views/Blog/pc/BlogDetail.vue';
import BlogDetailMobile from '@/views/Blog/mobile/BlogDetailMobile.vue';
import QuotePage from '@/views/Quote/pc/Quote.vue';
import QuoteDetailPage from '@/views/Quote/pc/QuoteDetail.vue';
import QuoteErrorPage from '@/views/Quote/pc/QuoteError.vue';
import QuotePageMobile from '@/views/Quote/mobile/Quote.vue';
import QuoteDetailPageMobile from '@/views/Quote/mobile/QuoteDetail.vue';
import QuoteErrorPageMobile from '@/views/Quote/mobile/QuoteError.vue';

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
    {
        path: '/blog',
        name: 'blog',
        component: isMobile ? BlogListMobile : BlogList,
    },
    {
        path: '/blog/:id',
        name: 'blog_detail',
        component: isMobile ? BlogDetailMobile : BlogDetail,
    },
    {
        path: '/quote',
        name: 'quote',
        component: isMobile ? QuotePageMobile : QuotePage,
    },
    {
        path: '/quote/:code',
        name: 'quote_detail',
        component: isMobile ? QuoteDetailPageMobile : QuoteDetailPage,
    },
    {
        path: '/quote/error',
        name: 'quote_error',
        component: isMobile ? QuoteErrorPageMobile : QuoteErrorPage,
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [...routes]
} as RouterOptions)

export default router
