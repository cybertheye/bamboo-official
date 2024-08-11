<template>
    <div :class="props.alignmentLeft ? 'preview-text alignment-left' : 'preview-text' ">
        <div class="title">{{ props.title }}</div>
        <div class="body-html" v-if="props.bodyHtml != null" v-html="props.bodyHtml"></div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ title: string, bodyHtml?: string, alignmentLeft: boolean }>();

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
        //.highlight::after {
        //    content: "";
        //    position: absolute;
        //    height: 11px;
        //    left: 0;
        //    right: 0;
        //    bottom: 0;
        //    background-color: var(--primary);
        //    opacity: 0.2;
        //}
    }


}

.alignment-left {
    align-items: end;
    .body-html {
        text-align: right;
    }
}

</style>


