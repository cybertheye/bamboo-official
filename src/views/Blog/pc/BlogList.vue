<template>
    <div class="blog-list-container">
        <HostHeader :show-about-us="false" :show-tech-intro="true" />
        <div class="blog-list">
            <div class="featured-post" @click="goToBlogDetail(featuredPost.id)">
                <div class="featured-image">
                    <img :src="featuredPost.imageUrl" :alt="featuredPost.title" />
                </div>
                <div class="featured-content">
                    <span class="featured-label">{{ t('blog.hotarticle') }}</span>
                    <h1>{{ featuredPost.title }}</h1>
                    <p class="featured-summary">{{ featuredPost.summary }}</p>
                    <div class="featured-meta">
                        <span class="featured-date">{{ formatDate(featuredPost.date) }}</span>
                        <span class="featured-views">{{ featuredPost.views }} {{ t('blog.read') }}</span>
                    </div>
                </div>
            </div>
            
            <div class="latest-section">
                <h2 class="latest-title">{{ t('blog.latest') }}</h2>
                <div class="latest-divider"></div>
            </div>
            
            <template v-for="(blog, index) in blogs" :key="blog.id">
                <div class="blog-item" @click="goToBlogDetail(blog.id)">

                    <div class="blog-content">
                        <h2>{{ blog.title }}</h2>
                        <p>{{ blog.summary }}</p>
                        <span>{{ formatDate(blog.date) }}</span>
                    </div>
                    <div class="blog-image">
                        <img :src="blog.imageUrl" :alt="blog.title" />
                    </div>
                </div>
                <div v-if="index !== blogs.length - 1" class="divider"></div>
            </template>
        </div>
        <HostFooter />  
    </div>
</template>
  
  <script lang="ts" setup>
  import { ref,computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';
  
  const { t,tm } = useI18n();
  const router = useRouter();
  

  const blogs = computed(() => {
    const posts = tm('blog.posts') as any[];
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };
  const featuredPost = computed(() => {
    return blogs.value.reduce((max, blog) => max.views > blog.views ? max : blog);
  });
  
  const goToBlogDetail = (id: number) => {
    router.push({ name: 'blog_detail', params: { id } });
  };
  </script>
  
  <style scoped lang="scss">

  .blog-list-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    min-width: 1440px;

    
    background-color: var(--white);

    .blog-list {
      padding: 127px 20px 40px 0;
    
      display: flex;
      flex-direction: column;
      align-items: center;
    
      .featured-post {
        width: 80%;
        max-width: 1000px;
        height: auto;
        display: flex;
        background-color: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        margin-bottom: 40px;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
        }

        .featured-image {
          flex: 1;
          max-width: 50%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          &:hover img {
            transform: scale(1.05);
          }
        }

        .featured-content {
          flex: 1;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .featured-label {
            display: inline-block;
            background-color: #ff6b6b;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 15px;
            text-align: center;
          }

          h1 {
            font-size: 28px;
            color: #333;
            margin-bottom: 15px;
            line-height: 1.3;
          }

          .featured-summary {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
            line-height: 1.6;
          }

          .featured-meta {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #888;

            .featured-views {
              display: flex;
              align-items: center;

              &::before {
                content: '👁️';
                margin-right: 5px;
              }
            }
          }
        }
      }

      .latest-section {
        width: 80%;
        max-width: 1000px;
        margin: 40px auto 20px;
        text-align: left;

        .latest-title {
          font-size: 24px;
          color: var(--title);
          margin-bottom: 10px;
        }

        .latest-divider {
          height: 1px;
          background-color: #e0e0e0;
          width: 100%;
        }
      }

      h1 {
        font-size: 36px;
        color: var(--title);
        margin-bottom: 30px;
        text-align: center;
      }

      .blog-item {
        width: 80%;
        max-width: 1000px;
    
        padding: 20px 20px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: all 0.3s ease;

        display: flex;
        flex-direction: row;
        align-items: center;

        &:hover {
          background-color: #f8f8f8;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
          border-radius: 8px;
        }

        .blog-image {
          flex-shrink: 0;
          width: 300px; // 调整图片容器的宽度
          height: 100px; // 调整图片容器的高度
          margin-right: 20px; // 添加右侧间距

          img {
            width: 100%;
            height: 100%;
            object-fit: cover; // 确保图片填充容器并保持比例
            border-radius: 4px; // 可选：添加圆角
          }
        }

        .blog-content {
          flex-grow: 1;

          h2 {
            font-size: 24px;
            color: var(--title-1);
            margin-bottom: 10px;
          }

          p {
            font-size: 16px;
            color: var(--body);
            padding-right: 50px;
            margin-bottom: 10px;
          }

          span {
            font-size: 14px;
            color: var(--light-text);
          }
        }
      }

      .divider {
        width: 80%;
        max-width: 1000px;
        height: 1px;
        background-color: #e0e0e0;
        margin: 20px auto;
      }
    }
    
    

  }
  </style>
