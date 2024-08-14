<template>
    <div class="home-page">
        <HostHeaderMobile :show-about-us="false" :show-tech-intro="true" />
        <div class="content"><CompanyIntroduceMobile /></div>
        <CertificateIntroduceMobile />
        <HostFooterMobile />
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
import HostHeaderMobile from "@/components/HostHeaderMobile.vue";
import HostFooterMobile from "@/components/HostFooterMobile.vue";
import CertificateIntroduceMobile from "@/components/CertificateIntroduceMobile.vue";
import CompanyIntroduceMobile from "@/components/CompanyIntroduceMobile.vue";
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
    .content {
        padding-top: 100px;
    }
}
</style>
