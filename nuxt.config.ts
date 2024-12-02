export default defineNuxtConfig({
  extends: ["@bloggrify/core", "@bloggrify/mistral"],

  modules: ["nuxt-umami"],
  umami: {
    id: "a6295092-8b12-42b8-ab4c-de684673248d",
    host: "https://umami.fiddl.animus.is",
    autoTrack: true,
    ignoreLocalhost: true,
  },
  app: {
    baseURL: "/blog/",
  },
})
