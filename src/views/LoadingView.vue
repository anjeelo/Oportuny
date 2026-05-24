<template>
  <main class="tui-page loading-view animate-fade-in" id="main-content">
    <div class="scanline-overlay" aria-hidden="true"></div>
    <div class="loading-center">
      <TuiSpinner
        message="Aguarde enquanto nossa IA otimiza seu currículo..."
        :submessage="currentStep"
      />

      <div class="loading-progress" aria-hidden="true">
        <div class="progress-bar">
          <span class="progress-fill" :style="{ color: progressColor }">{{ '█'.repeat(progressBlocks) }}</span>
          <span class="progress-empty">{{ '░'.repeat(10 - progressBlocks) }}</span>
        </div>
        <span class="progress-pct" :style="{ color: progressColor }">{{ progressPct }}%</span>
      </div>

      <!-- Progress for screen readers -->
      <div class="sr-only" role="progressbar" :aria-valuenow="progressPct" aria-valuemin="0" aria-valuemax="100">
        Progresso do processamento: {{ progressPct }}%
      </div>

      <div class="loading-log" aria-hidden="true">
        <div v-for="(log, i) in logs" :key="i" class="log-line">&gt; {{ log }}</div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import TuiSpinner from '../components/TuiSpinner.vue'

const router = useRouter()

const steps = [
  'Analisando documento...',
  'Extraindo informações...',
  'Identificando habilidades...',
  'Otimizando para ATS...',
  'Buscando vagas compatíveis...',
  'Quase pronto...',
]

const currentStepIndex = ref(0)
const currentStep = ref(steps[0])
const logs = ref([])
const progressPct = ref(0)

const progressBlocks = computed(() => Math.round(progressPct.value / 10))

const progressColor = computed(() => {
  if (progressPct.value < 40) return 'var(--primary)'
  if (progressPct.value <= 70) return 'var(--warm)'
  return 'var(--accent)'
})

let stepInterval = null
let progressInterval = null
let timeout = null

onMounted(() => {
  stepInterval = setInterval(() => {
    if (currentStepIndex.value < steps.length - 1) {
      logs.value.push(steps[currentStepIndex.value] + ' OK')
      currentStepIndex.value++
      currentStep.value = steps[currentStepIndex.value]
    }
  }, 1000)

  progressInterval = setInterval(() => {
    if (progressPct.value < 100) {
      progressPct.value = Math.min(100, progressPct.value + 2)
    }
  }, 100)

  timeout = setTimeout(() => {
    router.push('/resultado')
  }, 6000)
})

onUnmounted(() => {
  if (stepInterval) clearInterval(stepInterval)
  if (progressInterval) clearInterval(progressInterval)
  if (timeout) clearTimeout(timeout)
})
</script>

<style scoped>
.loading-view {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Subtle scanline overlay */
.scanline-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.01) 2px,
    rgba(255, 255, 255, 0.01) 4px
  );
  z-index: 1;
}

.loading-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 500px;
  padding: 0 var(--sp-lg);
  position: relative;
  z-index: 2;
}

.loading-progress {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  font-family: var(--font-mono);
}

.progress-fill {
  transition: color 0.3s var(--ease-out, ease-out);
}

.progress-empty {
  color: var(--text-muted);
  opacity: 0.3;
}

.progress-pct {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  min-width: 40px;
  transition: color 0.3s var(--ease-out, ease-out);
}

.loading-log {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.8;
  text-align: left;
  width: 100%;
}

.log-line {
  animation: slideUp 0.3s var(--ease-out, ease-out) both;
}

/* Animation: fade in whole view */
.animate-fade-in {
  animation: fadeIn var(--duration-normal, 0.4s) var(--ease-out, ease-out) both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
