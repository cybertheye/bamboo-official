<template>
    <div class="series-banner-container">
        <div class="title-text">
            <span>{{ t('series.title') }}</span>
            <div class="bottom-border"></div>
        </div>

        <swiper
                :slides-per-view="1"
                :space-between="20"
                class="series-banner-swiper-container"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
        >
            <swiper-slide v-for="(item, index) in seriesProductData" :class="index == selectedIndexRef ? 'series-banner-item series-banner-item-highlight' : 'series-banner-item' " @click="onBannerItemClick(index)" @mouseenter="onSeriesBannerItemMouseenter(index)" @mouseleave="onSeriesBannerItemMouseleave(index)">
                <img class="border-img stack-child" src="@/assets/images/background/series_border.png" alt="边框">
                <div class="stack-child banner-img-container">
                    <img class="banner-img" :src="item.img" alt="产品系列图片">
                </div>
              <div class="text">{{ item.name }}</div>
            </swiper-slide>
        </swiper>

      <div class="page-control">{{ activeIndexRef + 1 }} / {{ seriesProductData.length }}</div>

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

import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
const swiperRef = ref<any | null>(null)
const activeIndexRef = computed(() => swiperRef.value == null ? 0 : swiperRef.value.activeIndex);

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

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};
const onSlideChange = () => {
    console.log('slide change');
};


</script>

<style scoped lang="scss">

.series-banner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    background-color: var(--white);
    .title-text {
        font-weight: 600;
        font-size: 14px;
        color: #333333;
        line-height: 16px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        span {
            position: relative;
            padding-bottom: 9px;
        }
        span::after {
            content: "";
            height: 2px;
            position: absolute;
            background-color: var(--title-1);
            bottom: 0;
            left: 20px;
            right: 20px;
        }

    }
    .series-banner-swiper-container {
      display: flex;
      flex-direction: row;
      width: 100vw;
      align-items: center;
      padding: 0 70px;
      margin-top: 33px;
      .series-banner-item {
        width: 100%;
        height: 264px;
        position: relative;
        background-color: var(--white);

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
          font-size: 10px;
          line-height: 12px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 44px;
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
    }
    .page-control {
      margin-top: 10px;
      margin-bottom: 27px;
      font-size: 12px;
      line-height: 14px;
      color: black;
    }
}


</style>
