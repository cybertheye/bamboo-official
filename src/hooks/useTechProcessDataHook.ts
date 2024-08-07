import { useI18n } from "vue-i18n";
import type { MessageSchema } from "@/i18n/message_schema";


export class  TechProcessPreviewMediaModel {
    img: string;
    video: string | null;

    constructor(img: string, video: string | null) {
        this.img = img;
        this.video = video;
    }
}

export class SeriesProductMediaModel {

    img: string;
    detailImg: string | null;
    name: string;

    constructor(img: string, detailImg: string | null, name: string) {
        this.img = img;
        this.name = name;
        this.detailImg = detailImg;
    }
}

export class TechProcessPreviewModel {
    title: string;
    content?: string;
    stepSrc: any;
    isFirst: boolean;
    isLast: boolean;
    textAlignmentStart: boolean;
    medias: TechProcessPreviewMediaModel[];


    constructor(title: string, content: string | undefined, stepSrc: any, isFirst: boolean, isLast: boolean, alignmentStart: boolean, medias: TechProcessPreviewMediaModel[]) {
        this.title = title;
        this.content = content;
        this.stepSrc = stepSrc;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.textAlignmentStart = alignmentStart;
        this.medias = medias;
    }

}
export const useTechProcessDataHook = () => {

    const { t, locale } = useI18n<{ message: MessageSchema }>();


    const techProcessData =  computed(() => [
        new TechProcessPreviewModel(t('tech.process1'), t('tech.process1Html'),  new URL('@/assets/images/icons/step1.png', import.meta.url).href, true, false, false, [
            new TechProcessPreviewMediaModel('video_01.jpg', '01.mp4'),
            new TechProcessPreviewMediaModel('01.png', null),
            new TechProcessPreviewMediaModel('02.png', null),
            new TechProcessPreviewMediaModel('03.png', null),
        ]),
        new TechProcessPreviewModel(t('tech.process2'), t('tech.process2Html'),  new URL('@/assets/images/icons/step2.png', import.meta.url).href, false, false, true, [
            new TechProcessPreviewMediaModel('video_02.jpg', '02.mp4'),
            new TechProcessPreviewMediaModel('video_03.jpg', '03.mp4'),
        ]),
        new TechProcessPreviewModel(t('tech.process3'), t('tech.process3Html'),  new URL('@/assets/images/icons/step3.png', import.meta.url).href, false, false, false, [
            new TechProcessPreviewMediaModel('04.png', null),
        ]),
        new TechProcessPreviewModel(t('tech.process4'), t('tech.process4Html'),  new URL('@/assets/images/icons/step4.png', import.meta.url).href, false, false, true,  [
            new TechProcessPreviewMediaModel('video_04.jpg', '04.mp4'),
        ]),
        new TechProcessPreviewModel(t('tech.process5'), undefined,  new URL('@/assets/images/icons/step5.png', import.meta.url).href, false, true, false, [
            new TechProcessPreviewMediaModel('05.jpg', null),
        ]),
    ]);



    const seriesProductData = computed(() => [
        new SeriesProductMediaModel(new URL('@/assets/images/series/preview_series01.png', import.meta.url).href, new URL('@/assets/images/series/01-H.jpg', import.meta.url).href, t('series.series1')),
        new SeriesProductMediaModel(new URL('@/assets/images/series/preview_series02.png', import.meta.url).href, new URL('@/assets/images/series/02-H.jpg', import.meta.url).href, t('series.series2')),
        new SeriesProductMediaModel(new URL('@/assets/images/series/preview_series03.png', import.meta.url).href, new URL('@/assets/images/series/03-GH.jpg', import.meta.url).href, t('series.series3')),
        new SeriesProductMediaModel(new URL('@/assets/images/series/preview_series04.png', import.meta.url).href, new URL('@/assets/images/series/04-LK.jpg', import.meta.url).href, t('series.series4')),
        new SeriesProductMediaModel(new URL('@/assets/images/series/preview_series05.png', import.meta.url).href, new URL('@/assets/images/series/05-JZ.jpg', import.meta.url).href, t('series.series5')),
    ]);

    return {
        techProcessData,
        seriesProductData,
    }
}
