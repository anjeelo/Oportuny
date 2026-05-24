<template>
  <main class="tui-page questionario" id="main-content">
    <div class="container flex-center" style="min-height: calc(100vh - 70px);">
      <div class="question-wrapper animate-fade-in-up">
        <TuiBox title="VOCÊ BUSCA...">
          <div class="question-content">
            <p class="question-prompt" id="prompt-desc">
              <span aria-hidden="true">&gt; </span>Selecione uma opção para continuar:
            </p>

            <div class="options" role="group" aria-labelledby="prompt-desc">

              <div class="option-block">
                <div class="option-icon" aria-hidden="true">
                  <span>┌───┐</span>
                  <span>│ + │</span>
                  <span>└───┘</span>
                </div>
                <TuiButton
                  variant="primary"
                  size="lg"
                  block
                  @click="$router.push('/questionario/boletim')"
                >
                  CRIAR MEU PRIMEIRO CV
                </TuiButton>
              </div>

              <div class="option-divider" aria-hidden="true">
                <span class="divider-line"></span>
                <span class="divider-text">- - OU - -</span>
                <span class="divider-line"></span>
              </div>

              <div class="option-block">
                <div class="option-icon option-icon--info" aria-hidden="true">
                  <span>┌───┐</span>
                  <span>│ ↑ │</span>
                  <span>└───┘</span>
                </div>
                <TuiButton
                  variant="secondary"
                  size="lg"
                  block
                  @click="$router.push('/questionario/curriculo')"
                >
                  APRIMORAR MEU CV
                </TuiButton>
              </div>

            </div>

            <div class="question-help">
              <p><span aria-hidden="true">&gt; </span>Não tem currículo? Envie seu boletim acadêmico.</p>
              <p><span aria-hidden="true">&gt; </span>Já tem um? Vamos otimizá-lo para ATS.</p>
            </div>
          </div>
        </TuiBox>
      </div>
    </div>
  </main>
</template>

<script setup>
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
</script>

<style scoped>
.question-wrapper {
  max-width: 520px;
  width: 100%;
}

.question-content {
  text-align: center;
  width: 100%;
}

.question-prompt {
  color: var(--text);
  margin-bottom: var(--sp-lg);
  font-size: 0.95rem;
  text-align: left;
  font-family: var(--font-mono);
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: var(--sp-lg);
  width: 100%;
}

.option-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.option-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--accent);
  font-size: 1rem;
  font-family: var(--font-mono);
  text-align: center;
  margin-bottom: var(--sp-sm);
  line-height: 1.3;
  user-select: none;
}

.option-icon--info {
  color: var(--info);
}

.option-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: var(--sp-md) 0;
  color: var(--text-muted);
  width: 100%;
}

.divider-line {
  flex: 1;
  border-top: 1px dashed var(--border);
  opacity: 0.5;
}

.divider-text {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  flex-shrink: 0;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.question-help {
  font-size: 0.8rem;
  line-height: 1.8;
  text-align: left;
  color: var(--text-secondary);
  font-family: var(--font-body);
}

.question-help span {
  color: var(--text-muted);
  font-family: var(--font-mono);
}
</style>
