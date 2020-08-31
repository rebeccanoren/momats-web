<template>
  <section class="section">
    <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.title" />
    <iframe
      src="https://demo.kaddio.com/iframe/booking"
      style="border: 0"
      width="1000"
      height="800"
      frameborder="0"
      scrolling="yes"
    ></iframe>
  </section>
</template>
<script>
export default {
  props: ["slice"],
  computed: {
    endpoint() {
      return this.$prismic && this.$prismic.apiEndpoint
        ? this.$prismic.apiEndpoint
            .split("/")
            .slice(0, -2)
            .join("/")
            .replace("cdn.", "")
        : null;
    },
  },
};
</script>
<style scoped>
.section {
  position: relative;
  background: #fcfbfb;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
</style>

