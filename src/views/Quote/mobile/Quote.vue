<template>
  <div class="quote-container">
    <HostHeaderMobile :show-about-us="true" :show-tech-intro="false" />
    <div class="quote-content">
      <!-- Quote form content here -->
      <h1>{{ t('quote.title') }}</h1>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div class="input-group">
        <input
          v-model="authCode"
          :placeholder="t('quote.placeholder')"
          @keyup.enter="redirectToQuote"
        />
        <button @click="redirectToQuote">{{ t('quote.submit') }}</button>
      </div>
    </div>
    <HostFooterMobile />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import HostHeaderMobile from '@/components/HostHeaderMobile.vue';
import HostFooterMobile from '@/components/HostFooterMobile.vue';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const authCode = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const redirectToQuote = async () => {
  if (!authCode.value) {
    errorMessage.value = 'Please enter a code';
    return;
  }

  try {
    isLoading.value = true;
    errorMessage.value = '';

    const response = await fetch(`/api/validate-quote/${authCode.value}`);
    if (response.ok) {
      sessionStorage.setItem('quoteAuth', authCode.value);

      if (route.query.redirect) {
        delete route.query.redirect;
        delete route.query.message;
      }

      router.push({ path: `/quote/${authCode.value}` });
    } else {
      throw new Error('Invalid code');
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to validate code';
    router.push({ path: '/quote/error' });
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  if (route.query.redirect && route.query.message) {
    errorMessage.value = route.query.message as string;
  }
});
</script>

<style scoped lang="scss">
.quote-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f9f9f9;

  .quote-content {
    padding: 50px;
    padding-top: 140px;

    h1 {
      text-align: center;
      margin-bottom: 10px;
      font-size: 1.8rem;
      color: #2c3e50;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      input {
        padding: 12px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }
      }

      button {
        padding: 12px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #2980b9;
        }

        &:disabled {
          background-color: #bdc3c7;
          cursor: not-allowed;
        }
      }
    }

    .error-message {
      color: #e74c3c;
      margin-bottom: 1rem;
      padding: 12px;
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
      border-radius: 4px;
      text-align: left;
    }
  }
}
</style>
