<script setup lang="ts">
import type { PreloaderDocumentData } from "~/prismicio-types";

const { $preloader } = useNuxtApp();
const data = $preloader as unknown as PreloaderDocumentData;
</script>

<template>
  <div class="preloader">
    <p class="preloader__text">{{ data.title }}</p>

    <div class="preloader__number">
      <div class="preloader__number__text">0%</div>
    </div>
  </div>
</template>
