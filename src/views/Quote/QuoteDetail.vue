<template>
  <div class="quote-detail-container">
    <HostHeader :show-about-us="true" :show-tech-intro="false" />
    <div class="quote-content-wrapper">
      <div class="quote-detail">
        <div v-if="isLoading" class="loading">Loading...</div>
        <div v-else-if="errorMessage" class="error">{{ errorMessage }}</div>
        <div v-else v-html="renderedMarkdown"></div>
      </div>
      <div class="sidebar">
        <div class="back-button" @click="goBack">
          <i class="fas fa-arrow-left"></i> {{ $t('common.back') }}
        </div>
        <div class="table-of-contents">
          <h3>{{ $t('blog.toc') }}</h3>
          <ul>
            <li v-for="(title, index) in toc" :key="index" :class="{ 'h2': title.level === 2 }">
              <a @click="scrollToElement(title.text)">{{ title.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <HostFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import HostHeader from '@/components/HostHeader.vue'
import HostFooter from '@/components/HostFooter.vue'

const route = useRoute()
const router = useRouter()
const renderedMarkdown = ref('')
const isLoading = ref(true)
const errorMessage = ref('')
const toc = ref<{ anchor: string; level: number; text: string }[]>([])

// 生成唯一的ID
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

// 检查是否经过授权验证
const isAuthorized = () => {
  return sessionStorage.getItem('quoteAuth') === route.params.code
}

const renderContent = async (markdown: string) => {
  const renderer = new marked.Renderer()
  toc.value = []

  renderer.heading = function(heading) {
    const level = heading.depth
    const text = heading.text
    const anchor = generateId(heading.raw)
    toc.value.push({
      anchor,
      level,
      text
    })
    return `<h${level} id="${text}">${text}</h${level}>`
  }

  return marked(markdown, { renderer })
}

onMounted(async () => {
  // 添加图片点击事件监听
  document.addEventListener('click', handleImageClick)

  const code = route.params.code

  // 如果没有经过授权验证
  if (!isAuthorized()) {
    router.push({
      path: '/quote',
      query: {
        redirect: `/quote/${code}`,
        message: 'Please enter authorization code to access this quote'
      }
    })
    return
  }

  try {
    isLoading.value = true
    errorMessage.value = ''

    const response = await fetch(`/api/quote/${code}`)
    console.log('API Response:', response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const markdown = await response.text()
    renderedMarkdown.value = await renderContent(markdown)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to load quote'
    console.error('Error loading quote:', error)
    router.push({path:'/quote/error'})
  } finally {
    isLoading.value = false
  }
})

const goBack = () => {
  router.back()
}

function scrollToElement(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}

// 处理图片点击事件
function handleImageClick(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (target.tagName === 'IMG') {
    target.classList.toggle('fullscreen')
  } else if (document.querySelector('img.fullscreen')) {
    // 点击非图片区域时关闭全屏
    document.querySelector('img.fullscreen')?.classList.remove('fullscreen')
  }
}

// 组件卸载时移除事件监听
onUnmounted(() => {
  document.removeEventListener('click', handleImageClick)
})
</script>

<style scoped lang="scss">
.quote-detail-container {
    width: 100vw;
    height: 100vh;
  overflow: auto;

  .quote-content-wrapper {
    flex: 1;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 127px 40px 40px 40px;
    display: flex;
    justify-content: space-between;
    overflow: visible;
  }

  .quote-detail {
    flex: 1;
    max-width: 1000px;
    margin-right: 40px;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    :deep(img) {
      max-width: 80%;
      height: auto;
      display: block;
      margin: 1.5rem auto;
      border-radius: 4px;
      transition: all 0.3s ease;
      cursor: zoom-in;

      &:hover {
        transform: scale(1.5);
        z-index: 100;
        position: relative;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      &.fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        max-width: none;
        object-fit: contain;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.9);
        padding: 20px;
        cursor: zoom-out;
        border-radius: 0;
        transform: none;
      }
    }

    :deep(h1) {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    :deep(em){
    color:red;
    }

    :deep(h2) {
      font-size: 1.8rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #333;
    }

    :deep(p) {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #444;
      margin-bottom: 1.2rem;
    }

    :deep(table) {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    :deep(th),
    :deep(td) {
      padding: 12px 15px;
      text-align: center;
      vertical-align: middle;
      border: 1px solid #ddd;
    }

    :deep(th) {
      text-align: center;
    }

    :deep(th) {
      background-color: #f5f5f5;
      font-weight: 600;
    }

    :deep(tr:nth-child(even)) {
      background-color: #f9f9f9;
    }

    :deep(tr:hover) {
      background-color: #f1f1f1;
    }
  }

  .loading {
    text-align: center;
    padding: 2rem;
    color: #666;
  }

  .error {
    color: #dc3545;
    padding: 2rem;
    text-align: center;
  }

  .sidebar {
    width: 300px;
    position: sticky;
    top: 127px;
    align-self: flex-start;
  }

  .back-button {
    display: block;
    padding: 10px 15px;
    margin-bottom: 20px;
    background-color: #f8f8f8;
    color: #333;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;

    &:hover {
      background-color: #e0e0e0;
    }

    i {
      margin-right: 5px;
    }
  }

  .table-of-contents {
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 200px);
    overflow-y: auto;

    h3 {
      margin-bottom: 15px;
      font-size: 1.2rem;
      color: #333;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
      font-size: 0.9rem;

      &.h2 {
        margin-left: 15px;
      }

      a {
        color: #666;
        text-decoration: none;
        transition: color 0.3s ease;
        cursor: pointer;
        &:hover {
          color: #333;
        }
      }
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 3px;
    }

    ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  }

  @media (max-width: 1024px) {
    .quote-content-wrapper {
      flex-direction: column;
    }

    .table-of-contents {
      position: static;
      width: 100%;
      margin-left: 0;
      margin-top: 30px;
      max-height: none;
    }
  }
}
</style>
