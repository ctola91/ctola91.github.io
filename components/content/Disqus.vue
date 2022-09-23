<script setup>
import { onMounted } from "vue";

onMounted(() => {
  var disqus_config = function () {
    this.page.url = window.location.origin;
    this.page.identifier = window.location.pathname;
  };
  (function () {
    var d = window.document,
      s = d.createElement("script");
    s.src = "https://christiantola.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
});
</script>
<template>
  <div id="disqus_thread"></div>
</template>
<style scoped>
div#disqus_thread {
  margin-top: 15px;
}
</style>
