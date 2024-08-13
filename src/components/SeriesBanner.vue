<template>
    <div class="series-banner-container">
        <div class="title-text">
            <span>{{ t('series.title') }}</span>
            <div class="bottom-border"></div>
        </div>

        <div class="series-banner-swiper-container">
            <div class="series-swiper-control series-swiper-control-left">
<!--                <img  class="control-img" src="@/assets/images/icons/swiper-control-left.png"  alt="左"/>-->
            </div>
            <div class="series-banner">
                <div v-for="(item, index) in seriesProductData" :class="index == selectedIndexRef ? 'series-banner-item series-banner-item-highlight' : 'series-banner-item' " @click="onBannerItemClick(index)" @mouseenter="onSeriesBannerItemMouseenter(index)" @mouseleave="onSeriesBannerItemMouseleave(index)">
                    <img class="border-img stack-child" src="@/assets/images/background/series_border.png" alt="边框">
                    <div class="text">{{ item.name }}</div>
                    <div class="stack-child banner-img-container">
                        <img class="banner-img" :src="item.img" alt="产品系列图片">
                    </div>
                    <img v-if="index == selectedIndexRef" class="highlight-background-img stack-child" src="@/assets/images/background/series_highlight_background.png" alt="边框">
                    <div v-if="index == selectedIndexRef" class="click-detail-text stack-child">
                        <div class="text-button">{{ t('common.clickDetail') }}</div>
                    </div>
                </div>
            </div>
            <div class="series-swiper-control series-swiper-control-right">
<!--                <img  class="control-img" src="@/assets/images/icons/swiper-control-right.png"  alt="右"/>-->
            </div>
        </div>

        <vue-easy-lightbox
            :visible="visible"
            :imgs="seriesProductData.map(item => item.detailImg)"
            :index="previewIndexRef"
            @hide="onPreviewClose"
        />
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
import {useTechProcessDataHook} from "@/hooks/useTechProcessDataHook";
const { t } = useI18n<{ message: MessageSchema }>();
const { seriesProductData } = useTechProcessDataHook();
const selectedIndexRef = ref(-1);
const previewIndexRef = ref(-1);
const onBannerItemClick = (index: number) => {
    visible.value = true;
    previewIndexRef.value = index;
}
const visible = ref(false)
const onPreviewClose = () => {
    visible.value =  false;
}
const onSeriesBannerItemMouseenter = (index: number) => {
    selectedIndexRef.value = index;
}

const onSeriesBannerItemMouseleave = (index: number) => {
    selectedIndexRef.value = -1;
}


</script>

<style scoped lang="scss">

.series-banner-container {
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
    .series-banner-swiper-container {
        display: flex;
        flex-direction: row;
        width: 100vw;
        .series-swiper-control {
            max-width: 280px;
            min-width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            .control-img {
                width: 80px;
                height: 80px;
            }
        }
        .series-swiper-control-left {
            padding-right: 0;
        }
        .series-swiper-control-right {
            padding-left: 0;
        }

        .series-banner {
            flex: 1;
            width: 1384px;
            height: 660px;
            display: flex;
            overflow-x: auto;
            justify-content: center;
            align-items: center;
            .series-banner-item {
                width: 500px;
                height: 440px;
                margin-right: 20px;
                position: relative;
                background-color: var(--white);
                transition: width 0.3s ease, height 0.3s ease;
                cursor: pointer;
                user-select: none;

                .banner-img-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 12px;
                    .banner-img {
                        width: 100%;
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
                    height: 100%;
                    width: 100%;
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
                .click-detail-text {
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .text-button {
                    padding: 0 22px;
                    height: 44px;
                    line-height: 44px;
                    background-color: white;
                    border-radius: 22px;
                    color: var(--title-1);
                }
                .highlight-background-img {
                    height: 100%;
                    width: 100%;
                    object-fit: fill;
                }
            }
            .series-banner-item:last-child {
                margin-right: 0;
            }
            .series-banner-item:hover {
                height: 528px;
                width: 464px;
            }
        }
    }
}


</style>
