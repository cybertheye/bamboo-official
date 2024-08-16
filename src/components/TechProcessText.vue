<template>
    <div :class="props.alignmentLeft ? 'preview-text alignment-left' : 'preview-text' ">
        <div class="title">
            <div>{{ props.title }}</div>
            <div class="tag-img-container">
                <img class="tag-img" :src="props.tagSrc" alt="tag">
            </div>
        </div>
        <div class="body-html" v-if="props.bodyHtml != null" v-html="props.bodyHtml"></div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ title: string, bodyHtml?: string, alignmentLeft: boolean, tagSrc: any }>();

</script>

<style lang="scss">

.preview-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 447px;
    width: 100%;
    .title {
        font-size: 24px;
        color: var(--title);
        font-weight: bold;
        position: relative;
        .tag-img-container {
            position: absolute;
            left: 0;
            top: -76px;
            right: 0;
            .tag-img {
                height: 169px;
                width: 100%;
                object-fit: contain;
            }
        }
    }
    .body-html {
        font-size: 20px;
        color: var(--body);
        margin-top: 24px;
        max-width: 642px;
        line-height: 28px;
        .highlight {
            position: relative;
            color: var(--primary);
            font-weight: bold;
        }
    }
}

.alignment-left {
    align-items: end;
    position: relative;
    .body-html {
        text-align: right;
    }

    .title {
        width: 100%;
        text-align: right;
        .tag-img-container {
            position: absolute;
            top: -76px;
            right: 0;
            left: 0;
            .tag-img {
                height: 169px;
                width: 100%;
                object-fit: contain;
            }
        }
    }
}

</style>


