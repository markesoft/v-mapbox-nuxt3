import { defineNuxtConfig } from "nuxt3";
import { buildModules, css, meta, publicRuntimeConfig } from "./config";
import { build } from "./config/build";
// import { buildModules, css, meta } from "./config";

export default defineNuxtConfig({
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#ssr
  ssr: true,
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#meta
  meta,
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#build
  build,
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css,
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#publicruntimeconfig
  publicRuntimeConfig,
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#buildmodules
  buildModules,
  // @TODO: Fix this once issue is resolved
  // @see: https://github.com/nuxt/framework/issues/1151#issuecomment-983531703
  alias: {
    tslib: "tslib/tslib.es6.js"
  }
});
