import { defineStore } from 'pinia';
import {useIpAddressQueryHook} from "@/hooks/useIpAddressQueryHook";
const { canAccessYouTube } = useIpAddressQueryHook();

export const useIpAddressStore = defineStore('ipAddress', () => {
    const canAccessYouTubeVideo = ref(false);

    const reloadIpInfo = async  () => {
        try {
            canAccessYouTubeVideo.value = await canAccessYouTube();

            console.log(`是否可以访问youtube ${canAccessYouTubeVideo.value}`);


        } catch (e) {

            console.log(`e-${e}`);

            canAccessYouTubeVideo.value = false;
            console.log(`是否可以访问youtube ${canAccessYouTubeVideo.value}`);
        }
    }

    return {
        reloadIpInfo,
        canAccessYouTubeVideo,
    }
});
