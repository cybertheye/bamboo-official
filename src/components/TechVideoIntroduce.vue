<template>
    <div :class="props.model.textAlignmentStart ? 'preview-media-container' : 'preview-media-container preview-media-container-alignment-end' ">
        <div class="tabs">
            <div v-for="(item, index) in props.model.medias" :class="index == selectedIndexRef ? 'tab-item tab-item-active' : 'tab-item'" @click="onTabClick(index)" >
                <img :src="getImageImport(isZh ? item.img : (item.enImg ?? item.img) )" alt="tab">
                <div class="tag" v-if="item.video">
                    <img class="video-tag" v-if="index == selectedIndexRef" src="@/assets/images/icons/video_orange.png" alt="tab-video-tag">
                    <img class="video-tag" v-else src="@/assets/images/icons/video_gray.png" alt="tab-video-tag">
                </div>
            </div>
        </div>
        <div v-if="previewMedia !== null" class="preview-container">
            <img class="preview-img" v-if="!previewMedia.video" :src="getImageImport(isZh ? previewMedia.img : (previewMedia.enImg ?? previewMedia.img))" alt="预览图片">
            <video class="preview-video" v-else :src="getVideoImport(previewMedia.video)" controls></video>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {useI18n} from "vue-i18n";
import { TechProcessPreviewModel } from "@/hooks/useTechProcessDataHook";
const props = defineProps<{ model: TechProcessPreviewModel }>();
const { locale } = useI18n<{ locale: 'zh' | 'en' }>();
const isZh = computed(() => locale.value == 'zh')


const selectedIndexRef = ref<number>(0);
const previewMedia = computed(() => {
    if (props.model.medias.length > 0) {
        return props.model.medias[selectedIndexRef.value];
    }
    return null;
});


const onTabClick = (index: number) => {
    selectedIndexRef.value = index;
}


const getImageImport = (path: string) =>new URL(`../assets/images/tech/${path}`, import.meta.url).href;
const getVideoImport = (path: string) =>new URL(`../assets/videos/${path}`, import.meta.url).href;


</script>

<style lang="scss">

.preview-media-container {
    display: flex;
    flex-direction: row;
    .tabs {
        display: flex;
        flex-direction: column;

        .tab-item {
            width: 80px;
            height: 80px;
            background-color: #d9d9d9;
            margin-bottom: 15px;
            user-select: none;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .video-tag {
                position: absolute;
                width: 16px;
                height: 16px;
                left: 8px;
                bottom: 8px;
            }
        }

        .tab-item-active {
            border: 2px solid var(--primary);
        }

    }
    .preview-container {
        width: 504px;
        height: 365px;
        background-color: #1e1e1e;
        margin-left: 20px;
        user-select: none;

        .preview-img {
            width: 504px;
            height: 365px;
            object-fit: fill;
        }

        .preview-video {
            width: 504px;
            height: 365px;
            object-fit: contain;
        }

    }
}

.preview-media-container-alignment-end {
    justify-content: end;
}


</style>


