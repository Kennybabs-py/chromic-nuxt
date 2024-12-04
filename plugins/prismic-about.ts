// plugins/prismic-metadata.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { client } = usePrismic();
  try {
    const about = await client.getSingle("about");
    nuxtApp.provide("about", about.data);
  } catch (error) {
    console.error("Failed to load about:", error);
    nuxtApp.provide("about", null);
  }
});
