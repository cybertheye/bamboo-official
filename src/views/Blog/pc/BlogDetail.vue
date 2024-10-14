<template>
  <div class="blog-detail-container">
    <HostHeader :show-about-us="false" :show-tech-intro="true" />
    <div class="blog-content-wrapper" v-if="post">
      <div class="blog-detail">
        <h1 class="blog-title">{{ post.title }}</h1>
        <div v-html="renderedContent"></div>
      </div>
      <div class="sidebar">
        <div class="back-button" @click="goBack">
          <i class="fas fa-arrow-left"></i> {{ t('common.back') }}
        </div>
        <div class="table-of-contents">
          <h3>{{ t('blog.toc') }}</h3>
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

<script lang="ts" setup>
import { computed, ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { marked } from 'marked';
import type { MessageSchema } from '@/i18n/message_schema'

const { t, tm, locale } = useI18n<{ message: MessageSchema, locale: 'zh' | 'en' }>();

const route = useRoute();
const router = useRouter();

const posts = computed(() => tm('blog.posts') as any[]);
const post = computed(() => {
  const id = Number(route.params.id);
  return posts.value.find((post) => post.id === id);
});

const renderedContent = ref('');
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')       // 将空格替换为连字符
    .replace(/[^\w\-]+/g, '')   // 移除非单词字符（保留连字符）
    .replace(/\-\-+/g, '-')     // 将多个连字符替换为单个连字符
    .replace(/^-+/, '')         // 去掉开头的连字符
    .replace(/-+$/, '');        // 去掉结尾的连字符
}
interface TocItem {   
  anchor: string;
  level: number;
  text: string;
}
const toc = ref<TocItem[]>([]);

// 提取渲染逻辑到单独的函数
const renderContent = async () => {
  if (post.value) {
    try {
      // 根据当前语言选择正确的文件
      const fileName = locale.value === 'zh' ? post.value.file : post.value.file.replace('-zh.md', '-en.md');
      const response = await fetch(`/src/assets/blog/${fileName}`);
      const markdown = await response.text();
      
      // 重置 TOC
      toc.value = [];
      
      const renderer = new marked.Renderer();
      renderer.heading = function(heading) {
        const level = heading.depth;
        const text = heading.text;
        const anchor = generateId(heading.raw);
        toc.value.push({
          anchor,
          level,
          text
        });
        return `<h${level} id="${text}">${text}</h${level}>`;
      };

      renderedContent.value = await marked(markdown, { renderer });
    } catch (error) {
      console.error('Error loading blog content:', error);
    }
  }
};

// 监听语言变化
watch(() => locale.value, () => {
  renderContent();
});

onMounted(() => {
  renderContent();
});

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(locale.value);
};

const goBack = () => {
  router.back();
};

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'  // 或者使用 'center'
    });
  }
}


</script>

<style scoped lang="scss">
.blog-detail-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    min-width: 1440px;

    .blog-content-wrapper {
        display: flex;

        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        //padding: 127px 20px 20px 20px;
        margin-top: 127px;
        min-height: 100vh; // 确保有足够的高度来滚动
    }

    .blog-detail {
        flex: 1;
        max-width: 800px;
        margin: 0 auto;
        background-color: #ffffff;
        margin-bottom: 100px;
        border-radius: 8px;

        h1 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        span {
            display: block;
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 2rem;
        }

        div {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #444;

            h2 {
                font-size: 1.8rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: #333;
            }

            h3 {
                font-size: 1.5rem;
                margin-top: 1.5rem;
                margin-bottom: 0.8rem;
                color: #444;
            }

            p {
                margin-bottom: 1.2rem;
            }

            :deep(img) {
              max-width: 100%;
              max-height: 500px;
              height: auto;
              display: block;
              margin: 1.5rem auto;
              border-radius: 4px;
              //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
              &:hover {
                transform: scale(1.05);
              }
            }

            ul, ol {
                margin-bottom: 1.2rem;
                padding-left: 2rem;
            }

            li {
                margin-bottom: 0.5rem;
            }

            blockquote {
                border-left: 4px solid #ddd;
                padding-left: 1rem;
                margin: 1.5rem 0;
                font-style: italic;
                color: #555;
            }

            code {
                background-color: #f4f4f4;
                padding: 0.2rem 0.4rem;
                border-radius: 3px;
                font-family: monospace;
                font-size: 0.9em;
            }

            pre {
                background-color: #f4f4f4;
                padding: 1rem;
                border-radius: 4px;
                overflow-x: auto;
                margin: 1.5rem 0;

                code {
                    background-color: transparent;
                    padding: 0;
                }
            }
        }

        .back-button {
          display: inline-block;
          padding: 10px 15px;
          margin-bottom: 20px;
          background-color: #f0f0f0;
          color: #333;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #e0e0e0;
          }

          i {
            margin-right: 5px;
          }
        }
    }

    .sidebar {
      width: 250px;
      position: sticky;
      top: 127px;
      align-self: flex-start;
      margin-left: 40px;
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
      max-height: calc(100vh - 200px); // 调整以适应返回按钮
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

      // 为了更好的滚动体验，可以添加以下样式
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
      .blog-content-wrapper {
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

.blog-detail {
  .blog-title {
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 20px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #e0e0e0;
    }

    &::after {
      background: linear-gradient(to right, #3498db, #2ecc71);
      transition: width 0.3s ease;
      width: 0;
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
