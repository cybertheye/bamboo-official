<template>
    <div class="main-product-mobile">
        <div class="product-img-container">
            <img class="product-img" src="../assets/images/products/main_product.png" alt="fan bearing housing">
        </div>
        <div class="product-text">
            <div v-if="isZh" class="title-zh-text">{{ t('product.titleUppercase') }}</div>
            <div v-if="isZh" class="title-rich-text">
                <div class="title-text text-highlight ">{{ t('product.high') }}</div>
                <div class="title-text">{{ t('product.accuracy') }}</div>
                <div class="title-text">，</div>
                <div class="title-text text-highlight ">{{ t('product.no') }}</div>
                <div class="title-text">{{ t('product.leakage') }}</div>
            </div>
            <div v-else class="title-en-text-container">
                <div class="title-rich-text">
                    <div class="title-text text-highlight">{{ t('product.high') }}</div>
                    <div class="title-text">{{ t('product.accuracy') }}</div>
                </div>
                <div class="title-rich-text">
                    <div class="title-text text-highlight">{{ t('product.no') }}</div>
                    <div class="title-text">{{ t('product.leakage') }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="title-rich-text">
                <div class="sub-title-text">{{ t('product.best') }}</div>
                <div class="sub-title-text text-highlight ">{{ t('product.quality') }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { MessageSchema } from "@/i18n/message_schema";

const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const isZh = computed(() => locale.value == 'zh');


</script>

<style scoped lang="scss">
.main-product-mobile {
    width: 100%;
    background: var(--white);
    position: relative;
    .product-img-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        z-index: 1;
        .product-img {
            object-fit: contain;
            width: 82%;
            max-height: 350px;
        }
    }
    .product-text {
        display: flex;
        padding-left: 12px;
        flex-direction: column;
        align-items: start;
        background-color: transparent;
        position: relative;
        z-index: 2;

        .title-zh-text {
            font-size: 10px;
            color: var(--body);
            margin-bottom: 12.5px;
        }
        .title-rich-text {
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            .text-space {
                color: transparent;
            }
        }
        .title-text {
            font-size: 42px;
            font-weight: bold;
            color: #4a4a4a;
        }
        .sub-title-text {
            font-size: 30px;
            color: var(--body);
            margin-bottom: 20px;
        }
        .text-highlight {
            color: var(--primary);
        }
        .title-en-text-container {
            margin-top: 0;
        }
        .divider {
            width: 50px;
            height: 8px;
            background-color: var(--primary);
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
}
</style>

