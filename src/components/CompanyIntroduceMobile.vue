<template>
  <div class="introduce-container-mobile">
    <div :class="isZh ? 'introduce-text-mobile introduce-text-zh-mobile' : 'introduce-text-mobile' ">
      <div class="title-text-mobile">{{ t('introduce.title') }}</div>
      <div class="sub-title-text-mobile">FAN BEARING HOUSING MANUFACTURER</div>
      <div class="content-text-mobile">
        <div class="content-span-mobile">{{ t('introduce.content1') }}</div>
        <div class="content-span-mobile">{{ t('introduce.content2') }}</div>
        <div class="content-span-mobile">{{ t('introduce.content3') }}</div>
      </div>
    </div>
    <div class="introduce-img-mobile">
      <img class="factory-img-mobile" src="@/assets/images/introduce/factory.png" alt="工厂图片">
      <img class="about-us-img-mobile" src="@/assets/images/introduce/about_us.png" alt="关于我们">
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
.introduce-container-mobile {
  overflow: clip;
  .introduce-text-mobile {
    margin-top: 20px;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    .title-text-mobile {
      color: var(--title);
      font-weight: bolder;
      height: 29px;
      position: relative;
      font-size: 14px;
      line-height: 16px;
    }
    .title-text-mobile::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      background-color: var(--title);
      width: 30px;
    }
    .sub-title-text-mobile {
      font-weight: 500;
      margin-top: 20px;
      color: var(--title-1);
      font-size: 14px;
    }
    .content-text-mobile {
      font-size: 10px;
      color: var(--body);
      line-height: 12px;
    }
    .content-span-mobile {
      margin-top: 17px;
    }
  }
  .row-space-mobile {
    width: 40px;
  }
  .introduce-img-mobile {
    width: 100%;
    margin-top: 20px;
    position: relative;
    padding: 0 10px 72px;

    .factory-img-mobile {
      width: 100%;
      object-fit: contain;
    }
    .about-us-img-mobile {
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
