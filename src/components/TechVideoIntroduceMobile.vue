<template>
    <div :class="props.model.textAlignmentStart ? 'preview-media-container' : 'preview-media-container preview-media-container-alignment-end' ">
        <div v-if="previewMedia !== null" class="preview-container-1">
            <img @click="onPreviewImageClick" class="preview-img" v-if="!previewMedia.video" :src="getImageImport(isZh ? previewMedia.img : (previewMedia.enImg ?? previewMedia.img))" alt="预览图片">
            <div v-else>
                <video v-if="!ipAddressStore.canAccessYouTubeVideo" class="preview-video" :src="getVideoImport(previewMedia.video!)" controls></video>
                <iframe v-else class="preview-video" :src="previewMedia.embedYoutubeVideo!" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="tabs">
            <div v-for="(item, index) in props.model.medias" :class="index == selectedIndexRef ? 'tab-item tab-item-active' : 'tab-item'" @click="onTabClick(index)" >
                <img class="tab-img" :src="getImageImport(isZh ? item.img : (item.enImg ?? item.img) )" alt="tab">
                <div class="tag" v-if="item.video">
                    <img class="video-tag" v-if="index == selectedIndexRef" src="@/assets/images/icons/video_orange.png" alt="tab-video-tag">
                    <img class="video-tag" v-else src="@/assets/images/icons/video_gray.png" alt="tab-video-tag">
                </div>
            </div>
        </div>
        <vue-easy-lightbox v-if="isZh"
                           :visible="visible"
                           :imgs="previewImagesZh.map((v) => getImageImport(v))"
                           :index="previewIndexRef"
                           @hide="onPreviewClose"
        />
        <vue-easy-lightbox v-else
                           :visible="visible"
                           :imgs="previewImagesEn.map((v) => getImageImport(v))"
                           :index="previewIndexRef"
                           @hide="onPreviewClose"
        />
    </div>
</template>

<script lang="ts" setup>

import {useI18n} from "vue-i18n";
import {TechProcessPreviewModel, useTechProcessDataHook} from "@/hooks/useTechProcessDataHook";
import {useIpAddressStore} from "@/stores/useIpAddressStore";
import {onMounted} from "vue";

const props = defineProps<{ model: TechProcessPreviewModel }>();
const { locale } = useI18n<{ locale: 'zh' | 'en' }>();
const isZh = computed(() => locale.value == 'zh')
const visible = ref(false)
const onPreviewClose = () => {
    visible.value =  false;
}
const previewImagesZh: string[] = [];
const previewImagesEn: string[] = [];
for (let i = 0; i < props.model.medias.length; i++) {
    const media = props.model.medias[i];
    if (media.video == null) {
        previewImagesZh.push(media.img);
        previewImagesEn.push(media.enImg ?? media.img);
    }
}
const previewImages = computed((): string[] => {
    if (isZh) {
        return previewImagesZh;
    }
    return previewImagesEn;
})
const previewIndexRef = computed(() => {
    if (previewMedia.value?.video !== null) {
        return -1;
    }
    return previewImages.value.indexOf(previewMedia.value?.img);
})
const selectedIndexRef = ref<number>(0);
const previewMedia = computed(() => {
    if (props.model.medias.length > 0) {
        return props.model.medias[selectedIndexRef.value];
    }
    return null;
});
const onPreviewImageClick = () => {
    visible.value = true;
}
const onTabClick = (index: number) => {
    selectedIndexRef.value = index;
}
const getImageImport = (path: string) =>new URL(`../assets/images/tech/${path}`, import.meta.url).href;
const getVideoImport = (path: string) =>new URL(`../assets/videos/${path}`, import.meta.url).href;
const ipAddressStore = useIpAddressStore();

onMounted(() => {
    ipAddressStore.reloadIpInfo();
});

</script>

<style lang="scss" scoped>

.preview-media-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding-right: 38px;
    .tabs {
        display: flex;
        flex-direction: row;
        .tab-item {
            width: 40px;
            height: 40px;
            background-color: #d9d9d9;
            margin-right: 8px;
            user-select: none;
            position: relative;
            margin-top: 10px;
            .tab-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .video-tag {
                position: absolute;
                width: 8px;
                height: 8px;
                left: 4px;
                bottom: 4px;
            }
        }
        .tab-item-active {
            border: 1px solid var(--primary);
        }

    }
    .preview-container {
        width: 100%;
        height: 182px;
        background-color: #1e1e1e;
        user-select: none;

    }
    .preview-container-1 {
        width: 100%;
        background-color: #1e1e1e;
        .preview-img {
            width: 100%;
            height: 182px;
            object-fit: contain;
            cursor: pointer;
        }
        .preview-video {
            width: 100%;
            height: 182px;
            object-fit: contain;
        }
    }
}

.preview-media-container-alignment-end {
    justify-content: end;
}


</style>


