<template>
  <div class="tui-page resultado">
    <div class="container">
      <div class="resultado-header">
        <h1 class="resultado-title text-green">SEU CURRÍCULO ESTÁ PRONTO</h1>
        <p class="text-dim">Otimizado para sistemas ATS — pronto para ser enviado</p>
        <div class="resultado-line text-dim">─────────────────── ◆ ───────────────────</div>
      </div>

      <TuiResumePreview :data="mockResumeData" />

      <div class="resultado-actions">
        <TuiButton variant="success" size="lg" @click="downloadResume">
          BAIXAR CURRÍCULO (PDF)
        </TuiButton>
        <TuiButton variant="primary" size="lg" @click="$router.push('/resultado/vagas')">
          VER VAGAS PARA O SEU PERFIL
        </TuiButton>
      </div>

      <div class="resultado-stats">
        <TuiBox title="ANÁLISE ATS">
          <div class="stats-grid">
            <div class="stat">
              <span class="stat-label">Score ATS:</span>
              <span class="stat-value text-green">92/100</span>
            </div>
            <div class="stat">
              <span class="stat-label">Palavras-chave:</span>
              <span class="stat-value text-green">18 encontradas</span>
            </div>
            <div class="stat">
              <span class="stat-label">Formato:</span>
              <span class="stat-value text-green">✓ Compatível</span>
            </div>
            <div class="stat">
              <span class="stat-label">Seções:</span>
              <span class="stat-value text-green">✓ Completas</span>
            </div>
          </div>
        </TuiBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
import TuiResumePreview from '../components/TuiResumePreview.vue'
import { mockResumeData } from '../stores/mockData.js'

function downloadResume() {
  alert('Download simulado! No MVP completo, aqui será gerado o PDF via WeasyPrint.')
}
</script>

<style scoped>
.resultado {
  padding-bottom: 60px;
}

.resultado-header {
  text-align: center;
  margin-bottom: 30px;
}

.resultado-title {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.resultado-line {
  margin-top: 12px;
  opacity: 0.5;
}

.resultado-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 32px 0;
  flex-wrap: wrap;
}

.resultado-stats {
  max-width: 600px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-label {
  color: var(--text-dim);
  font-size: 0.8rem;
  text-transform: uppercase;
}

.stat-value {
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .resultado-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
