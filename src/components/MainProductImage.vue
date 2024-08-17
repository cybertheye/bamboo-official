<template>
    <div class="main-product">

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
<!--                    <div class="text-space">sp</div>-->
                    <div class="title-text">{{ t('product.accuracy') }}</div>
                </div>
                <div class="title-rich-text">
                    <div class="title-text text-highlight">{{ t('product.no') }}</div>
<!--                    <div class="text-space">sp</div>-->
                    <div class="title-text">{{ t('product.leakage') }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="title-rich-text">
                <div class="sub-title-text">{{ t('product.best') }}</div>
<!--                <div v-if="!isZh" class="text-space">sp</div>-->
                <div class="sub-title-text text-highlight ">{{ t('product.quality') }}</div>
            </div>
        </div>

        <div class="product-img-container">
            <img class="product-img" src="../assets/images/products/main_product.png" alt="主图">
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
.main-product {
    width: 100%;
    height: 812px;
    background: var(--white);
    display: flex;
    flex-direction: row;
    .product-img-container {
        flex: 1;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        padding-right: 165px;
        .product-img {
            height: 489px;
            margin-top: 137px;
            object-fit: contain;
        }
    }
    .product-text {
        display: flex;
        width: 898px;
        padding-left: 240px;
        flex-direction: column;
        z-index: 99;
        .title-zh-text {
            font-size: 20px;
            color: #4d4d4d;
            margin-bottom: 25px;
            margin-top: 219px;
        }
        .title-en-text-container {
            margin-top: 172px;
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
            font-size: 84px;
            font-weight: bold;
            color: #4d4d4d;
        }
        .sub-title-text {
            font-size: 54px;
            color: var(--body);
        }
        .text-highlight {
            color: var(--primary);
        }
        .divider {
            width: 101px;
            height: 16px;
            background-color: var(--primary);
            margin-top: 69px;
            margin-bottom: 60px;
        }
    }
}
</style>

