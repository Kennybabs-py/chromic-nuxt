// plugins/prismic-metadata.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { client } = usePrismic();
  try {
    const metadata = await client.getSingle("metadata");
    nuxtApp.provide("metadata", metadata.data);
  } catch (error) {
    console.error("Failed to load metadata:", error);
    nuxtApp.provide("metadata", null);
  }
});
