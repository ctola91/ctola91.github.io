<script setup language="ts">

const props = defineProps({
  image: String,
  alt: String,
  authorLink: String,
  authorName: String,
  siteLink: String,
  siteName: String,
});
</script>
<template>
  <figure class="img-cont h-72 mb-12">
    <img :src="props.image" :alt="props.alt" class="rounded-2xl" />
    <figcaption>
      Photo by
      <a :href="props.authorLink">{{ props.authorName }}</a>
      on
      <a :href="props.siteLink">{{ props.siteName }}</a>
    </figcaption>
  </figure>
</template>
