<template>
  <div>
    <div id="share-buttons">
      <!-- Facebook -->
      <a
        class="facebook"
        :href="'http://www.facebook.com/sharer.php?u=' + url"
        onclick="window.open(this.href, 'twitter-share','width=580,height=296');return false;"
      >
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>

      <!-- Twitter -->
      <a
        class="twitter"
        :href="
          'https://twitter.com/share?url=' +
          url +
          '&amp;text=' +
          this.$page.title
        "
        onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
      >
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>

      <!-- LinkedIn -->
      <a
        class="linkedin"
        :href="'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url"
        onclick="window.open(this.href, 'linkedin-share','width=580,height=296');return false;"
      >
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>

      <!-- Google+ -->
      <a
        class="google"
        :href="'https://plus.google.com/share?url=' + url"
        onclick="window.open(this.href, 'googleplus-share','width=580,height=296');return false;"
      >
        <i class="fa fa-google" aria-hidden="true"></i>
      </a>

      <!-- Reddit -->
      <a
        class="reddit"
        :href="
          'http://reddit.com/submit?url=' +
          url +
          '&amp;title=' +
          this.$page.title
        "
        onclick="window.open(this.href, 'reddit-share','width=580,height=296');return false;"
      >
        <i class="fa fa-reddit-alien" aria-hidden="true"></i>
      </a>

      <!-- Email -->
      <a
        class="email"
        :href="
          'mailto:?Subject=' +
          this.$page.title +
          '&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ' +
          url
        "
      >
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>

      <!-- Print -->
      <a href="javascript:;" onclick="window.print()" class="print">
        <i class="fa fa-print" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      localPath: String,
    };
  },
  mounted() {
    this.localPath = window.location.href;
  },
  computed: {
    url: function () {
      return this.localPath;
    },
  },
};
</script>
<style scoped>
#share-buttons {
  margin-top: 10px;
  display: flex;
  flex-flow: wrap;
}
#share-buttons a {
  padding: 10px;
  width: 20px;
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
