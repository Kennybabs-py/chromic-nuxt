<script setup lang="ts">
import type {
  CollectionDocumentData,
  CollectionDocument,
  CollectionsDocument,
  CollectionDocumentDataProductsItem,
  HomeDocumentData,
  HomeDocumentDataGalleryItem,
} from "~/prismicio-types";

const { template } = useTemplate();
template.value = "home";

const { $home, $collections } = useNuxtApp();
const home_data = $home as unknown as HomeDocumentData;
const home_gallery = home_data.gallery as HomeDocumentDataGalleryItem[];
const collections = $collections as unknown as CollectionDocument[];

function handleIndexResolver(index: number) {
  let arr = ["One", "Two", "Three", "Four", "Five"];
  return arr[index];
}
</script>

<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__titles">
        <div
          class="home__titles__label"
          v-for="(_, index) in collections"
          :key="index"
        >
          {{ home_data.collection }}
          {{ handleIndexResolver(index) }}
        </div>

        <div
          class="home__titles__title"
          v-for="(collection, index) in collections"
          :key="index"
        >
          {{ collection.data.title }}
        </div>
      </div>

      <div class="home__gallery">
        <figure
          class="home__gallery__media"
          v-for="(media, index) in home_gallery"
        >
          <img
            class="home__gallery__media__image"
            :data-src="media.image.url"
            :alt="media.image.url"
          />
        </figure>
      </div>

      <a href="" class="home__link">
        {{ home_data.button }}
        <svg
          class="home__link__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 288 0"
        >
          <path
            stroke="currentColor"
            fill="none"
            d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z"
          />

          <path
            class="home__link__icon__path"
            stroke="#ffc400"
            fill="none"
            d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
