<template>
  <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
  <TuiHeader />
  <main id="main-content" tabindex="-1">
    <router-view />
  </main>
</template>

<script setup>
import { watchEffect } from 'vue'
import TuiHeader from './components/TuiHeader.vue'
import { isLargeFont, isHighContrast } from './stores/accessibility'

watchEffect(() => {
  if (isLargeFont.value) {
    document.documentElement.classList.add('large-font')
  } else {
    document.documentElement.classList.remove('large-font')
  }
  
  if (isHighContrast.value) {
    document.documentElement.classList.add('high-contrast')
  } else {
    document.documentElement.classList.remove('high-contrast')
  }
})
</script>

<style>
/* Global styles are imported in main.js */
#main-content {
  flex: 1;
}
</style>
