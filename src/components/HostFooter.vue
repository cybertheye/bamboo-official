<template>
    <div class="host-footer">
        <div class="company">
            <div class="top-border">
                <div class="label-border"></div>
                <div class="text-border"></div>
            </div>
            <div class="company-info-filed">
                <div class="label">{{ t('common.companyName') }}</div>
                <div class="text">{{ t('company.name') }}</div>
            </div>
            <div class="company-info-filed">
                <div class="label">{{ t('common.address') }}</div>
                <div class="text">{{ t('company.address') }}</div>
            </div>
            <div class="company-info-filed">
                <div class="label">{{ t('common.companyName') }}</div>
                <div class="text">{{ t('company.mobile') }}</div>
            </div>
            <div class="company-info-filed">
                <div class="label">{{ t('common.email') }}</div>
                <div class="text">sales@fanbearinghousing.com</div>
            </div>
        </div>
        <div class="company-email-edit">
            <textarea class="content-area" v-model="emailContent" :placeholder='t("common.emailPlaceholder")'></textarea>
            <div class="send-email-button" @click="onSendEmailClick">
                <img class="icon" src="../assets/images/icons/send.png" alt="发送图标" />
                <div>{{ t('common.send') }}</div>
            </div>
        </div>
        <div class="company-qrcode">
            <div class="divider"></div>
            <div class="add-wechat-text">{{ t('common.addWechat') }}</div>
            <img class="wechat-qrcode" src="../assets/images/info/wechat_qrcode.png" alt="微信二维码">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
import {ref} from "vue";
const { t } = useI18n<{ message: MessageSchema }>();
const onSendEmailClick = () => {
    const mailtoLink = `mailto:sales@fanbearinghousing.com?subject=致信斑驳机电官网&body=${emailContent.value}`;
    window.open(mailtoLink);
}

const emailContent = ref('')

</script>

<style scoped>
.host-footer {
    height: 349px;
    background: var(--title-1);
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    padding: 80px 0 0;

    .top-border {
        display: flex;
        flex-direction: row;
        justify-content: start;
        height: 14px;
        .label-border {
            width: 240px;
            height: 4px;
            background-color: var(--white);
        }
        .text-border {
            margin-left: 80px;
            width: 240px;
            height: 4px;
            background-color: var(--white);
        }
    }
    .company-info-filed {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        margin: 10px 0;
        .label {
            color: var(--light-text);
            width: 320px;
        }
        .text {
            color: var(--body);
            width: 368px;
            line-height: 21px;
        }
    }
    .company-email-edit {
        width: 583px;
        height: 229px;
        border: 1px solid var(--white);
        border-top: 4px solid var(--primary);
        margin: 0 80px;
        position: relative;
        .send-email-button {
            position: absolute;
            bottom: 12px;
            right: 12px;
            width: 122px;
            height: 48px;
            background-color: var(--primary);
            color: var(--white);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .icon {
                width: 22px;
                height: 22px;
                margin-right: 15px;
            }
        }
        .content-area {
            background-color: var(--title-1);
            border: none;
            resize: none;
            outline: none;
            font-size: 20px;
            line-height: 24px;
            color: var(--white);
            position: absolute;
            left: 20px;
            right: 20px;
            top: 20px;
            bottom: 80px;
        }
    }

    .company-qrcode {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        .divider {
            width: 240px;
            height: 4px;
            background-color: var(--white);
        }
        .add-wechat-text {
            font-size: 18px;
            color: var(--light-text);
            font-weight: bold;
            margin: 20px 0;
        }
        .wechat-qrcode {
            width: 160px;
            height: 160px;
        }
    }
}
</style>
