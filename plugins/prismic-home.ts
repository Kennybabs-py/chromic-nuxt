// plugins/prismic-metadata.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { client } = usePrismic();
  try {
    const home = await client.getSingle("home");
    nuxtApp.provide("home", home.data);
  } catch (error) {
    console.error("Failed to load home:", error);
    nuxtApp.provide("home", null);
  }
});
