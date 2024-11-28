// plugins/chromic-assets.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { client } = usePrismic();
  try {
    const meta = await client.getSingle("metadata");
    const navigation = await client.getSingle("navigation");
    const preloader = await client.getSingle("preloader");
    const home = await client.getSingle("home");
    const collections = await client.getAllByType("collection", {
      fetchLinks: "produc.image",
    });
    const about = await client.getSingle("about");

    let assets: string[] = [];
    home.data.gallery.forEach((item: any) => {
      assets.push(item.image.url);
    });
    about.data.gallery.forEach((item: any) => {
      assets.push(item.image.url);
    });

    about.data.body.forEach((section: any) => {
      if (section.slice_type === "gallery") {
        section.items.forEach((item: any) => {
          assets.push(item.image.url);
        });
      }
    });

    collections.forEach((collection) => {
      collection.data.products.forEach((product: any) => {
        assets.push(product.products_product.data.image.url);
      });
    });

    nuxtApp.provide("assets", assets);
  } catch (error) {
    console.error("Failed to load collections:", error);
    nuxtApp.provide("collections", null);
  }
});
