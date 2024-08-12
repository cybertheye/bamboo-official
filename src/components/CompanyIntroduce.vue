<template>
    <div class="introduce-container">
        <div :class="isZh ? 'introduce-text introduce-text-zh' : 'introduce-text' ">
            <div class="title-text">{{ t('introduce.title') }}</div>
            <div class="sub-title-text">{{ t('introduce.subTitle') }}</div>
            <div class="content-text">
                <div class="content-span">{{ t('introduce.content1') }}</div>
                <div class="content-span">{{ t('introduce.content2') }}</div>
<!--                <div class="content-span">{{ t('introduce.content3') }}</div>-->
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
    min-height: 881px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    .introduce-text {
        margin-top: 150px;
        flex: 968;
        padding-left: 240px;
        .title-text {
            color: var(--title);
            font-weight: bolder;
            height: 52px;
            position: relative;
            font-size: 28px;
            line-height: 33px;
            margin-bottom: 60px;
        }
        .title-text::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            background-color: var(--title);
            width: 60px;
        }
        .sub-title-text {
            font-weight: 500;
            color: var(--title-1);
            font-size: 26px;
            margin-bottom: 34px;
        }
        .content-text {
            font-size: 20px;
            color: var(--body);
            line-height: 24px;
        }
        .content-span {
            margin-bottom: 34px;
        }
    }
    .row-space {
        width: 40px;
    }
    .introduce-img {
        flex: 912;
        height: 100%;
        padding-right: 240px;
        position: relative;
        .factory-img {
            position: absolute;
            width: 672px;
            top: 178px;
            left: 0;
            object-fit: contain;
            -o-object-fit: contain;
        }

        .about-us-img {
            position: absolute;
            bottom: 178px;
            height: 169px;
            width: 736px;
            top: 614px;
            right: 0;
            object-fit: contain;
            -o-object-fit: contain;
        }

    }

}
</style>
