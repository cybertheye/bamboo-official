<template>
    <div class="series-banner-container">
        <div class="title-text">
            <span>{{ t('series.title') }}</span>
            <div class="bottom-border"></div>
        </div>
        <div class="series-banner">
            <div v-for="(item, index) in seriesProductData" :class="index == selectedIndexRef ? 'series-banner-item series-banner-item-highlight' : 'series-banner-item' " @click="onBannerItemClick(index)">
                <img class="border-img stack-child" src="@/assets/images/background/series_border.png" alt="边框">
                <div class="text">{{ item.name }}</div>
                <div class="stack-child banner-img-container">
                    <img class="banner-img" :src="item.img" alt="产品系列图片">
                </div>
                <img v-if="index == selectedIndexRef" class="highlight-background-img stack-child" src="@/assets/images/background/series_highlight_background.png" alt="边框">
            </div>

            <vue-easy-lightbox
                :visible="visible"
                :imgs="seriesProductData.map(item => item.detailImg)"
                :index="selectedIndexRef"
                @hide="onPreviewClose"
            />

        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
import {useTechProcessDataHook} from "@/hooks/useTechProcessDataHook";
const { t } = useI18n<{ message: MessageSchema }>();
const { seriesProductData } = useTechProcessDataHook();
const selectedIndexRef = ref(0);
const onBannerItemClick = (index: number) => {
    selectedIndexRef.value = index;
    visible.value = true;
}

const visible = ref(false)

const onPreviewClose = () => {
    visible.value =  false;
}

</script>

<style scoped lang="scss">

.series-banner-container {
    height: 728px;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title-text {
        font-weight: 600;
        font-size: 28px;
        color: #333333;
        line-height: 33px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        span {
            position: relative;
            padding-bottom: 18px;
        }
        span::after {
            content: "";
            height: 4px;
            position: absolute;
            background-color: var(--title-1);
            bottom: 0;
            left: 40px;
            right: 40px;
        }

    }
    .series-banner {
        width: 100vw;
        display: flex;
        overflow-x: auto;
        margin-top: 67px;

        justify-content: center;
        align-items: center;

        .series-banner-item {
            height: 500px;
            width: 440px;
            margin: 0 10px;
            position: relative;
            background-color: var(--white);
            flex-shrink: 0;
            .banner-img-container {
                display: flex;
                justify-content: center;
                align-items: center;
                .banner-img {
                    width: 420px;
                    object-fit: cover;
                }
            }
            .stack-child {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: 0;
            }
            .border-img {
                height: 500px;
                width: 440px;
                object-fit: fill;
                z-index: 0;
            }
            .text {
                color: var(--title-1);
                font-size: 20px;
                line-height: 24px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 40px;
                text-align: center;
            }
            .text-active {
                color: var(--primary);
                font-weight: bold;
            }
        }

        .series-banner-item-highlight {
            height: 528px;
            width: 464px;
            .highlight-background-img {
                height: 528px;
                width: 464px;
                object-fit: fill;
            }
            .banner-img {
                width: 444px;
                object-fit: cover;
            }
            .border-img {
                height: 528px;
                width: 464px;
                object-fit: fill;
                z-index: 0;
            }
        }
    }
}


</style>
