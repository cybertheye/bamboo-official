<template>
  <div class="blog-list-container">
    <HostHeaderMobile :show-about-us="true" :show-tech-intro="false" />
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
          <div class="blog-image">
            <img :src="blog.imageUrl" :alt="blog.title" />
          </div>
          <div class="blog-content">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.summary }}</p>
            <span>{{ formatDate(blog.date) }}</span>
          </div>
        </div>
        <div v-if="index !== blogs.length - 1" class="divider"></div>
      </template>
    </div>
    <HostFooterMobile />  
  </div>
</template>

<script lang="ts" setup>
  import { ref,computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';
  
  const { t,tm } = useI18n();
  const router = useRouter();
  

  const blogs = computed(() => {
    //debugger;
    const posts = tm('blog.posts') as any[];
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    //console.log(blogs.value);
    //debugger;
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
  width: 100%;
  height: 100vh;
  //overflow-x: hidden;
  overflow: auto;
  background-color: var(--white);

  .blog-list {
    padding: 100px 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    .featured-post {
      width: 100%;
      max-width: 600px;
      flex-direction: column;
      background-color: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      margin-bottom: 40px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
      }

      .featured-image {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }
      }

      &:hover .featured-image img {
        transform: scale(1.05);
      }

      .featured-content {
        padding: 20px;

        .featured-label {
          display: inline-block;
          background-color: #ff6b6b;
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 10px;
          width: 100%;
          text-align: center;
          transition: background-color 0.3s ease;
        }

        &:hover .featured-label {
          background-color: #ff4f4f;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        &:hover h1 {
          color: #ff6b6b;
        }

        .featured-summary {
          font-size: 14px;
          margin-bottom: 15px;
        }

        .featured-meta {
          font-size: 12px;
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
              transition: transform 0.3s ease;
            }
          }
        }

        &:hover .featured-views::before {
          transform: scale(1.2);
        }
      }
    }

    .latest-section {
      width: 100%;
      max-width: 600px;
      margin: 30px 0 20px;
      text-align: left;
      .latest-title {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .latest-divider {
          height: 1px;
          background-color: #e0e0e0;
          width: 100%;
        }
    }

    .blog-item {
      width: 100%;
      max-width: 600px;
      flex-direction: column;
      padding: 20px 0;
      margin-bottom: 20px;

      .blog-image {
        width: 100%;
        height: 150px;
        margin-bottom: 15px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      }

      .blog-content {
        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          margin-bottom: 10px;
        }

        span {
          font-size: 12px;
        }
      }
    }

    .divider {
      width: 100%;
      max-width: 600px;
      margin: 15px 0;
      height: 1px;
      background-color: #e0e0e0;
    }
  }
}

@media (min-width: 768px) {
  .blog-list-container {
    .blog-list {
      padding-top: 127px;

      .featured-post {
        flex-direction: row;
        max-width: 1000px;

        .featured-image {
          width: 50%;
          height: auto;
        }

        .featured-content {
          width: 50%;
        }
      }

      .blog-item {
        flex-direction: row;
        max-width: 1000px;

        .blog-image {
          width: 300px;
          height: 100px;
          margin-right: 20px;
          margin-bottom: 0;
        }

        .blog-content {
          flex-grow: 1;
        }
      }
    }
  }
}
</style>

