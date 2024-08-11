<template>
    <div class="home-page">
        <HostHeader />
        <div class="content"><MainProductImage /></div>
        <div class="tech-preview-timeline">
            <div class="timeline-title">{{ t('tech.title') }} </div>
            <TechVideoImagePreview v-for="process in techProcessData" :model="process"/>
        </div>
        <SeriesBanner />
        <HostFooter />
    </div>
</template>

<script lang="ts" setup>

import MainProductImage from "@/components/MainProductImage.vue";
import HostFooter from "@/components/HostFooter.vue";
import HostHeader from "@/components/HostHeader.vue";
import TechVideoImagePreview from "@/components/TechVideoImagePreview.vue";
import SeriesBanner from "@/components/SeriesBanner.vue";
import { useTechProcessDataHook } from "@/hooks/useTechProcessDataHook"
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '@/i18n/message_schema'
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const { techProcessData } = useTechProcessDataHook();

</script>

<style>
.home-page {
    width: 100%;
    height: 100vh;
    overflow: auto;

    .content {
        padding-top: 127px;
    }

    .tech-preview-timeline {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7f7f7;
        padding-top: 60px;
        padding-bottom: 60px;
        .timeline-title {
            font-size: 28px;
            line-height: 33px;
            text-align: center;
            font-weight: bolder;
            margin-bottom: 44px;
            position: relative;
            color:  var(--title);
        }
        .timeline-title::after {
            content: "";
            position: absolute;
            top: 54px;
            left: 54px;
            right: 54px;
            height: 4px;
            background-color: var(--title);
        }
    }


}
</style>
