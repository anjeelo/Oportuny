<template>
  <div class="tui-page onboarding" id="main-content">
    <div class="container flex-col gap-lg">
      
      <!-- Header Section -->
      <section class="hero-section text-center">
        <h1 class="hero-title text-green">OPORTUNI</h1>
        <p class="hero-subtitle text-dim">
          Ajudando universitários de computação a conquistar a primeira oportunidade profissional.
        </p>
      </section>

      <!-- Comparison Section -->
      <section class="comparison-section" aria-label="Comparativo de currículo">
        <div class="comparison-grid">
          
          <!-- Before Card -->
          <article class="comparison-card" aria-labelledby="title-before">
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
          </article>

          <!-- After Card -->
          <article class="comparison-card" aria-labelledby="title-after">
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
                  <span class="cursor-blink">_</span>
                </div>
              </div>
              <p class="sr-only">Com a nossa IA, seu currículo é otimizado para sistemas ATS, com extração automática do boletim, destaque para suas habilidades técnicas e match automático com vagas. Compatibilidade quase perfeita.</p>
            </TuiBox>
          </article>

        </div>
      </section>

      <!-- Call to Action -->
      <section class="cta-section flex-center flex-col gap-md">
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
      </section>

    </div>
  </div>
</template>

<script setup>
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
</script>

<style scoped>
.hero-section {
  margin-top: 20px;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.2em;
  margin-bottom: 12px;
}

.hero-subtitle {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.comparison-section {
  margin: 40px 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
  width: 100%;
}

.comparison-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
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

.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.cta-section {
  margin-bottom: 60px;
  width: 100%;
}

.cta-text {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-subtitle {
    font-size: 0.95rem;
  }
}
</style>
