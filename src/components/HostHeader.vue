<template>
    <div class="hots-header">
        <img id="logo" src="../assets/images/logo.jpg" alt="logo" @click="onLogoClick">
        <div class="space"></div>
        <img id="exchange-language" :src="getImageImport(isZh ? 'language_zh.png' : 'language_en.png')" @click="onExchangeLanguageClick">
        <div id="join-us" @click="onJoinUsClick">{{ t('common.joinUs')  }}</div>
    </div>
</template>

<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'

const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const router = useRouter();
const isZh = computed(() => locale.value == 'zh');
const getImageImport = (path: string) =>new URL(`../assets/images/icons/${path}`, import.meta.url).href;
const onJoinUsClick = () => {
    router.push({
        name: 'about_us',
    });
}

const onLogoClick = () => {
    router.push({
        name: 'home',
    });
}


const onExchangeLanguageClick = () => {
    const isZh = locale.value == 'zh';
    locale.value = isZh ? 'en' : 'zh'
}


</script>

<style scoped>

.hots-header {
    display: flex;
    flex-direction: row;
    height: 127px;
    align-items: center;
    position: fixed;
    background-color: var(--white);
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    padding-left: 114px;
    padding-right: 124px;
    #logo {
        width: 127px;
        height: 127px;
        cursor: pointer;
        user-select: none;
    }

    #exchange-language {
        width: 48px;
        height: 48px;
        cursor: pointer;
        user-select: none;
    }

    .space {
        flex: 1;
    }

    #join-us {
        width: 122px;
        height: 48px;
        margin-left: 20px;
        background-color: var(--primary);
        color: var(--white);
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }
}


</style>
