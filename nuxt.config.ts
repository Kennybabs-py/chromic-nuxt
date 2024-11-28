import { repositoryName } from "./slicemachine.config.json";
import glsl from "vite-plugin-glsl";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  vite: {
    plugins: [glsl()],
    optimizeDeps: {
      // include: ["prefix"],
    },
  },
  build: {
    // transpile: ["prefix"],
  },
  runtimeConfig: {},
  css: ["@/styles/index.scss"],
  modules: ["@nuxtjs/prismic"],
  plugins: [
    "@/plugins/chromic-assets.ts",
    "@/plugins/prismic-navigation.ts",
    "@/plugins/prismic-metadata.ts",
    "@/plugins/prismic-preloader.ts",
    "@/plugins/prismic-home.ts",
    "@/plugins/prismic-collections.ts",
  ],
  prismic: {
    endpoint: repositoryName,
    clientConfig: {
      accessToken:
        "MC5aVTAzTmhJQUFDSUFpY2dO.QSR8VHZFLu-_vSPvv73vv73vv73vv71RcWkS77-977-977-9TRs477-977-977-977-977-9YHHvv710",
      // routes: [
      //   {
      //     type: "page",
      //     uid: "home",
      //     path: "/",
      //   },
      // ],
    },
  },
});
