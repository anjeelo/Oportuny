<template>
  <main class="tui-page curriculo-upload" id="main-content">
    <div class="container">
      <div class="upload-wrapper">
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

              <div class="upload-info text-dim">
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
  max-width: 580px;
  width: 100%;
  margin: 30px auto 0;
}

.upload-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.upload-intro {
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.8;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.upload-area {
  margin: 4px 0;
}

.upload-info {
  font-size: 0.8rem;
  line-height: 1.8;
}

.upload-action {
  margin-top: 4px;
}
</style>
