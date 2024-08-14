<template>
    <div class="preview-container">
        <div class="preview-left">
            <TechProcessText v-if="model.textAlignmentStart" :title="props.model.title" :body-html="props.model.content" :tag-src="props.model.tagSrc" :alignment-left="true" ></TechProcessText>
            <TechVideoIntroduce v-else :model="model"></TechVideoIntroduce>
        </div>
        <div class="step-container">
            <div :class="model.isFirst ? 'divider hidden' : 'divider' "></div>
            <img class="step-img" :src="model.stepSrc" alt="步骤">
            <div :class="model.isLast ? 'divider hidden' : 'divider'"></div>
        </div>
        <div class="preview-right">
            <TechProcessText v-if="!model.textAlignmentStart" :title="props.model.title" :body-html="props.model.content" :tag-src="props.model.tagSrc" :alignment-left="false" ></TechProcessText>
            <TechVideoIntroduce v-else :model="model"></TechVideoIntroduce>
        </div>

    </div>
</template>

<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
import type { TechProcessPreviewModel } from '@/hooks/useTechProcessDataHook';
import TechProcessText from "@/components/TechProcessText.vue";
import TechVideoIntroduce from "@/components/TechVideoIntroduce.vue";
const props = defineProps<{ model: TechProcessPreviewModel }>();
</script>

<style scoped lang="scss">

.preview-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    .step-container {
        display: flex;
        flex-direction: column;
        height: 485px;
        align-items: center;
        margin: 1px 40px;
        .step-img {
            width: 120px;
            height: 120px;
        }
        .divider {
            flex: 1;
            width: 2px;
            height: 100%;
            background: repeating-linear-gradient(
                    to bottom,
                    var(--primary) 0,
                    var(--primary) 5px,
                    transparent 5px,
                    transparent 10px
            );
        }
        .hidden {
            background: transparent;
        }
    }

    .preview-left {
        flex: 1;
        width: 200px;
        height: 365px;
    }

    .preview-right {
        flex: 1;
    }




}

</style>
