<template>
  <div>
    <div class="hidden lg:block">
      <Nav :menu_title="config.menu_title" :nav_item="config.nav" />
    </div>

    <div class="sm:block lg:hidden">
      <NavMobile :menu_title="config.menu_title" :nav_item="config.nav" />
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import NavMobile from "~/components/NavMobile";
import Footer from "~/components/Footer.vue";
import NuxtSSRScreenSize from "nuxt-ssr-screen-size";

export default {
  data: () => {
    return {
      mobileView: false,
      showNav: false
    };
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  methods: {
    handleView() {
      this.mobileView = this.$vssWidth <= 900;
      // console.log(this.$vssWidth);
      // console.log(this.mobileView);
    }
  },
  name: "default",
  data: function() {
    return {
      config: {}
    };
  },
  components: {
    Nav,
    Footer
  },
  created() {
    this.handleView();
  },
  async fetch() {
    const config = (await this.$prismic.api.getSingle("menu")).data;
    this.config = config;
  }
};
</script>

<style>
html {
  font-family: "Kumbh Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neuce", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 0.5px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: "Roboto sans", sans-serif;
  font-weight: 700;
}

p {
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
}

li {
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
