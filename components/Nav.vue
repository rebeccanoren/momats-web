<template>
  <nav class="site-header">
    <nuxt-link to="/">
      <h4>{{ $prismic.asText(menu_title) }}</h4>
    </nuxt-link>
    <ul class="menu" style="list-style-type: none;">
      <li v-for="link in menu_links" v-bind:key="link.id">
        <prismic-link :field="link.link">{{ $prismic.asText(link.label) }}</prismic-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  props: {
    menu_links: Array,
    menu_title: Array,
  },
};
</script>

<style lang="sass">
.site-header
  max-width: 1200px
  margin: 0 auto
  padding: 20px 60px
  color: #484d52
  font-weight: 700
  display: flex
  justify-content: space-between

  ul
    display: flex

  li
    margin-left: 20px

  a
    color: #484d52
    font-weight: 700
  nav a:hover
    color: #72767B

.site-header
  .logo
    display: inline-block
    font-size: 22px
    font-weight: 900

  nav
    float: right

    ul
      margin: 0
      padding-left: 0

    li
      display: inline-block
      margin-left: 40px
      list-style-type: none

@media (max-width: 1060px)
  .site-header
    padding-left: 20px
    padding-right: 20px

@media (max-width: 767px)
  .site-header
    height: auto

  .homepage .site-header
    position: absolute
    left: 0
    right: 0

  .site-header
    .logo
      display: block
      text-align: center
    nav
      float: none
      text-align: center
      li
        display: inline-block
        margin-left: 10px
        margin-right: 10px
</style>


