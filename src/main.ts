import './assets/style/main.scss'
import { createApp } from 'vue'
//import logger from './utils/logger'
import App from '@/App.vue'
import router from '@/router'
import i18n from './i18n/i18n'
import VueEasyLightbox from 'vue-easy-lightbox'
import { register } from "swiper/element/bundle";
register();
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App)
app.use(router).use(i18n).use(pinia);
// @ts-ignore
app.use(VueEasyLightbox);
app.mount('#app')
