<template>
    <div class="home-page">
        <HostHeader :show-about-us="false" :show-tech-intro="true" />
        <div class="content"><CompanyIntroduce /></div>
        <CertificateIntroduce />
        <HostFooter />
    </div>
</template>

<script lang="ts" setup>

import MainProductImage from "@/components/MainProductImage.vue";
import HostFooter from "@/components/HostFooter.vue";
import HostHeader from "@/components/HostHeader.vue";
import CompanyIntroduce from "@/components/CompanyIntroduce.vue";
import CertificateIntroduce from "@/components/CertificateIntroduce.vue";

import { useTechProcessDataHook } from "@/hooks/useTechProcessDataHook"
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '@/i18n/message_schema'
const { t, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();
const { techProcessData } = useTechProcessDataHook();

const router = useRouter();

const onLinkToAboutUs = () => {
    router.push({
        name: 'about_us',
    });
}


</script>

<style>
.home-page {
    width: 100%;
    height: 100vh;
    overflow: auto;
    min-width: 1440px;
    .content {
        padding-top: 127px;
    }
}
</style>
