<template>
  <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
  <TuiHeader />
  <main id="main-content" tabindex="-1">
    <router-view />
  </main>
</template>

<script setup>
import TuiHeader from './components/TuiHeader.vue'
</script>

<style>
/* Global styles are imported in main.js */
#main-content {
  flex: 1;
}
</style>
