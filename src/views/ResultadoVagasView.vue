<template>
  <main class="tui-page resultado-vagas" id="main-content">
    <div class="container animate-fade-in-up">
      <div class="vagas-header">
        <TuiBox title="VAGAS COMPATÍVEIS COM SEU PERFIL">
          <div class="vagas-intro">
            <p><span aria-hidden="true">&gt; </span>Achamos que essas vagas são as melhores para o seu currículo.</p>
            <p><span aria-hidden="true">&gt; </span>Ordenadas por compatibilidade com seu perfil.</p>
          </div>
          <div class="vagas-count" aria-live="polite">
            <span class="count-number">{{ mockJobs.length }}</span>
            <span class="count-text"> vagas encontradas</span>
          </div>
        </TuiBox>
      </div>

      <div class="vagas-grid" role="list" aria-label="Lista de vagas compatíveis">
        <div role="listitem" v-for="job in mockJobs" :key="job.id">
          <TuiCard
            :title="job.title"
            :company="job.company"
            :location="job.location"
            :score="job.score"
            :type="job.type"
            :description="job.description"
            :url="job.url"
          />
        </div>
      </div>

      <div class="vagas-footer">
        <TuiButton variant="secondary" @click="$router.push('/resultado')">
          <span aria-hidden="true">← </span>VOLTAR AO CURRÍCULO
        </TuiButton>
        <TuiButton variant="secondary" @click="$router.push('/vagas')">
          VER TODAS AS VAGAS
        </TuiButton>
      </div>
    </div>
  </main>
</template>

<script setup>
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
import TuiCard from '../components/TuiCard.vue'
import { mockJobs } from '../stores/mockData.js'
</script>

<style scoped>
.resultado-vagas {
  padding-bottom: 60px;
}

/* Header */
.vagas-header {
  margin-bottom: var(--sp-xl);
}

.vagas-intro {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.8;
  margin-bottom: var(--sp-sm);
}

.vagas-intro p {
  margin: 0;
}

.vagas-count {
  font-size: 1.2rem;
  font-family: var(--font-mono);
}

.count-number {
  color: var(--accent);
  font-weight: 600;
}

.count-text {
  color: var(--text-secondary);
}

/* Grid */
.vagas-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  margin-bottom: var(--sp-xl);
  width: 100%;
}

/* Footer */
.vagas-footer {
  display: flex;
  gap: var(--sp-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Animation */
.animate-fade-in-up {
  animation: fadeInUp var(--duration-normal, 0.4s) var(--ease-out, ease-out) both;
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
@media (max-width: 768px) {
  .vagas-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
