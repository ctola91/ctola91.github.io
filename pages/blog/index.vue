<!-- ./pages/blog/index.vue -->

<script setup>
definePageMeta({
  layout: "custom",
  key: (route) => route.fullPath,
});
// get tag query
const {
  query: { tags },
} = useRoute();
const filter = ref(tags?.split(","));
// set meta for page
useHead({
  title: "Mi Blog",
  meta: [{ name: "description", content: "Lee sobre Programación" }],
});
</script>
<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">Mi Blog</h1>
        <p class="font-medium text-lg">Lee mis articulo</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          sort: { date: -1 },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="article-list">
            <li
              v-for="article in list"
              :key="article._path"
              class="article-item"
            >
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-32 shrink-0">
                    <img
                      :src="`/${article.img}`"
                      :alt="article.title"
                      class="rounded-lg max-h-[8rem]"
                    />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags">
                      <li
                        class="tag !py-0.5"
                        v-for="(tag, n) in article.tags"
                        :key="n"
                      >
                        {{ tag }}
                      </li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>
        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>
