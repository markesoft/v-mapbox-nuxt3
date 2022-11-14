const publicRuntimeConfig = {
  appVersion: process.env.npm_package_version
};

const css = ["mapbox-gl/dist/mapbox-gl.css", "v-mapbox/dist/v-mapbox.css"];

const plugins = [];

const buildModules = [
  // https://windicss.org/guide/
  "nuxt-windicss",
  // https://vueuse.org/guide/#nuxt
  "@vueuse/nuxt"
];

export { meta } from "./meta";
export { buildModules, css, plugins, publicRuntimeConfig };
