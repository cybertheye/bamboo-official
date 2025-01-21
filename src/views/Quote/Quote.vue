<template>
  <div class="quote-container">
    <HostHeader :show-about-us="true" :show-tech-intro="false" />
    <div class="quote-content-wrapper">
      <div class="quote-form">
        <h1>{{ $t('quote.title') }}</h1>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        <div class="input-group">
          <input
            v-model="authCode"
            :placeholder="$t('quote.placeholder')"
            @keyup.enter="redirectToQuote"
          />
          <button @click="redirectToQuote">{{ $t('quote.submit') }}</button>
        </div>
      </div>
    </div>
    <HostFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import HostHeader from '@/components/HostHeader.vue'
import HostFooter from '@/components/HostFooter.vue'

 const route = useRoute()
const router = useRouter()
const authCode = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const redirectToQuote = async () => {
  if (!authCode.value) {
    errorMessage.value = 'Please enter a code'
    return
  }

  try {
    isLoading.value = true
    errorMessage.value = ''

    const response = await fetch(`/api/validate-quote/${authCode.value}`)
    if (response.ok) {
      // 保存授权状态
      sessionStorage.setItem('quoteAuth', authCode.value)
      
      // 清除重定向提示
      if (route.query.redirect) {
        delete route.query.redirect
        delete route.query.message
      }
      
      router.push({ path: `/quote/${authCode.value}` })
    } else {
      throw new Error('Invalid code')
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to validate code'
    router.push({ path: '/quote/error' })
  } finally {
    isLoading.value = false
  }
}

// 在组件加载时检查是否有重定向提示
onMounted(() => {
  if (route.query.redirect && route.query.message) {
    errorMessage.value = route.query.message as string
  }
})
</script>

<style scoped lang="scss">
.quote-container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .quote-content-wrapper {
    flex: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 127px 20px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quote-form {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;

    h1 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 2rem;
    }

    .input-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      input {
        padding: 0.75rem 1rem;
        width: 300px;
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
        padding: 0.75rem 2rem;
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
      padding: 0.75rem;
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
      border-radius: 4px;
      text-align: left;
    }
  }
}
</style>
