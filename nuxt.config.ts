// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/kinde",
    "@vueuse/nuxt",
    "radix-vue/nuxt",
    "@nuxt/image",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // modules: ["radix-vue", "@vueuse/nuxt"],
});
