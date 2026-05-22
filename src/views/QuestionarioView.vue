<template>
  <div class="tui-page questionario">
    <div class="container flex-center" style="min-height: calc(100vh - 70px);">
      <div class="question-wrapper">
        <TuiBox title="VOCÊ BUSCA...">
          <div class="question-content">
            <p class="question-prompt">&gt; Selecione uma opção para continuar:</p>

            <div class="options">
              <TuiButton
                variant="primary"
                size="lg"
                block
                @click="$router.push('/questionario/boletim')"
              >
                CRIAR MEU PRIMEIRO CV
              </TuiButton>

              <div class="option-divider">
                <span class="divider-line">────────</span>
                <span class="divider-text">OU</span>
                <span class="divider-line">────────</span>
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

            <p class="question-help text-dim">
              &gt; Não tem currículo? Envie seu boletim acadêmico.<br>
              &gt; Já tem um? Vamos otimizá-lo para ATS.
            </p>
          </div>
        </TuiBox>
      </div>
    </div>
  </div>
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
}

.option-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 16px 0;
  color: var(--text-dim);
}

.divider-line {
  opacity: 0.4;
}

.divider-text {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}

.question-help {
  font-size: 0.8rem;
  line-height: 1.8;
  text-align: left;
}
</style>
