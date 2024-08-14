<template>
    <div class="preview-container">
        <div class="step-container">
            <img class="step-img" :src="model.stepSrc" alt="步骤">
        </div>
        <div :class="model.isLast ? 'divider hidden' : 'divider'"></div>
        <div class="preview-right">
            <TechVideoIntroduceMobile :model="model"></TechVideoIntroduceMobile>
            <TechProcessTextMobile :title="props.model.title" :body-html="props.model.content" :tag-src="props.model.tagSrc"></TechProcessTextMobile>
        </div>

    </div>
</template>

<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
import type { TechProcessPreviewModel } from '@/hooks/useTechProcessDataHook';
import TechProcessTextMobile from "@/components/TechProcessTextMobile.vue";
import TechVideoIntroduceMobile from "@/components/TechVideoIntroduceMobile.vue";
const props = defineProps<{ model: TechProcessPreviewModel }>();
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();

</script>

<style scoped lang="scss">

.preview-container {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    width: 100%;
    position: relative;

    .step-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin: 1px 20px;
        .step-img {
            width: 60px;
            height: 60px;
        }
    }
    .divider {
        width: 2px;
        position: absolute;
        left: 50px;
        top: 60px;
        bottom: 0;
        background: repeating-linear-gradient(
                to bottom,
                var(--primary) 0,
                var(--primary) 5px,
                transparent 5px,
                transparent 10px
        );
    }
    .hidden {
        width: 0;
    }
    .preview-right {
        flex: 1;
    }
}

</style>
