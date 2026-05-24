<template>
  <div class="tui-page onboarding" id="main-content">
    <div class="container flex-col">

      <!-- Hero Section -->
      <section class="hero-section text-center animate-fade-in-up">
        <h1 class="hero-title">OPORTUNI</h1>
        <p class="hero-subtitle">
          <span class="prompt-symbol" aria-hidden="true">$</span>
          Ajudando universitários de computação a conquistar a primeira oportunidade profissional.<span class="cursor-blink" aria-hidden="true">_</span>
        </p>
      </section>

      <!-- Features Section -->
      <section class="features-section" aria-label="Funcionalidades">
        <div class="features-grid">

          <article class="feature-card animate-fade-in-up delay-1">
            <div class="feature-icon" aria-hidden="true">
              <span class="text-accent">┌─ ATS ─┐</span>
              <span class="text-accent">└──────┘</span>
            </div>
            <h3 class="feature-title">OTIMIZAÇÃO ATS</h3>
            <p class="feature-desc">Seu currículo formatado para passar nos filtros automáticos das empresas</p>
          </article>

          <article class="feature-card animate-fade-in-up delay-2">
            <div class="feature-icon" aria-hidden="true">
              <span class="text-info">┌─ CV ──┐</span>
              <span class="text-info">└──────┘</span>
            </div>
            <h3 class="feature-title">CURRÍCULO IA</h3>
            <p class="feature-desc">Geração automática a partir do boletim acadêmico com inteligência artificial</p>
          </article>

          <article class="feature-card animate-fade-in-up delay-3">
            <div class="feature-icon" aria-hidden="true">
              <span class="text-warm">┌─ JOB ─┐</span>
              <span class="text-warm">└──────┘</span>
            </div>
            <h3 class="feature-title">MATCH DE VAGAS</h3>
            <p class="feature-desc">Encontre vagas compatíveis com seu perfil e habilidades</p>
          </article>

        </div>
      </section>

      <!-- How it Works Section -->
      <section class="how-section" aria-label="Como funciona">
        <div class="section-header">
          <span class="section-line" aria-hidden="true"></span>
          <h2 class="section-title">COMO FUNCIONA</h2>
          <span class="section-line" aria-hidden="true"></span>
        </div>

        <div class="steps-grid">
          <div class="step animate-fade-in-up delay-1">
            <span class="step-number">01</span>
            <h3 class="step-title">ENVIE</h3>
            <p class="step-desc">Faça upload do seu boletim ou currículo existente</p>
          </div>

          <div class="step-connector" aria-hidden="true"></div>

          <div class="step animate-fade-in-up delay-2">
            <span class="step-number">02</span>
            <h3 class="step-title">PROCESSE</h3>
            <p class="step-desc">Nossa IA analisa e otimiza seus dados para formato ATS</p>
          </div>

          <div class="step-connector" aria-hidden="true"></div>

          <div class="step animate-fade-in-up delay-3">
            <span class="step-number">03</span>
            <h3 class="step-title">CONQUISTE</h3>
            <p class="step-desc">Receba seu currículo e veja vagas compatíveis</p>
          </div>
        </div>
      </section>

      <!-- Comparison Section -->
      <section class="comparison-section animate-fade-in-up" aria-label="Comparativo de currículo">
        <div class="comparison-grid">

          <!-- Before Card -->
          <article class="comparison-card animate-fade-in-up delay-1" aria-labelledby="title-before">
            <div class="comparison-card-wrapper comparison-card-wrapper--before">
              <TuiBox title="COMO É SEU CV HOJE" class="box-stretch">
                <h2 id="title-before" class="sr-only">Como é seu CV hoje</h2>
                <div class="code-block text-dim" aria-hidden="true">
                  <div>- Sem experiência profissional</div>
                  <div>- Formato genérico (Word/Canva)</div>
                  <div>- Projetos acadêmicos escondidos</div>
                  <div>- Ignorado por sistemas ATS</div>
                  <br>
                  <div class="status-line">
                    <span class="text-red">[ERRO]</span> Compatibilidade: 12%
                  </div>
                </div>
                <p class="sr-only">Seu currículo hoje não tem experiência profissional, usa um formato genérico, tem projetos acadêmicos escondidos e é ignorado por sistemas ATS. A compatibilidade é muito baixa.</p>
              </TuiBox>
            </div>
          </article>

          <!-- After Card -->
          <article class="comparison-card animate-fade-in-up delay-2" aria-labelledby="title-after">
            <div class="comparison-card-wrapper comparison-card-wrapper--after">
              <TuiBox title="COM A NOSSA IA" variant="highlight" class="box-stretch">
                <h2 id="title-after" class="sr-only">Como fica com a nossa IA</h2>
                <div class="code-block" aria-hidden="true">
                  <div><span class="text-green">+</span> Otimizado para ATS</div>
                  <div><span class="text-green">+</span> Extração automática do boletim</div>
                  <div><span class="text-green">+</span> Destaque para stack tech</div>
                  <div><span class="text-green">+</span> Match automático com vagas</div>
                  <br>
                  <div class="status-line">
                    <span class="text-green">[OK]</span> Compatibilidade: 98%
                    <span class="cursor-blink" aria-hidden="true">_</span>
                  </div>
                </div>
                <p class="sr-only">Com a nossa IA, seu currículo é otimizado para sistemas ATS, com extração automática do boletim, destaque para suas habilidades técnicas e match automático com vagas. Compatibilidade quase perfeita.</p>
              </TuiBox>
            </div>
          </article>

        </div>
      </section>

      <!-- Call to Action -->
      <section class="cta-section flex-center flex-col gap-md animate-fade-in-up">
        <div class="tui-line" aria-hidden="true">
          <span class="tui-line-fill">{{ '─'.repeat(100) }}</span>
          <span class="tui-line-icon">◆</span>
          <span class="tui-line-fill">{{ '─'.repeat(100) }}</span>
        </div>
        <p class="cta-text text-bright text-center">
          Pronto para gerar seu currículo e encontrar vagas compatíveis?
        </p>
        <TuiButton variant="primary" size="lg" @click="$router.push('/questionario')">
          INICIAR AGORA
        </TuiButton>
        <p class="cta-helper" aria-hidden="true">&gt; Sem custo. Sem cadastro de cartão.</p>
      </section>

    </div>
  </div>
</template>

<script setup>
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────────────── */
.hero-section {
  margin-top: var(--sp-xl);
  margin-bottom: 72px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--accent);
  margin-bottom: var(--sp-md);
  font-family: var(--font-mono);
}

.hero-subtitle {
  font-size: 1.1rem;
  max-width: 550px;
  margin: 0 auto;
  color: var(--text-secondary);
  font-family: var(--font-body);
  line-height: 1.75;
}

.prompt-symbol {
  color: var(--accent);
  font-family: var(--font-mono);
  font-weight: 700;
  margin-right: var(--sp-sm);
}

.cursor-blink {
  color: var(--accent);
  font-family: var(--font-mono);
  font-weight: 700;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* ── Features ─────────────────────────────────────────────── */
.features-section {
  margin-bottom: 72px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-lg);
}

.feature-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  text-align: center;
  transition: border-color var(--duration-normal) var(--ease-out),
              background-color var(--duration-normal) var(--ease-out);
}

.feature-card:hover {
  border-color: var(--border-active);
  background: var(--bg-elevated);
}

.feature-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: var(--sp-md);
  user-select: none;
}

.feature-title {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  text-transform: uppercase;
  color: var(--text-bright);
  letter-spacing: 0.08em;
  margin-bottom: var(--sp-sm);
  font-weight: 500;
}

.feature-desc {
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* ── How it Works ─────────────────────────────────────────── */
.how-section {
  margin-bottom: 72px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--sp-md);
  margin-bottom: var(--sp-2xl);
}

.section-line {
  flex: 1;
  height: 1px;
  background: var(--border);
  opacity: 0.5;
}

.section-title {
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--text-bright);
  letter-spacing: 0.12em;
  white-space: nowrap;
  font-weight: 500;
}

.steps-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}

.step {
  flex: 1;
  text-align: center;
  padding: 0 var(--sp-lg);
  max-width: 260px;
}

.step-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  font-family: var(--font-mono);
  line-height: 1;
  margin-bottom: var(--sp-sm);
}

.step-title {
  font-family: var(--font-mono);
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--text-bright);
  letter-spacing: 0.06em;
  margin-bottom: var(--sp-sm);
  font-weight: 500;
}

.step-desc {
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.6;
}

.step-connector {
  width: 60px;
  flex-shrink: 0;
  margin-top: 22px;
  border-top: 2px dashed var(--border);
}

/* ── Comparison ───────────────────────────────────────────── */
.comparison-section {
  margin-bottom: 72px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--sp-lg);
  align-items: stretch;
  width: 100%;
}

.comparison-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
}

.comparison-card-wrapper {
  border-radius: var(--radius-md);
  padding: var(--sp-xs);
  height: 100%;
}

.comparison-card-wrapper--before {
  background: var(--danger-bg);
}

.comparison-card-wrapper--after {
  background: var(--accent-bg);
}

:deep(.box-stretch) {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

:deep(.box-stretch .tui-box__body) {
  flex: 1;
}

:deep(.box-stretch .tui-box__content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.code-block {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  line-height: 1.8;
  padding: 10px 0;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
}

.status-line {
  margin-top: 10px;
  font-weight: bold;
}

/* ── CTA ──────────────────────────────────────────────────── */
.cta-section {
  margin-bottom: 80px;
  width: 100%;
}

.cta-text {
  font-size: 1.2rem;
  font-family: var(--font-body);
}

.cta-helper {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: var(--sp-xs);
}

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: 0.15em;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--sp-md);
  }

  .steps-grid {
    flex-direction: column;
    align-items: center;
    gap: var(--sp-lg);
  }

  .step {
    max-width: 100%;
    padding: 0;
  }

  .step-connector {
    width: 2px;
    height: 40px;
    border-top: none;
    border-left: 2px dashed var(--border);
    margin-top: 0;
  }

  .comparison-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--sp-md);
  }

  .hero-section {
    margin-bottom: 48px;
  }

  .features-section,
  .how-section,
  .comparison-section {
    margin-bottom: 48px;
  }

  .cta-section {
    margin-bottom: 60px;
  }
}
</style>
