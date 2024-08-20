<template>
    <div class="certificate-container">
        <div class="cert-text">
            <div class="title-container">
                <span class="title-text">{{ t('cert.title')}}</span>
            </div>
            <div class="sub-title-text">{{ t('cert.subTitle')}}</div>
        </div>

        <div class="cert-gallery-container">
            <div class="cert-images-container">
                <div class="tag">
                    <img class="tag-img" src="@/assets/images/introduce/design_cert_sign.png" alt="水印">
                </div>
                <div class="cert-img-container">
                    <img v-for="(img, index) in images" :class="certImageHoverIndex == index ? 'cert-img cert-img-active' : 'cert-img'" :src="img" @mouseenter="onSeriesBannerItemMouseenter(index)" @mouseleave="onSeriesBannerItemMouseleave" @click="onBannerItemClick(index)" alt="证书">
                </div>
            </div>
            <div class="dash-line"></div>
            <div class="cert-name-list">
                <div :class="certImageHoverIndex == 0 ? 'name-text name-text-active' : 'name-text'" @click="onBannerItemClick(0)" @mouseenter="onSeriesBannerItemMouseenter(0)" @mouseleave="onSeriesBannerItemMouseleave">{{ t('cert.cert1')}}</div>
                <div :class="certImageHoverIndex == 1 ? 'name-text name-text-active' : 'name-text'" @click="onBannerItemClick(1)" @mouseenter="onSeriesBannerItemMouseenter(1)" @mouseleave="onSeriesBannerItemMouseleave">{{ t('cert.cert2')}}</div>
                <div :class="certImageHoverIndex == 2 ? 'name-text name-text-active' : 'name-text'" @click="onBannerItemClick(2)" @mouseenter="onSeriesBannerItemMouseenter(2)" @mouseleave="onSeriesBannerItemMouseleave">{{ t('cert.cert3')}}</div>
            </div>
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
const certImageHoverIndex = ref(-1);

const onBannerItemClick = (index: number) => {
    selectedIndexRef.value = index;
    visible.value = true;
}

const visible = ref(false)

const onPreviewClose = () => {
    visible.value =  false;
}

const onSeriesBannerItemMouseenter = (index: number) => {
    certImageHoverIndex.value = index;
}

const onSeriesBannerItemMouseleave = () => {
    certImageHoverIndex.value = -1;
}

const onCertTextClick = (index: number) => {
    selectedIndexRef.value = index;
}

const images = [
    new URL('@/assets/images/introduce/cert1.png', import.meta.url).href,
    new URL('@/assets/images/introduce/cert2.png', import.meta.url).href,
    new URL('@/assets/images/introduce/cert3.png', import.meta.url).href,
]


</script>

<style scoped>
.certificate-container {
    min-height: 996px;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    position: relative;

    .cert-text {
        height: 100%;
        padding-right: 124px;
        display: flex;
        flex-direction: column;
        align-items: end;
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

        .sub-title-text {
            max-width: 1440px;
            margin-top: 40px;
            text-align: right;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: var(--body);
        }
    }
    .cert-gallery-container {
        display: flex;
        flex-direction: row;
        align-items: start;
        .cert-images-container {
            flex: 1282;
            margin-top: 0;
            width: 100%;
            padding-left: 239px;
            padding-top: 140px;
            position: relative;
            .cert-img-container {
                display: flex;
                flex-direction: row;
                justify-content: end;
                align-items: center;
                position: relative;
                .cert-img {
                    flex: 1;
                    width: 100%;
                    height: 476px;
                    margin-left: 20px;
                    object-fit: contain;
                    cursor: pointer;
                    transition: transform 0.3s ease; /* 添加平滑过渡效果 */
                }
                .cert-img-active {
                    transform: scale(1.1); /* 图片放大2倍 */
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
        .cert-name-list {
            display: flex;
            flex-direction: column;
            align-items: end;
            height: 100%;
            margin-top: 20px;
            position: relative;
            justify-content: center;
            flex: 638;
            padding-right: 239px;
            padding-top: 257px;
            .name-text {
                padding-right: 24px;
                line-height: 28px;
                position: relative;
                margin-bottom: 40px;
                color: #777777;
                cursor: pointer;
            }
            .name-text-active {
                color: var(--primary);
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
            .name-text-active::after {
                background-color: var(--primary);
                content: "";
                position: absolute;
                right: 0;
                top: 9px;
                width: 10px;
                height: 10px;
                border-radius: 5px;
                background-color: var(--primary);
            }
        }
        .cert-name-list::after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
        }

    }

}
</style>
