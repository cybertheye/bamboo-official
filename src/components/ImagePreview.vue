<template>
    <div>
        <div v-viewer :options="{ inline: true }">
            <img v-for="(image, index) in props.images" :key="index" :src="image" alt="Thumbnail" class="thumbnail" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import 'viewerjs/dist/viewer.css';
const props = defineProps<{ images: any[] }>()
</script>

<style scoped>
.thumbnail {
    width: 100px;
    height: auto;
    cursor: pointer;
    margin: 5px;
}
</style>
