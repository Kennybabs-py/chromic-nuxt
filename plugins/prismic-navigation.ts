// plugins/prismic-metadata.ts
import { defineNuxtPlugin } from "#app";
import type { NavigationDocumentData } from "~/prismicio-types";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { client } = usePrismic();

  try {
    const navigation = await client.getSingle("navigation"); // Replace with your Prismic custom type ID
    const navigationData = navigation.data as NavigationDocumentData;
    nuxtApp.provide("navigation", navigationData);
  } catch (error) {
    console.error("Failed to load navigation:", error);
    nuxtApp.provide("navigation", null);
  }
});
