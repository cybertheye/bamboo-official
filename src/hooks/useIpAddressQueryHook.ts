import axios from 'axios';

export const useIpAddressQueryHook = () => {

    const isChinaIpAddress = async (ip: string): Promise<boolean> => {
        const url = `https://opendata.baidu.com/api.php?query=${ip}&co=&resource_id=6006&oe=utf8`;
        try {
            const response = await axios.get(url);
            const ipData = response.data;


            console.log(ipData.data)

            if (ipData.code === 0 && ['CN', 'HK', 'TW'].includes(ipData.data.country_id)) {
            return true;
        }
        } catch (error) {
            console.error('Error fetching IP information:', error);
        }
        return false;
    }

    const getCurrentIp = async  (): Promise<string | null> => {
        const url = 'https://api.ipify.org/?format=json';
        try {
            const response = await axios.get(url);
            return response.data.ip;
        } catch (error) {
            return null;
        }
    }

    const canAccessYouTube = async (): Promise<boolean> => {
        try {
            const response = await fetch('https://www.youtube.com/favicon.ico', {
                method: 'HEAD',
                mode: 'no-cors'
            });
            console.log(`response-${response}`);
            return response.ok;
        } catch (error) {
            console.log(`e-${error}`);
            return false;
        }
    }

    return {
        isChinaIpAddress,
        getCurrentIp,
        canAccessYouTube,
    }
}
