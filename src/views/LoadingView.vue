<template>
  <main class="tui-page loading-view" id="main-content">
    <div class="loading-center">
      <TuiSpinner
        message="Aguarde enquanto nossa IA otimiza seu currículo..."
        :submessage="currentStep"
      />
      <div class="loading-progress" aria-hidden="true">
        <div class="progress-bar">
          <span class="progress-fill">{{ '█'.repeat(progressBlocks) }}</span>
          <span class="progress-empty">{{ '░'.repeat(10 - progressBlocks) }}</span>
        </div>
        <span class="progress-pct">{{ progressPct }}%</span>
      </div>
      
      <!-- Progress for screen readers -->
      <div class="sr-only" role="progressbar" :aria-valuenow="progressPct" aria-valuemin="0" aria-valuemax="100">
        Progresso do processamento: {{ progressPct }}%
      </div>

      <div class="loading-log text-dim" aria-hidden="true">
        <div v-for="(log, i) in logs" :key="i">&gt; {{ log }}</div>
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
}

.loading-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  max-width: 500px;
  padding: 0 20px;
}

.loading-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
}

.progress-fill {
  color: var(--green);
}

.progress-empty {
  color: var(--text-dim);
  opacity: 0.3;
}

.progress-pct {
  color: var(--green);
  font-size: 0.9rem;
  min-width: 40px;
}

.loading-log {
  font-size: 0.8rem;
  line-height: 1.8;
  text-align: left;
  width: 100%;
}
</style>
