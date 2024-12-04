<script lang="ts" setup>
import type { CollectionDocument, HomeDocumentData } from "~/prismicio-types";
import { handleIndexResolver } from "~/helpers";

const { $home, $collections, $about } = useNuxtApp();
const home_data = $home as unknown as HomeDocumentData;
const collections = $collections as unknown as CollectionDocument[];
</script>

<template>
  <div class="collections" data-background="#bc978c" data-color="#f9f1e7">
    <div class="collections__wrapper">
      <div class="collections__titles">
        <template v-for="(collection, index) in collections" :key="index">
          <div class="collections__titles__label">
            {{ home_data.collection }}
            {{ handleIndexResolver(index) }}
          </div>
          <div class="collections__titles__title">
            {{ collection.data.title }}
          </div>
        </template>
      </div>

      <div class="collections__gallery">
        <div class="collections__gallery__wrapper">
          <template href="" v-for="(collection, index) in collections">
            <a
              :href="`/detail/${product.products_product.slug}`"
              class="collections__gallery__link"
              v-for="product in collection.data.products"
            >
              <figure
                class="collections__gallery__media"
                :data-collection-index="index"
              >
                <img
                  :data-src="product.products_product.data.image.url"
                  :alt="product.products_product.data.image.alt"
                  class="collections__gallery__media__image"
                />
              </figure> </a
          ></template>
        </div>
      </div>

      <div class="collections__content">
        <article
          class="collections__article"
          :class="index === 0 ? 'collections__article--active' : ''"
          v-for="(collection, index) in collections"
          :key="index"
        >
          <h2 class="collections__article__title">
            {{ collection.data.title }}
            {{ home_data.collection }}
          </h2>
          <p class="collections__article__description">
            {{ collection.data.description }}
          </p>
        </article>
      </div>

      <div class="collections__mobile">
        <div
          class="collections__mobile__item"
          :class="index === 0 ? 'collections__article--active' : ''"
          v-for="(collection, index) in collections"
          :key="index"
        >
          <div class="collections__mobile__item__label">
            {{ collection.data.title }}
            {{ home_data.collection }}
          </div>
          <div class="collections__mobile__item__title">
            >
            {{ collection.data.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
