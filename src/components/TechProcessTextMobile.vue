<template>
    <div class="preview-text-mobile">
        <div class="title">{{ props.title }}</div>
        <div class="body-html" v-if="props.bodyHtml != null" v-html="props.bodyHtml"></div>
        <div class="tag-img-container">
            <img class="tag-img" :src="props.tagSrc" alt="tag">
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ title: string, bodyHtml?: string, tagSrc: any }>();

</script>

<style lang="scss" scoped>

.preview-text-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;
    padding-right: 10px;
    padding-bottom: 10px;
    .title {
        font-size: 12px;
        color: var(--title);
        font-weight: 600;
        margin-top: 10px;
    }
    .tag-img-container {
        position: absolute;
        left: 45px;
        top: 76px;
        right: 0;
        .tag-img {
            height: 169px;
            width: 100%;
            object-fit: contain;
        }
    }
    .body-html {
        font-size: 10px;
        color: var(--body);
        margin-top: 7px;
        line-height: 14px;
        .highlight {
            position: relative;
            color: var(--primary);
            font-weight: bold;
        }
    }
}

</style>


