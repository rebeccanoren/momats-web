<template>
  <section class="bookAppointment">
    <iframe
      src="https://momatsfysio.kaddio.com/iframe/booking"
      style="border: 0"
      width="100%"
      height="800px"
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
    }
  }
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
