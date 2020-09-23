<template>
  <div class="flex flex-wrap py-5 bg-grey">
    <div class="w-full px-1">
      <nav
        class="relative flex flex-wrap items-center justify-between navbar-expand-lg"
      >
        <div class="container px-4 mx-auto flex flex-wrap justify-between">
          <div
            class="w-full relative flex justify-between lg:w-auto px-1 lg:static lg:block lg:justify-start"
          >
            <button @click="showMenu = false">
              <nuxt-link to="/">
                <h4>{{ $prismic.asText(menu_title) }}</h4>
              </nuxt-link>
            </button>
            <button
              @click="menu()"
              class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span class="block relative w-6 h-px rounded-sm bg-black"></span>
              <span
                class="block relative w-6 h-px rounded-sm bg-black mt-1"
              ></span>
              <span
                class="block relative w-6 h-px rounded-sm bg-black mt-1"
              ></span>
            </button>
          </div>
          <div
            class="flex lg:flex-grow items-center mobile-menu"
            :style="{ display: showMenu ? 'block' : 'none' }"
          >
            <ul
              class="flex flex-col lg:flex-row list-none ml-auto lg:invisible"
            >
              <!-- <DropdownMenu /> -->

              <h1 class="px-3 mb-3">Våra tjänster</h1>
              <li @click="menu()">
                <nuxt-link
                  class="text-grey inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3"
                  to="/formthotics"
                  >Formthotics</nuxt-link
                >
              </li>
              <li @click="menu()">
                <nuxt-link
                  class="text-grey inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3 mb-5"
                  to="/lopcoachning"
                  >Löpcoachning</nuxt-link
                >
              </li>

              <li
                @click="menu()"
                class="mr-3"
                v-for="link in nav_item"
                v-bind:key="link.id"
              >
                <prismic-link
                  class="text-grey inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3"
                  :field="link.primary.link"
                  >{{ $prismic.asText(link.primary.label) }}</prismic-link
                >
              </li>
            </ul>
          </div>

          <div class="flex lg:flex-grow items-center invisible lg:visible">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <DropdownMenu />

              <li class="mr-3" v-for="link in nav_item" v-bind:key="link.id">
                <prismic-link
                  class="text-grey inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3"
                  :field="link.primary.link"
                  >{{ $prismic.asText(link.primary.label) }}</prismic-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "Nav",
  props: {
    nav_item: Array,
    menu_title: Array
  },
  data() {
    return {
      routeChange: false,
      showMenu: false
    };
  },

  watch: {
    $route() {
      this.routeChange = true;
      this.showMenu = true;
    }
  },

  methods: {
    menu() {
      if (this.showMenu) {
        this.showMenu = false;
        document.querySelector("body").style.overflow = "scroll";
      } else {
        this.showMenu = true;
        document.querySelector("body").style.overflow = "hidden";
      }
    }
  }
};
</script>

<style lang="sass">
.bg-grey
  background-color: #FCFBFB

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

@media only screen and (max-width: 1024px)
  .mobile-menu
    width: 100%
    height: 100vh
    z-index: 1
    position: fixed
    top: 40px;
    left: 0
    background-color: #fcfbfb
    padding: 0

    h1
      font-weight: 400
      font-size: 20px;
      color: grey;

    ul
      padding-top: 80px;
      padding-left: 60px;
    li
      font-size: 28px;
      margin: 8px 0 8px;
</style>
