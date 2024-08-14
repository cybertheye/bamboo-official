<template>
    <div class="home-page-mobile">
        <HostHeaderMobile :show-about-us="true" :show-tech-intro="false" />
        <div class="content-mobile"><MainProductImageMobile /></div>
        <div class="tech-preview-timeline-mobile">
            <div class="timeline-title-mobile">{{ t('tech.title') }} </div>
            <TechProcessPreviewMobile v-for="process in techProcessData" :model="process"/>
        </div>
        <SeriesBannerMobile />
        <HostFooterMobile />
    </div>
</template>

<script lang="ts" setup>

import { useTechProcessDataHook } from "@/hooks/useTechProcessDataHook"
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '@/i18n/message_schema'
import HostHeaderMobile from "@/components/HostHeaderMobile.vue";
import HostFooterMobile from "@/components/HostFooterMobile.vue";
import MainProductImageMobile from "@/components/MainProductImageMobile.vue";
import TechProcessPreviewMobile from "@/components/TechProcessPreviewMobile.vue";
import SeriesBannerMobile from "@/components/SeriesBannerMobile.vue";
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const { techProcessData } = useTechProcessDataHook();

</script>

<style>
.home-page-mobile {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    .content-mobile {
        padding-top: 100px;
    }

    .tech-preview-timeline-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7f7f7;
        padding-top: 30px;
        .timeline-title-mobile {
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            font-weight: bolder;
            margin-bottom: 22px;
            position: relative;
            color:  var(--title);
        }
        .timeline-title-mobile::after {
            content: "";
            position: absolute;
            top: 27px;
            left: 27px;
            right: 27px;
            height: 2px;
            background-color: var(--title);
        }
    }


}
</style>
