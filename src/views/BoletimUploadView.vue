<template>
  <div class="tui-page boletim-upload">
    <div class="container">
      <div class="upload-wrapper">
        <TuiBox title="ENVIE SEU BOLETIM ACADÊMICO">
          <div class="upload-content">
            <p class="upload-intro">
              &gt; Vamos analisar suas disciplinas e notas para montar<br>
              &gt; seu currículo automaticamente com IA.
            </p>

            <div class="upload-area">
              <TuiUpload
                accept=".pdf,.jpg,.jpeg,.png"
                label="Anexe seu boletim acadêmico"
                :maxSize="10"
                @file-selected="onFileSelected"
              />
            </div>

            <div class="upload-info text-dim">
              <p>&gt; Formatos aceitos: PDF, JPG, PNG</p>
              <p>&gt; O boletim será processado pelo nosso agente de IA</p>
              <p>&gt; Nenhum dado é compartilhado com terceiros</p>
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
  </div>
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
