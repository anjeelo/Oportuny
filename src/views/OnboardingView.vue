<template>
  <div class="tui-page onboarding">
    <div class="container">
      <!-- Hero -->
      <div class="hero">
        <h1 class="hero-title">OPORTUNI</h1>
        <p class="hero-subtitle">Sua primeira oportunidade começa aqui.</p>
        <div class="hero-line">─────────────────── ◆ ───────────────────</div>
      </div>

      <!-- Comparison panels -->
      <div class="panels">
        <!-- BEFORE -->
        <div class="panel panel--before">
          <div class="panel-label text-dim">[ ANTES ]</div>
          <TuiBox title="SEU PERFIL ATUAL" variant="danger">
            <div class="panel-content">
              <div class="status-line">
                <span class="label">status:</span>
                <span class="text-red">[SEM CURRÍCULO]</span>
              </div>
              <div class="status-line">
                <span class="label">habilidades:</span>
                <span class="text-dim">???</span>
              </div>
              <div class="status-line">
                <span class="label">vagas encontradas:</span>
                <span class="text-red">0</span>
              </div>
              <div class="panel-separator">────────────────────────</div>
              <div class="panel-msg text-dim">
                &gt; Sem currículo, sem direção.<br>
                &gt; Vagas passando sem você notar.<br>
                &gt; Processos seletivos? Quais?
              </div>
              <div class="cursor-blink">█</div>
            </div>
          </TuiBox>
        </div>

        <!-- AFTER -->
        <div class="panel panel--after">
          <div class="panel-label text-green">[ DEPOIS ]</div>
          <TuiBox title="COM OPORTUNI" variant="highlight">
            <div class="panel-content">
              <div class="status-line">
                <span class="label">status:</span>
                <span class="text-green">[PRONTO ✓]</span>
              </div>
              <div class="status-line">
                <span class="label">habilidades:</span>
                <span class="text-green">Python, JS, SQL +9</span>
              </div>
              <div class="status-line">
                <span class="label">vagas encontradas:</span>
                <span class="text-green">23</span>
              </div>
              <div class="panel-separator">────────────────────────</div>
              <div class="panel-msg text-green">
                &gt; Currículo ATS otimizado ✓<br>
                &gt; Vagas compatíveis rankeadas ✓<br>
                &gt; Primeira oportunidade? Em breve.
              </div>
              <div class="ready-indicator">● READY</div>
            </div>
          </TuiBox>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-section">
        <TuiButton variant="primary" size="lg" block @click="$router.push('/questionario')">
          CRIAR MEU PRIMEIRO CURRÍCULO
        </TuiButton>
        <p class="cta-sub text-dim text-center">
          Feito para universitários da área de computação
        </p>
      </div>

      <!-- Features -->
      <div class="features">
        <div class="feature">
          <span class="feature-icon text-green">⬡</span>
          <span>Upload do boletim → currículo gerado por IA</span>
        </div>
        <div class="feature">
          <span class="feature-icon text-blue">⬡</span>
          <span>Otimizado para ATS — passa nos filtros</span>
        </div>
        <div class="feature">
          <span class="feature-icon text-red">⬡</span>
          <span>Vagas compatíveis ordenadas por chance</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
</script>

<style scoped>
.onboarding {
  padding-bottom: 60px;
}

.hero {
  text-align: center;
  padding: 40px 0 30px;
}

.hero-title {
  color: var(--red);
  font-size: 3rem;
  letter-spacing: 0.3em;
  margin-bottom: 8px;
}

.hero-subtitle {
  color: var(--green);
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.hero-line {
  color: var(--text-dim);
  opacity: 0.5;
  letter-spacing: 0.1em;
}

/* Panels */
.panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

.panel-label {
  text-align: center;
  margin-bottom: 8px;
  font-size: 0.9rem;
  letter-spacing: 0.15em;
}

.panel-content {
  font-size: 0.9rem;
}

.status-line {
  margin-bottom: 4px;
}

.status-line .label {
  color: var(--text-dim);
  margin-right: 6px;
}

.panel-separator {
  color: var(--text-dim);
  opacity: 0.3;
  margin: 12px 0;
}

.panel-msg {
  line-height: 1.8;
  font-size: 0.85rem;
}

.cursor-blink {
  color: var(--red);
  margin-top: 8px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.ready-indicator {
  color: var(--green);
  margin-top: 8px;
  font-size: 0.85rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* CTA */
.cta-section {
  max-width: 500px;
  margin: 0 auto 40px;
}

.cta-sub {
  margin-top: 12px;
  font-size: 0.85rem;
}

/* Features */
.features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  margin: 0 auto;
}

.feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text);
}

.feature-icon {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
    letter-spacing: 0.2em;
  }
  .panels {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
