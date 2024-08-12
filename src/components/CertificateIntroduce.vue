<template>
    <div class="certificate-container">
        <div class="cert-imgs">
            <img v-for="(img, index) in images" class="cert-img" :src="img" @click="onBannerItemClick(index)" alt="证书">
        </div>
        <div class="cert-text">
            <div class="title-container">
                <span class="title-text">{{ t('cert.title')}}</span>
            </div>
            <div class="cert-name-list">
                <div class="name-text">{{ t('cert.cert1')}}</div>
                <div class="name-text">{{ t('cert.cert2')}}</div>
                <div class="name-text">{{ t('cert.cert3')}}</div>
            </div>
        </div>

        <div class="tag">
            <img class="tag-img" src="@/assets/images/introduce/design_cert_sign.png" alt="水印">
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
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const isZh = computed(() => locale.value == 'zh');
const selectedIndexRef = ref(0);
const onBannerItemClick = (index: number) => {
    selectedIndexRef.value = index;
    visible.value = true;
}

const visible = ref(false)

const onPreviewClose = () => {
    visible.value =  false;
}

const images = [
    new URL('@/assets/images/introduce/cert1.jpg', import.meta.url).href,
    new URL('@/assets/images/introduce/cert2.jpg', import.meta.url).href,
    new URL('@/assets/images/introduce/cert3.jpg', import.meta.url).href,
]



</script>

<style scoped>
.certificate-container {
    height: 854px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    background-color: #f7f7f7;
    position: relative;

    .tag {
        position: absolute;
        top: 155px;
        left: 0;
        .tag-img {
            height: 169px;
            width: 1087px;
            object-fit: contain;
        }

    }

    .cert-imgs {
        flex: 1366;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 124px;
        margin-top: 276px;

        .cert-img {
            flex: 1;
            width: 100%;
            height: 476px;
            object-fit: contain;
        }
    }

    .cert-text {
        flex: 554;
        height: 100%;
        padding-right: 124px;
        .title-container {
            display: flex;
            flex-direction: row;
            justify-content: end;
            margin-top: 78px;
            .title-text {
                height: 57px;
                font-size: 28px;
                color: var(--title);
                font-weight: bolder;
                position: relative;
                display: inline-block;
            }
        }

        .title-text::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 60px;
            height: 4px;
            background-color: var(--title);
        }

        .cert-name-list {
            display: flex;
            flex-direction: column;
            align-items: end;
            height: 471px;
            margin-top: 144px;
            position: relative;
            justify-content: center;
            .name-text {
                padding-right: 24px;
                line-height: 28px;
                position: relative;
                margin-bottom: 40px;
                color: #777777;
            }
            .name-text::after {
                content: "";
                position: absolute;
                right: 0;
                top: 9px;
                width: 10px;
                height: 10px;
                border-radius: 5px;
                background-color: #777777;
            }
        }

        .cert-name-list::after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: repeating-linear-gradient(
                to bottom,
                #777777 0,
                #777777 5px,
                transparent 5px,
                transparent 10px
            );
        }
    }

}
</style>
