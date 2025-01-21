<template>
    <div class="hots-header">
        <div class="top-container">
            <img id="logo" src="../assets/images/logo.jpg" alt="BANBO FAN BEARING HOUSING MANUFACTURER" @click="onLogoClick">
            <div class="space"></div>
            <img id="exchange-language" :src="getImageImport(isZh ? 'language_zh.png' : 'language_en.png')" @click="onExchangeLanguageClick" alt="切换语言">
            <div v-if="props.showAboutUs" class="join-us" @click="onJoinUsClick">{{ t('common.aboutUs')  }}</div>
            <div v-if="props.showTechIntro" class="join-us" @click="onTechIntroClick">{{ t('common.techIntro')  }}</div>
            <div class="join-us" @click="onBlogClick">{{ t('common.blog')  }}</div>
            <div id="interest" @click="onInterestClick">{{ t('common.interest')  }}</div>
        </div>


        <div class="title-container space">
            <div @click="onTitleClick" class="title-text">{{ t('introduce.subTitle') }}</div>
        </div>
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

const onBlogClick = () => {
    router.push({
        name: 'blog'
    })
}

const props = defineProps<{ showAboutUs: boolean, showTechIntro: boolean}>()


</script>

<style scoped>

.hots-header {
    align-items: center;
    position: fixed;
    background-color: var(--white);
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);
    user-select: none;

    .top-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        line-height: 24px;

        #logo {
            width: 64px;
            height: 64px;
            cursor: pointer;
            user-select: none;
        }
        #exchange-language {
            width: 24px;
            height: 24px;
            cursor: pointer;
            user-select: none;
        }
        .space {
            flex: 1;
        }
        .join-us {
            width: 61px;
            height: 24px;
            margin-left: 10px;
            background-color: var(--primary);
            color: var(--white);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }
        #interest {
            width: 61px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            border: 1px solid var(--primary);
            color: var(--primary);
            margin-left: 10px;
            cursor: pointer;
            user-select: none;
            margin-right: 10px;
        }
    }
    .title-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        .title-text {
            font-size: 13px;
            font-weight: 400;
            cursor: pointer;
            color: var(--title);
        }
    }
}


</style>
