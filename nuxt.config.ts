// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/kinde",
    "@vueuse/nuxt",
    "radix-vue/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Merriweather: true,
      "Noto Naskh Arabic": true,
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
  },
});
