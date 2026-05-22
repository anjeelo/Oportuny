<template>
  <div class="tui-spinner" role="status" aria-live="polite">
    <div class="spinner-char" aria-hidden="true">{{ spinnerChars[currentFrame] }}</div>
    <div class="spinner-message">{{ message }}</div>
    <div class="spinner-submessage" v-if="submessage">{{ submessage }}</div>
    <span class="sr-only">Carregando...</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  message: { type: String, default: 'Processando...' },
  submessage: { type: String, default: '' },
})

const spinnerChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
const currentFrame = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentFrame.value = (currentFrame.value + 1) % spinnerChars.length
  }, 80)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.tui-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: var(--font-mono);
}

.spinner-char {
  font-size: 2.5rem;
  color: var(--green);
  line-height: 1;
}

.spinner-message {
  color: var(--text);
  font-size: 1rem;
  text-align: center;
}

.spinner-submessage {
  color: var(--text-dim);
  font-size: 0.85rem;
  text-align: center;
  min-height: 1.2em;
}
</style>
