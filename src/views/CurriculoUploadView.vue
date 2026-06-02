<template>
  <main class="tui-page curriculo-upload" id="main-content">
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

        <TuiBox title="ENVIE SEU CURRÍCULO ATUAL">
          <div class="upload-content">
            <div class="upload-intro">
              <p><span aria-hidden="true">&gt; </span>Vamos otimizar seu currículo para sistemas ATS.</p>
              <p><span aria-hidden="true">&gt; </span>Preencha os campos e envie seu arquivo.</p>
            </div>

            <form class="form-fields" @submit.prevent="processUpload" novalidate>
              <div class="form-group">
                <label for="fullName">NOME COMPLETO</label>
                <input
                  id="fullName"
                  type="text"
                  v-model="name"
                  placeholder="Ex: Lucas Mendes Silva"
                  required
                />
              </div>
              <div class="form-group">
                <label for="city">CIDADE</label>
                <input
                  id="city"
                  type="text"
                  v-model="city"
                  placeholder="Ex: São Paulo, SP"
                  required
                />
              </div>

              <div class="upload-area">
                <TuiUpload
                  accept=".pdf,.docx"
                  label="Arraste ou anexe o seu currículo — PDF, DOCX"
                  :maxSize="10"
                  @file-selected="onFileSelected"
                />
              </div>

              <div class="upload-info">
                <p><span aria-hidden="true">&gt; </span>Formatos aceitos: PDF, DOCX</p>
                <p><span aria-hidden="true">&gt; </span>Seu currículo será parseado e otimizado por IA</p>
              </div>

              <div class="upload-action">
                <TuiButton
                  variant="primary"
                  size="lg"
                  block
                  type="submit"
                  :disabled="!isFormValid"
                >
                  PROCESSAR CURRÍCULO
                </TuiButton>
              </div>
            </form>
          </div>
        </TuiBox>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
import TuiUpload from '../components/TuiUpload.vue'

const router = useRouter()
const name = ref('')
const city = ref('')
const file = ref(null)

const isFormValid = computed(() => {
  return name.value.trim() && city.value.trim() && file.value
})

function onFileSelected(f) {
  file.value = f
}

function processUpload() {
  if (isFormValid.value) {
    router.push('/loading')
  }
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

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 18px;
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
