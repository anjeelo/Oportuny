<template>
  <main class="tui-page resultado" id="main-content">
    <div class="container">
      <div class="resultado-header">
        <h1 class="resultado-title text-green">SEU CURRÍCULO ESTÁ PRONTO</h1>
        <p class="text-dim">Otimizado para sistemas ATS — pronto para ser enviado</p>
        <div class="tui-line text-dim" aria-hidden="true">
          <span class="tui-line-fill">{{ '─'.repeat(100) }}</span>
          <span class="tui-line-icon">◆</span>
          <span class="tui-line-fill">{{ '─'.repeat(100) }}</span>
        </div>
      </div>

      <TuiResumePreview :data="mockResumeData" />

      <div class="resultado-actions">
        <TuiButton variant="success" size="lg" @click="downloadResume" aria-label="Baixar currículo em formato PDF">
          BAIXAR CURRÍCULO (PDF)
        </TuiButton>
        <TuiButton variant="primary" size="lg" @click="$router.push('/resultado/vagas')">
          VER VAGAS PARA O SEU PERFIL
        </TuiButton>
      </div>

      <div class="resultado-stats">
        <TuiBox title="ANÁLISE ATS">
          <dl class="stats-grid">
            <div class="stat">
              <dt class="stat-label">Score ATS:</dt>
              <dd class="stat-value text-green">92/100</dd>
            </div>
            <div class="stat">
              <dt class="stat-label">Palavras-chave:</dt>
              <dd class="stat-value text-green">18 encontradas</dd>
            </div>
            <div class="stat">
              <dt class="stat-label">Formato:</dt>
              <dd class="stat-value text-green">
                <span aria-hidden="true">✓ </span>Compatível
              </dd>
            </div>
            <div class="stat">
              <dt class="stat-label">Seções:</dt>
              <dd class="stat-value text-green">
                <span aria-hidden="true">✓ </span>Completas
              </dd>
            </div>
          </dl>
        </TuiBox>
      </div>
    </div>
  </main>
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



.resultado-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 32px 0;
  flex-wrap: wrap;
}

.resultado-stats {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 0;
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
  margin: 0;
}

.stat-value {
  font-size: 1.05rem;
  margin: 0;
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
