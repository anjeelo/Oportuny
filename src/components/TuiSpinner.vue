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
  gap: var(--sp-md);
  font-family: var(--font-mono);
  animation: fadeIn 0.5s ease both;
}

.spinner-char {
  font-size: 3rem;
  color: var(--accent);
  line-height: 1;
  animation: pulse-subtle 2s ease-in-out infinite;
}

.spinner-message {
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 1rem;
  text-align: center;
}

.spinner-submessage {
  color: var(--text-secondary);
  font-size: 0.85rem;
  text-align: center;
  min-height: 1.2em;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
