<script setup lang="ts">
import type { ProducDocumentData, ProducDocument } from "~/prismicio-types";

const route = useRoute();
const { client } = usePrismic();
const uid = route.params.id as string;
const { data } = await useAsyncData(`product-${uid}`, async () => {
  return await client.getByUID("produc", uid, {
    fetchLinks: "collection.title",
  });
});

const detail = data.value as unknown as ProducDocument;
const product = detail.data as ProducDocumentData;
</script>

<template>
  <div class="detail" data-background="#bc978c" data-color="#f9f1e7">
    <div class="detail__wrapper">
      <!-- image -->
      <figure class="detail__media">
        <img
          :alt="product.image.alt"
          :data-src="product.image.url"
          class="detail__media__image"
        />
      </figure>

      <div class="detail__information">
        <p class="detail__information__collection">
          {{ product.collection.data.title }}
        </p>
        <h1 class="detail__information__title">
          {{ $prismic.asText(product.text) }}
        </h1>

        <div class="detail__information__content">
          <div class="detail__information__highlights">
            <p
              class="detail__information__highlight"
              v-for="(highlight, index) in product.highlights"
            >
              <svg
                class="detail__information__highlight__icon"
                xmlns="http://www.w3.org/2000/svg"
                v-if="index === 0"
              >
                <path
                  d="m1168.753 489.546-.66 2.357-.047 2.593-1.933-2.31-2.31-1.933 2.593-.047z"
                  fill="#fff"
                  fill-rule="evenodd"
                />
                <path
                  d="m1148.247 510.052.66-2.357.047-2.593 1.933 2.31 2.31 1.933-2.593.047z"
                  fill="#fff"
                  fill-rule="evenodd"
                />
                <path
                  d="m1152.843 505.456 11.314-11.314"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#fff"
                  fill="transparent"
                  data-name="Linea 2"
                />
              </svg>
              <svg
                class="detail__information__highlight__icon"
                xmlns="http://www.w3.org/2000/svg"
                v-else
              >
                <path
                  d="m40.755-161.195-2.759 8.592 8.718-2.634-8.154 4.14 8.154 4.265-8.718-2.822 2.822 8.906-4.265-8.342-4.14 8.154 2.634-8.718-8.592 2.759 8.154-4.202-8.342-4.328 8.78 2.822-2.822-8.781 4.328 8.342 4.202-8.153Z"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </svg>

              <span class="detail__information__highlight__text"
                >{{ highlight.highlight_text.replace(/\n/g, "<br />") }}</span
              >
            </p>
          </div>

          <div class="detail__information__list">
            <p
              class="detail__information__item"
              v-for="item in product.information"
            >
              <strong class="detail__information__item__title">{{
                item.informations_label
              }}</strong>
              <span class="detail__information__item__description">{{
                item.informations_description
              }}</span>
            </p>
          </div>

          <a
            :href="product.link_url.url"
            target="_blank"
            rel="no-referrer"
            class="detail__information__link"
            >{{ product.link_text }}</a
          >

          <a href="/collections" class="detail__button"
            >Close

            <svg
              class="detail__button__icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                fill="none"
                d="M62,0.5c33.97,0,61.5,13.21,61.5,29.5S95.97,59.5,62,59.5S0.5,46.29,0.5,30S28.03,0.5,62,0.5z"
              />

              <path
                class="detail__link__icon__path"
                stroke="#ffc400"
                fill="none"
                d="M62,0.5c33.97,0,61.5,13.21,61.5,29.5S95.97,59.5,62,59.5S0.5,46.29,0.5,30S28.03,0.5,62,0.5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
