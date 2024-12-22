export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    '~/assets/styles/global.css',
  ],
  app: {
    head: {
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
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
