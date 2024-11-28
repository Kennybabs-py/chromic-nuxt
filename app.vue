<script setup lang="ts">
import { Interactions } from "./interactions";
const { template } = useTemplate();
const { $assets } = useNuxtApp();

onMounted(() => {
  if (!window) return;
  window.ASSETS = $assets as unknown as string[];
  new Interactions();
});
</script>

<template>
  <Navigation />
  <Preloader />
  <div class="content" id="content" :data-template="template"><NuxtPage /></div>
</template>
