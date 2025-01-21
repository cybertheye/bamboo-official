<template>
  <div class="quote-error-container">
    <HostHeader :show-about-us="true" :show-tech-intro="false" />
    <div class="quote-content-wrapper">
      <div class="quote-error">
        <h1>{{ $t('quote.error.title') }}</h1>
        <p>{{ $t('quote.error.message') }}</p>
        <router-link to="/quote" class="back-link">
          {{ $t('quote.error.back') }}
        </router-link>
      </div>
    </div>
    <HostFooter />
  </div>
</template>

<script setup lang="ts">
import HostHeader from '@/components/HostHeader.vue'
import HostFooter from '@/components/HostFooter.vue'
</script>

<style scoped lang="scss">
.quote-error-container {
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

  .quote-error {
    max-width: 800px;
    width: 100%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;

    h1 {
      font-size: 2rem;
      color: #e74c3c;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .back-link {
      display: inline-block;
      padding: 0.75rem 2rem;
      background-color: #3498db;
      color: white;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #2980b9;
      }
    }
  }
}
</style>
