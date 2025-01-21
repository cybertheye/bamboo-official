<template>
  <div class="quote-error-container">
    <HostHeaderMobile :show-about-us="true" :show-tech-intro="false" />
    <div class="quote-error-content">
      <h1>{{ $t('quote.error.title') }}</h1>
      <div class="error-wrapper">
        <p>{{$t('quote.error.message')}}</p>
        <button @click="goBack">{{ $t('quote.error.back') }}</button>
      </div>
    </div>
    <HostFooterMobile />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import HostHeaderMobile from '@/components/HostHeaderMobile.vue';
import HostFooterMobile from '@/components/HostFooterMobile.vue';

const { t } = useI18n();
const router = useRouter();
const errorMessage = ref(t('quote.default_error'));

const goBack = () => {
  router.push({ name: 'quote' });
};
</script>

<style scoped lang="scss">
.quote-error-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f9f9f9;

  .quote-error-content {
    padding: 50px;
    padding-top: 150px;

    h1 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 1.8rem;
      color: #2c3e50;
    }

    .error-wrapper {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;

      p {
        color: #e74c3c;
        margin-bottom: 20px;
      }

      button {
        background-color: #3498db;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #2980b9;
        }
      }
    }
  }
}
</style>
