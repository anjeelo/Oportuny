<template>
  <main class="tui-page boletim-upload" id="main-content">
    <div class="container">
      <div class="upload-wrapper animate-fade-in-up">
        <div class="step-indicator" aria-label="Progresso: Etapa 1 de 3">
          <div class="step active">
            <span class="step-num">1</span>
            <span class="step-label">Upload</span>
          </div>
          <div class="step-connector"></div>
          <div class="step">
            <span class="step-num">2</span>
            <span class="step-label">Processamento</span>
          </div>
          <div class="step-connector"></div>
          <div class="step">
            <span class="step-num">3</span>
            <span class="step-label">Resultado</span>
          </div>
        </div>

        <TuiBox title="ENVIE SEU BOLETIM ACADÊMICO">
          <div class="upload-content">
            <div class="upload-intro">
              <p><span aria-hidden="true">&gt; </span>Vamos analisar suas disciplinas e notas para montar</p>
              <p><span aria-hidden="true">&gt; </span>seu currículo automaticamente com IA.</p>
            </div>

            <div class="upload-area">
              <TuiUpload
                accept=".pdf,.jpg,.jpeg,.png"
                label="Anexe seu boletim acadêmico"
                :maxSize="10"
                @file-selected="onFileSelected"
              />
            </div>

            <div class="upload-info">
              <p><span aria-hidden="true">&gt; </span>Formatos aceitos: PDF, JPG, PNG</p>
              <p><span aria-hidden="true">&gt; </span>O boletim será processado pelo nosso agente de IA</p>
              <p><span aria-hidden="true">&gt; </span>Nenhum dado é compartilhado com terceiros</p>
            </div>

            <div class="upload-action">
              <TuiButton
                variant="primary"
                size="lg"
                block
                :disabled="!file"
                @click="processUpload"
              >
                PROCESSAR BOLETIM
              </TuiButton>
            </div>
          </div>
        </TuiBox>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
import TuiUpload from '../components/TuiUpload.vue'

const router = useRouter()
const file = ref(null)

function onFileSelected(f) {
  file.value = f
}

function processUpload() {
  router.push('/loading')
}
</script>

<style scoped>
.upload-wrapper {
  max-width: 620px;
  width: 100%;
  margin: var(--sp-lg) auto 0;
}

/* Step Indicator */
.step-indicator {
  display: flex;
  align-items: center;
  margin-bottom: var(--sp-lg);
  padding: 0 var(--sp-sm);
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-xs);
}

.step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
}

.step-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.step.active .step-num {
  border-color: var(--accent);
  color: var(--accent);
  font-weight: 700;
}

.step.active .step-label {
  color: var(--accent);
}

.step-connector {
  flex: 1;
  height: 2px;
  background: var(--border);
  margin: 0 var(--sp-sm);
  margin-bottom: var(--sp-lg);
}

/* Upload Content */
.upload-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.upload-intro {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.8;
}

.upload-area {
  margin: var(--sp-xs) 0;
}

.upload-info {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-body);
  line-height: 1.8;
}

.upload-action {
  margin-top: var(--sp-xs);
}

/* Animation */
.animate-fade-in-up {
  animation: fadeInUp var(--duration-normal, 0.4s) var(--ease-out, ease-out) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
