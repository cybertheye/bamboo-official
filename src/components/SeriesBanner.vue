<template>
    <div class="series-banner-container">
        <div class="series-banner">
            <div v-for="(item, index) in seriesProductData" class="series-banner-item" @click="onBannerItemClick(index)">
                <img class="border-img stack-child" src="@/assets/images/background/series_border.png" alt="边框">
                <div class="text">{{ item.name }}</div>
                <div class="stack-child banner-img-container">
                    <img class="banner-img" :src="index == selectedIndexRef ? item.img : item.img" alt="产品系列图片">
                </div>
                <img v-if="index == selectedIndexRef" class="highlight-background-img stack-child" src="@/assets/images/background/series_highlight_background.png" alt="边框">
            </div>
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
}

</script>

<style scoped lang="scss">

.series-banner-container {
    height: 578px;
    padding-bottom: 78px;
    background: #f7f7f7;
    .series-banner {
        width: 100%;
        display: flex;
        justify-content: center;
        overflow-x: scroll;
        .series-banner-item {
            height: 500px;
            width: 440px;
            margin: 0 10px;
            position: relative;
            background-color: var(--white);
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

            .highlight-background-img {
                height: 500px;
                width: 440px;
                object-fit: fill;
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
    }
}


</style>
