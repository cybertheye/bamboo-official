import './assets/style/main.scss'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import i18n from './i18n/i18n'

const app = createApp(App)

app.use(router).use(i18n);
app.mount('#app')
