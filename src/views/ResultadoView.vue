<template>
  <main class="tui-page resultado" id="main-content">
    <div class="container">
      <div class="resultado-header animate-fade-in-up">
        <div class="success-badge" aria-hidden="true">
          <span class="badge-icon">✓</span>
        </div>
        <h1 class="resultado-title">SEU CURRÍCULO ESTÁ PRONTO</h1>
        <p class="resultado-subtitle">Otimizado para sistemas ATS — pronto para ser enviado</p>
        <div class="tui-line" aria-hidden="true">
          <span class="tui-line-fill">{{ '─'.repeat(100) }}</span>
          <span class="tui-line-icon">◆</span>
          <span class="tui-line-fill">{{ '─'.repeat(100) }}</span>
        </div>
      </div>

      <div class="animate-fade-in-up">
        <TuiResumePreview :data="mockResumeData" />
      </div>

      <div class="resultado-actions animate-fade-in-up">
        <TuiButton variant="success" size="lg" @click="downloadResume" aria-label="Baixar currículo em formato PDF">
          BAIXAR CURRÍCULO (PDF)
        </TuiButton>
        <TuiButton variant="primary" size="lg" @click="$router.push('/resultado/vagas')">
          VER VAGAS PARA O SEU PERFIL
        </TuiButton>
      </div>

      <div class="resultado-stats animate-fade-in-up">
        <TuiBox title="ANÁLISE ATS">
          <dl class="stats-grid">
            <div class="stat-card">
              <dt class="stat-label">Score ATS</dt>
              <dd class="stat-value">92/100</dd>
            </div>
            <div class="stat-card">
              <dt class="stat-label">Palavras-chave</dt>
              <dd class="stat-value">18 encontradas</dd>
            </div>
            <div class="stat-card">
              <dt class="stat-label">Formato</dt>
              <dd class="stat-value">
                <span aria-hidden="true">✓ </span>Compatível
              </dd>
            </div>
            <div class="stat-card">
              <dt class="stat-label">Seções</dt>
              <dd class="stat-value">
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

/* Header */
.resultado-header {
  text-align: center;
  margin-bottom: var(--sp-xl);
}

.success-badge {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--accent-bg);
  border: 2px solid var(--accent);
  color: var(--accent);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--sp-md);
}

.badge-icon {
  line-height: 1;
}

.resultado-title {
  font-family: var(--font-mono);
  font-size: 2rem;
  color: var(--accent-light);
  margin-bottom: 6px;
}

.resultado-subtitle {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--sp-md);
}

.tui-line {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  color: var(--text-muted);
  overflow: hidden;
}

.tui-line-fill {
  overflow: hidden;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.tui-line-icon {
  flex-shrink: 0;
  font-family: var(--font-mono);
  color: var(--accent);
}

/* Actions */
.resultado-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: var(--sp-xl) 0;
  flex-wrap: wrap;
}

/* Stats */
.resultado-stats {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-md);
  margin: 0;
}

.stat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--sp-md);
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
}

.stat-label {
  font-family: var(--font-mono);
  color: var(--text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
}

.stat-value {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--accent);
  margin: 0;
}

/* Animations */
.animate-fade-in-up {
  animation: fadeInUp var(--duration-normal, 0.4s) var(--ease-out, ease-out) both;
}

.resultado-header.animate-fade-in-up {
  animation-delay: 0s;
}

.resultado-actions.animate-fade-in-up {
  animation-delay: 0.1s;
}

.resultado-stats.animate-fade-in-up {
  animation-delay: 0.2s;
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

/* Responsive */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .resultado-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .resultado-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
