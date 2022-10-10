<script setup>
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
  <client-only placeholder="Loading...">
    <div id="share-buttons">
      <!-- Facebook -->
      <a
        class="facebook"
        :href="
          'http://www.facebook.com/sharer.php?u=' + url + data.article._path
        "
        onclick="window.open(this.href, 'twitter-share','width=580,height=296');return false;"
      >
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
      </a>

      <!-- Twitter -->
      <a
        class="twitter"
        :href="
          'https://twitter.com/share?url + data.article._path=' +
          url +
          data.article._path +
          '&amp;text=' +
          data.article.title
        "
        onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
      >
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </a>

      <!-- LinkedIn -->
      <a
        class="linkedin"
        :href="
          'http://www.linkedin.com/shareArticle?mini=true&amp;url + data.article._path=' +
          url +
          data.article._path
        "
        onclick="window.open(this.href, 'linkedin-share','width=580,height=296');return false;"
      >
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </a>

      <!-- Google+ -->
      <!-- <a
        class="google"
        :href="
          'https://plus.google.com/share?url + data.article._path=' +
          url + data.article._path
        "
        onclick="window.open(this.href, 'googleplus-share','width=580,height=296');return false;"
      >
        <font-awesome-icon icon="fa-brands fa-google-plus-g" />
      </a> -->

      <!-- Reddit -->
      <a
        class="reddit"
        :href="
          'http://reddit.com/submit?url + data.article._path=' +
          url +
          data.article._path +
          '&amp;title=' +
          data.article.title
        "
        onclick="window.open(this.href, 'reddit-share','width=580,height=296');return false;"
      >
        <font-awesome-icon icon="fa-brands fa-reddit-alien" />
      </a>

      <!-- Email -->
      <a
        class="email"
        :href="
          'mailto:?Subject=' +
          data.article.title +
          '&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ' +
          url +
          data.article._path
        "
      >
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </a>

      <!-- Print -->
      <a href="javascript:;" onclick="window.print()" class="print">
        <font-awesome-icon icon="fa-solid fa-print" />
      </a>
    </div>
  </client-only>
</template>
<style scoped>
#share-buttons {
  margin-top: 10px;
  display: flex;
  flex-flow: wrap;
}
#share-buttons a {
  padding: 10px;
  width: 45px;
  border: 0;
  text-align: center;
  color: #ffffff;
}
.facebook {
  background: #3b5998;
}
.twitter {
  background: #55acee;
}
.linkedin {
  background: #4875b4;
}
.reddit {
  background: #ff4500;
}
.google {
  background: #d94734;
}
.email {
  background: grey;
}
.print {
  background: grey;
}
</style>
