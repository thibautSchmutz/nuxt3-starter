import { defineNuxtConfig } from "nuxt";
import { resolve } from "path";

export default defineNuxtConfig({
  head: {
    titleTemplate: "%s - Nuxt",
  },
  typescript: {
    strict: true,
  },
  buildModules: ["@pinia/nuxt", "nuxt-windicss"],
  modules: ["nuxt-windicss"],
  css: ["virtual:windi.css", "virtual:windi-devtools"],
  windicss: {
    analyze: true,
  },
  alias: {
    assets: resolve(__dirname, "./assets"),
    layouts: resolve(__dirname, "./layouts"),
    middleware: resolve(__dirname, "./middleware"),
    pages: resolve(__dirname, "./pages"),
    store: resolve(__dirname, "./store"),
    plugins: resolve(__dirname, "./plugins"),
  },
});
