<template>
  <div class="certificate-container">
    <div class="cert-text">
      <div class="title-container">
        <span class="title-text">{{ t('cert.title')}}</span>
      </div>
      <div class="sub-title-text">{{ t('cert.subTitle')}}</div>
    </div>

    <div class="cert-gallery-container">
      <div class="cert-tab-list">
        <div class="tab" >
          <div class="tab-text tab-text-active">{{ selectedTabText }}</div>
          <div class="tab-item-bar tab-item-bar-active"></div>
        </div>
        <!-- <div class="tag">
                    <img class="tag-img" src="@/assets/images/introduce/design_cert_sign.png" alt="水印">
                </div> -->
      </div>
      <swiper class="cert-swiper"
              slides-per-view="auto"
              :space-between="10"
              :centered-slides="true"
              :loop="false"
              @swiper="onSwiper"
              @slideChange="onSlideChange">
        <swiper-slide class="cert-swiper-slide" v-for="(img, index) in images">
          <img  class="cert-img" :src="img" @click="onBannerItemClick(index)" alt="证书">
        </swiper-slide>
      </swiper>
    </div>

    <div class="swiper-control">
      <div v-for="(item, index) in certs" :class="activeIndexRef == index ? 'dot dot-active' : 'dot'" ></div>
    </div>

    <vue-easy-lightbox
        :visible="visible"
        :imgs="images"
        :index="selectedIndexRef"
        @hide="onPreviewClose"
    />

  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
const swiperRef = ref<any | null>(null)
const activeIndexRef = computed(() => swiperRef.value == null ? 0 : swiperRef.value.activeIndex);
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const isZh = computed(() => locale.value == 'zh');
const selectedIndexRef = ref(0);
const selectedTabText = computed(() => certs.value[activeIndexRef.value]);

const certs = computed(() => [
  t('cert.cert1'),
  t('cert.cert2'),
  t('cert.cert3')
]);
const visible = ref(false);
const onBannerItemClick = (index: number) => {
  selectedIndexRef.value = index % certs.value.length;
  visible.value = true;
}
const onPreviewClose = () => {
  visible.value =  false;
};
const images = [
  new URL('@/assets/images/introduce/cert1.png', import.meta.url).href,
  new URL('@/assets/images/introduce/cert2.png', import.meta.url).href,
  new URL('@/assets/images/introduce/cert3.png', import.meta.url).href,
];
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};
const onSlideChange = () => {
  console.log('slide change');
};

const onTabClick = (index: number) => {
  swiperRef.value?.slideTo(index);
}

</script>

<style scoped lang="scss">
.certificate-container {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  position: relative;
  width: 100%;
  user-select: none;
  overflow: clip;

  .cert-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 12px;

    .title-container {
      display: flex;
      flex-direction: row;
      justify-content: start;

      .title-text {
        font-size: 14px;
        color: var(--title);
        font-weight: bolder;
        position: relative;
        display: inline-block;
        padding-bottom: 10px;
      }
    }

    .title-text::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: var(--title);
    }

    .sub-title-text {
      margin-top: 20px;
      text-align: left;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: var(--body);
    }
  }
  .cert-gallery-container {
    width: 100%;

    .cert-swiper {
      width: 44vw;
      position: relative;
      margin-top: 15px;
      overflow: visible !important;
      .cert-swiper-slide{
        height: 62.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .cert-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          cursor: pointer;
        }
      }
      .tag {
        position: absolute;
        top: 36px;
        left: 0;
        .tag-img {
          height: 169px;
          width: 1087px;
          object-fit: contain;
        }
      }
    }
    .cert-tab-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 0 22px;
      .tag {
          position: absolute;
          left: 0;
          top: 20px;
          .tag-img {
            height: 60px;
            object-fit: co;
          }
        }
      .tab {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        .tab-text {
          line-height: 28px;
          position: relative;
          color: #777777;
          text-align: center;
        }
        .tab-text-active {
          color: var(--primary);
        }
        .tab-item-bar {
          width: 20px;
          height: 2.5px;
          border-radius: 7px;
          background-color: transparent;
        }
        .tab-item-bar-active {
          background-color: var(--primary);
        }
      }
    }
  }
  .swiper-control {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding-top: 15px;
    height: 40px;

    .dot {
      width: 6px;
      height: 6px;
      background-color: #d9d9d9;
      margin: 0 3px;
      border-radius: 3px;
    }

    .dot-active {
      background-color: var(--primary);
    }
  }

}
</style>
