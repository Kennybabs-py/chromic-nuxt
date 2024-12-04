<script lang="ts" setup>
import type { AboutDocumentData } from "~/prismicio-types";

const { $about } = useNuxtApp();

const about = $about as unknown as AboutDocumentData;
const about_gallery = about.gallery;
const about_body = about.body;
</script>

<template>
  <div class="about" data-background="#b2b8c3" data-color="#37384c">
    <div class="about__wrapper">
      <section class="about__gallery">
        <div class="about__gallery__wrapper">
          <figure class="about__gallery__media" v-for="media in about_gallery">
            <img
              :data-src="media.image.url"
              :alt="media.image.alt"
              class="about__gallery__media__image"
            />
          </figure>
        </div>
      </section>

      <!-- about body -->
      <template v-for="section in about_body">
        <h2
          v-if="section.slice_type === 'title'"
          class="about__title"
          data-animation="title"
        >
          {{ section.primary.text }}
        </h2>

        <!-- content -->
        <section
          class="about__content"
          v-if="section.slice_type === 'content'"
          :class="
            section.primary.type === 'Left'
              ? 'about__content--left'
              : 'about__content--right'
          "
        >
          <div class="about__content__wrapper">
            <div class="about__content__box">
              <p class="about__content__label" data-animation="label">
                {{ section.primary.label }}
              </p>

              <prismic-rich-text
                :field="section.primary.description"
                class="about__content__description"
                data-animation="paragraph"
              />
            </div>

            <figure class="about__content__media">
              <img
                class="about__content__media__image"
                :alt="section.primary.image.alt"
                :data-src="section.primary.image.url"
              />
            </figure>
          </div>
        </section>

        <!-- hightlight -->
        <section
          class="about__highlight"
          v-if="section.slice_type === 'highlight'"
        >
          <div class="about__highlight__wrapper">
            <p
              v-if="section.primary.label"
              class="about__highlight__label"
              data-animation="label"
            >
              {{ section.primary.label }}
            </p>
            <h3 class="about__highlight__title" data-animation="highlight">
              {{ section.primary.title1 }}
            </h3>

            <div class="about__highlight__medias">
              <figure
                class="about__highlight__media"
                v-for="media in section.items"
              >
                <img
                  class="about__highlight__media__image"
                  :alt="media.image.alt"
                  :data-src="media.image.url"
                />
              </figure>
            </div>
          </div>
        </section>

        <!-- gallery -->
        <section v-if="section.slice_type === 'gallery'" class="about__gallery">
          <div class="about__gallery__wrapper">
            <figure
              class="about__gallery__media"
              v-for="media in section.items"
            >
              <img
                :data-src="media.image.url"
                :alt="media.image.alt"
                class="about__gallery__media__image"
              />
            </figure>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>
