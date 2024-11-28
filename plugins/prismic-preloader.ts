// plugins/prismic-metadata.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { client } = usePrismic();
  try {
    const preloader = await client.getSingle("preloader");
    nuxtApp.provide("preloader", preloader.data);
  } catch (error) {
    console.error("Failed to load preloader:", error);
    nuxtApp.provide("preloader", null);
  }
});
