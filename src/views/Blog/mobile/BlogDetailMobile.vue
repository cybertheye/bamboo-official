<template>
  <div class="blog-detail-container">
    <HostHeaderMobile :show-about-us="true" :show-tech-intro="false" />
    <div class="blog-content-wrapper" v-if="post">

      <div class="sidebar">
        <div class="table-of-contents">
          <h3>{{ t('blog.toc') }}</h3>
          <ul>
            <li v-for="(title, index) in toc" :key="index" :class="{ 'h2': title.level === 2 }">
              <a @click="scrollToElement(title.text)">{{ title.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="blog-detail">
        <h1 class="blog-title">{{ post.title }}</h1>
        <div v-html="renderedContent"></div>
      </div>
    </div>
    <HostFooterMobile />
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
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
interface TocItem { 
  anchor: string;
  level: number;
  text: string;
}
const toc = ref<TocItem[]>([]);

const renderContent = async () => {
  if (post.value) {
    try {
      const fileName = locale.value === 'zh' ? post.value.file : post.value.file.replace('-zh.md', '-en.md');
      const response = await fetch(`/blogmd/${fileName}`);
      const markdown = await response.text();
      
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
      block: 'center'
    });
  }
}
</script>

<style scoped lang="scss">
.blog-detail-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f9f9f9;
  font-family: 'Arial', sans-serif;

  .blog-content-wrapper {
    padding: 20px;
    padding-top: 100px;
  }

  .blog-detail {
    background-color: #ffffff;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .blog-title {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      position: relative;
      padding-bottom: 15px;
      text-align: center;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(to right, #3498db, #2ecc71);
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100px;
      }
    }

    div {
      font-size: 1rem;
      line-height: 1.8;
      color: #34495e;

      h2 {
        font-size: 1.6rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #2c3e50;
        border-bottom: 2px solid #ecf0f1;
        padding-bottom: 0.5rem;
      }

      h3 {
        font-size: 1.4rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        color: #34495e;
      }

      p {
        margin-bottom: 1.2rem;
        text-align: justify;
      }

      :deep(img) {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 1.5rem auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
      }

      ul, ol {
        margin-bottom: 1.2rem;
        padding-left: 1.5rem;
      }

      li {
        margin-bottom: 0.7rem;
      }

      blockquote {
        border-left: 4px solid #3498db;
        padding: 1rem 1.5rem;
        margin: 1.5rem 0;
        background-color: #ecf0f1;
        color: #2c3e50;
        font-style: italic;
        border-radius: 0 8px 8px 0;
      }

      code {
        background-color: #f0f0f0;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
        color: #e74c3c;
      }

      pre {
        background-color: #2c3e50;
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1.5rem 0;

        code {
          background-color: transparent;
          padding: 0;
          color: #ecf0f1;
        }
      }

      a {
        color: #3498db;
        text-decoration: none;
        border-bottom: 1px dotted #3498db;
        transition: all 0.3s ease;

        &:hover {
          color: #2980b9;
          border-bottom: 1px solid #2980b9;
        }
      }
    }
  }

  .sidebar {
    .table-of-contents {
      padding: 15px;
      background-color: #ffffff;
      border-radius: 12px;
      margin-bottom: 20px;
      margin-top: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h3 {
        margin-bottom: 15px;
        font-size: 1.2rem;
        color: #2c3e50;
        border-bottom: 2px solid #ecf0f1;
        padding-bottom: 0.5rem;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        margin-bottom: 10px;
        font-size: 0.95rem;

        &.h2 {
          margin-left: 15px;
        }

        a {
          color: #34495e;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            color: #3498db;
            padding-left: 5px;
          }
        }
      }
    }
  }
}
</style>
