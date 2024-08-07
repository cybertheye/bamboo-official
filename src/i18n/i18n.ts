import { createI18n } from 'vue-i18n';


import enUS from './en-US.json';
import zhCN from './zh-CN.json';

import type { MessageSchema } from './message_schema'


// 获取浏览器语言
const getBrowserLanguage = (): string => {
    const language = navigator.language || 'en';
    const v = language.split('-')[0]; // 获取语言的前部分，处理类似 'en-US' 的情况
    if (v.startsWith('en') || v.startsWith('EN')) {
        return 'en';
    }
    return 'zh';
};

// 创建 Vue I18n 实例
const i18n = createI18n<[MessageSchema], 'en' | 'zh'>({
    locale: getBrowserLanguage(),
    fallbackLocale: 'zh',
    legacy: false,
    messages: {
        'en': enUS,
        'zh': zhCN,
    }, // 设置语言包
});

export default i18n;
