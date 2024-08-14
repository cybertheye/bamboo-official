<template>
    <div class="container">
        <router-view />
    </div>
</template>
<script lang="ts" setup>
import {useIpAddressStore} from "@/stores/useIpAddressStore";
useIpAddressStore();
</script>



<style lang="scss">


</style>
