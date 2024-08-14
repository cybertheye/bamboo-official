<template>
  <div class="introduce-container">
    <div :class="isZh ? 'introduce-text introduce-text-zh' : 'introduce-text' ">
      <div class="title-text">{{ t('introduce.title') }}</div>
      <div class="sub-title-text">FAN BEARING HOUSING MANUFACTURER</div>
      <div class="content-text">
        <div class="content-span">{{ t('introduce.content1') }}</div>
        <div class="content-span">{{ t('introduce.content2') }}</div>
        <div class="content-span">{{ t('introduce.content3') }}</div>
      </div>
    </div>
    <div class="introduce-img">
      <img class="factory-img" src="@/assets/images/introduce/factory.png" alt="工厂图片">
      <img class="about-us-img" src="@/assets/images/introduce/about_us.png" alt="关于我们">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const isZh = computed(() => locale.value == 'zh');



</script>

<style lang="scss" scoped>
.introduce-container {
  overflow: clip;
  .introduce-text {
    margin-top: 20px;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    .title-text {
      color: var(--title);
      font-weight: bolder;
      height: 29px;
      position: relative;
      font-size: 14px;
      line-height: 16px;
    }
    .title-text::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      background-color: var(--title);
      width: 30px;
    }
    .sub-title-text {
      font-weight: 500;
      margin-top: 20px;
      color: var(--title-1);
      font-size: 14px;
    }
    .content-text {
      font-size: 10px;
      color: var(--body);
      line-height: 12px;
    }
    .content-span {
      margin-top: 17px;
    }
  }
  .row-space {
    width: 40px;
  }
  .introduce-img {
    width: 100%;
    margin-top: 20px;
    position: relative;
    padding: 0 10px 72px;

    .factory-img {
      width: 100%;
      object-fit: contain;
    }
    .about-us-img {
      position: absolute;
      height: 85px;
      bottom: 20px;
      left: 10px;
      width: 100%;
      object-fit: contain;
      -o-object-fit: contain;
    }
  }

}
</style>
