export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: "static",

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "Momats Fysio",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "Momats Fysio"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ],
    script: [
      {
        src:
          "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
      }
    ]
  },

  /*
   ** Global CSS
   */
  css: [
    "vue-essential-slices/src/styles/styles.scss",
    "styles/main.scss",
    "styles/custom.scss",
    "styles/tailwind.css"
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/prismic",
      {
        endpoint: "https://momatz-web.cdn.prismic.io/api/v2",
        apiOptions: {
          routes: [
            {
              type: "page",
              path: "/:uid"
            }
          ]
        }
      }
    ],
    ["nuxt-sm"]
  ],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  }
};
