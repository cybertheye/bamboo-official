<template>
    <div class="hots-header">
        <img id="logo" src="../assets/images/logo.jpg" alt="logo" @click="onLogoClick">
        <div class="title-container space">
<!--            <img class="title" src="@/assets/images/info/title.png"  alt="标题"/>-->
            <div @click="onTitleClick" class="title-text">FAN BEARING HOUSING MANUFACTURER</div>
        </div>
        <img id="exchange-language" :src="getImageImport(isZh ? 'language_zh.png' : 'language_en.png')" @click="onExchangeLanguageClick">
        <div v-if="props.showAboutUs" class="join-us" @click="onJoinUsClick">{{ t('common.aboutUs')  }}</div>
        <div v-if="props.showTechIntro" class="join-us" @click="onTechIntroClick">{{ t('common.techIntro')  }}</div>
        <div id="interest" @click="onInterestClick">{{ t('common.interest')  }}</div>
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

const onTechIntroClick = () => {
    router.push({
        name: 'home',
    })
}

const onInterestClick = () => window.open('mailto:sales@fanbearinghousing.com?subject=Inquire and make friends');
const onLogoClick = () => {
    router.push({
        name: 'home',
    });
}

const onExchangeLanguageClick = () => {
    const isZh = locale.value == 'zh';
    locale.value = isZh ? 'en' : 'zh'
}

const onTitleClick = () => {
    router.push({
        name: 'home'
    })
}

const props = defineProps<{ showAboutUs: boolean, showTechIntro: boolean}>()


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
    padding: 0 80px;
    #logo {
        width: 127px;
        height: 127px;
        cursor: pointer;
        user-select: none;
    }
    .title-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .title-text {
            font-size: 32px;
            font-weight: bold;
            cursor: pointer;
        }
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

    .join-us {
        width: 122px;
        height: 48px;
        flex-basis: 122px;
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

    #interest {
        width: 122px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        border: 1px solid var(--primary);
        color: var(--primary);
        margin-left: 10px;
        cursor: pointer;
        user-select: none;
    }
}


</style>
