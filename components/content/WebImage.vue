<script setup>
import { ComponentObjectPropsOptions, defineProps } from "vue";

interface Props {
  image: string;
  authorLink: string;
  authorName: string;
  siteLink: string;
  siteName: string;
}

const props =
  defineProps <
  ComponentObjectPropsOptions <
  Props >>
    {
      image: string,
      authorLink: string,
      authorName: string,
      siteLink: string,
      siteName: string,
    };
const { path } = useRoute();
const url = window.location.href;
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  let article = queryContent().where({ _path: path }).findOne();

  return {
    article: await article,
  };
});
</script>
<template>
  <figure class="img-cont h-72 mb-12">
    <img
      :src="`/${data.article.img}`"
      :alt="data.article.title"
      class="rounded-2xl"
    />
    <figcaption>
      Photo by
      <a :href="props.authorLink">{{ props.authorName }}</a>
      on
      <a :href="props.siteLink">{{ props.siteName }}</a>
    </figcaption>
  </figure>
</template>
