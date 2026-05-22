<template>
  <div class="tui-page curriculo-upload">
    <div class="container">
      <div class="upload-wrapper">
        <TuiBox title="ENVIE SEU CURRÍCULO ATUAL">
          <div class="upload-content">
            <p class="upload-intro">
              &gt; Vamos otimizar seu currículo para sistemas ATS.<br>
              &gt; Preencha os campos e envie seu arquivo.
            </p>

            <div class="form-fields">
              <div class="form-group">
                <label for="fullName">NOME COMPLETO</label>
                <input
                  id="fullName"
                  type="text"
                  v-model="name"
                  placeholder="Ex: Lucas Mendes Silva"
                />
              </div>
              <div class="form-group">
                <label for="city">CIDADE</label>
                <input
                  id="city"
                  type="text"
                  v-model="city"
                  placeholder="Ex: São Paulo, SP"
                />
              </div>
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
              <p>&gt; Formatos aceitos: PDF, DOCX</p>
              <p>&gt; Seu currículo será parseado e otimizado por IA</p>
            </div>

            <div class="upload-action">
              <TuiButton
                variant="primary"
                size="lg"
                block
                :disabled="!isFormValid"
                @click="processUpload"
              >
                PROCESSAR CURRÍCULO
              </TuiButton>
            </div>
          </div>
        </TuiBox>
      </div>
    </div>
  </div>
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
  router.push('/loading')
}
</script>

<style scoped>
.upload-wrapper {
  max-width: 580px;
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

.form-group label {
  display: block;
  color: var(--text-dim);
  font-size: 0.8rem;
  margin-bottom: 6px;
  letter-spacing: 0.08em;
}

.form-group input {
  width: 100%;
  font-family: var(--font-mono);
  font-size: 1rem;
  background: var(--bg-input);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.15s;
}

.form-group input:focus {
  border-color: var(--green);
}

.form-group input::placeholder {
  color: var(--text-dim);
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
