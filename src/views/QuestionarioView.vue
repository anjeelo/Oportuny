<template>
  <main class="tui-page questionario" id="main-content">
    <div class="container flex-center" style="min-height: calc(100vh - 70px);">
      <div class="question-wrapper">
        <TuiBox title="VOCÊ BUSCA...">
          <div class="question-content">
            <p class="question-prompt" id="prompt-desc">
              <span aria-hidden="true">&gt; </span>Selecione uma opção para continuar:
            </p>

            <div class="options" role="group" aria-labelledby="prompt-desc">
              <TuiButton
                variant="primary"
                size="lg"
                block
                @click="$router.push('/questionario/boletim')"
              >
                CRIAR MEU PRIMEIRO CV
              </TuiButton>

              <div class="option-divider" aria-hidden="true">
                <span class="divider-line"></span>
                <span class="divider-text">OU</span>
                <span class="divider-line"></span>
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

            <div class="question-help text-dim">
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
  max-width: 480px;
  width: 100%;
}

.question-content {
  text-align: center;
  width: 100%;
}

.question-prompt {
  color: var(--text);
  margin-bottom: 24px;
  font-size: 0.95rem;
  text-align: left;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 24px;
  width: 100%;
}

.option-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 16px 0;
  color: var(--text-dim);
  width: 100%;
}

.divider-line {
  flex: 1;
  border-top: 1px solid var(--border);
  opacity: 0.4;
}

.divider-text {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  flex-shrink: 0;
}

.question-help {
  font-size: 0.8rem;
  line-height: 1.8;
  text-align: left;
}
</style>
