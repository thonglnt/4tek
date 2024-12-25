export default defineNuxtConfig({
  modules: ["@nuxt/image"],
  image: {
    dir: "assets/images",
    inject: true,
    quality: 80,
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "~/assets/styles/global.css",
  ],
  app: {
    head: {
      title: "Test 4Tek",
      meta: [{ name: "description", content: "Test 4Tek" }],
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap",
        },
        { rel: "preload", as: "image", href: "/bg2.png" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "dns-prefetch",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "dns-prefetch",
          href: "https://fonts.googleapis.com",
        },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
