// plugins/prismic-metadata.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { client } = usePrismic();
  try {
    const collections = await client.getAllByType("collection", {
      fetchLinks: "produc.image",
    });
    nuxtApp.provide("collections", collections);
  } catch (error) {
    console.error("Failed to load collections:", error);
    nuxtApp.provide("collections", null);
  }
});
