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
                <div class="label">{{ t('common.phone') }}</div>
                <div class="text">{{ t('company.mobile') }}</div>
            </div>
            <div class="company-info-filed">
                <div class="label">{{ t('common.email') }}</div>
                <div class="text">sales@fanbearinghousing.com</div>
            </div>
            <div class="company-info-filed">
                <div class="label">{{ t('common.wechat') }}</div>
                <img class="img-filed" src="@/assets/images/info/wechat_qrcode.png" alt="公司微信">
            </div>
        </div>
        <div class="email-form">
            <div class="top-border" />
            <textarea class="title-area input_filed" v-model="emailTitle" :placeholder='t("common.emailTitlePlaceholder")'></textarea>
            <div class="company-email-edit">
                <textarea class="content-area input_filed" v-model="emailContent" :placeholder='t("common.emailPlaceholder")'></textarea>
                <div class="send-email-button" @click="onSendEmailClick">
                    <img class="icon" src="../assets/images/icons/send.png" alt="发送图标" />
                    <div>{{ t('common.send') }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../i18n/message_schema'
import {ref} from "vue";
const { t } = useI18n<{ message: MessageSchema }>();
const onSendEmailClick = () => {

    var emailTitleValue = emailTitle.value;
    if (emailTitleValue.length == 0) {
        emailTitleValue = t('common.emailTitlePlaceholder')
    }


    const mailtoLink = `mailto:sales@fanbearinghousing.com?subject=${emailTitleValue}&body=${emailContent.value}`;
    window.open(mailtoLink);
}

const emailContent = ref('')
const emailTitle = ref('')

</script>

<style scoped>
.host-footer {
    background: var(--title-1);
    padding: 29px 10px 20px;

    .top-border {
        display: flex;
        flex-direction: row;
        justify-content: start;
        height: 14px;
        .label-border {
            width: 120px;
            height: 2px;
            background-color: var(--white);
        }
        .text-border {
            margin-left: 40px;
            width: 140px;
            height: 2px;
            background-color: var(--white);
        }
    }
    .company-info-filed {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        .label {
            color: var(--light-text);
            width: 160px;
            font-weight: bold;
        }
        .text {
            flex: 1;
            color: var(--body);
            line-height: 21px;
        }

        .img-filed {
            width: 80px;
            height: 80px;
        }
    }

    .email-form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin-top: 20px;

        .top-border {
            width: 120px;
            height: 2px;
            background-color: var(--primary);
        }

        .input_filed {
            background: rgba(247,247,247,0.1);
            border: 1px solid rgba(255,255,255,0.5);
            resize: none;
            outline: none;
            font-size: 10px;
            line-height: 12px;
            color: var(--white);
        }
        .title-area {
            margin-top: 10px;
            height: 35px;
            line-height: 35px;
            padding: 0 10px;
        }
        .company-email-edit {
            height: 138px;
            width: 100%;
            border: 1px solid rgba(255,255,255,0.5);
            position: relative;
            margin-top: 10px;
            background: rgba(247,247,247,0.1);

            .send-email-button {
                position: absolute;
                bottom: 6px;
                right: 6px;
                width: 61px;
                height: 24px;
                background-color: var(--primary);
                color: var(--white);
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-size: 10px;
                .icon {
                    width: 11px;
                    height: 11px;
                    margin-right: 8px;
                }
            }
            .content-area {
                background-color: transparent;
                border: none;
                resize: none;
                outline: none;
                font-size: 10px;
                line-height: 12px;
                color: var(--white);
                position: absolute;
                left: 10px;
                right: 10px;
                top: 10px;
                bottom: 40px;
            }
        }
    }
}
</style>
