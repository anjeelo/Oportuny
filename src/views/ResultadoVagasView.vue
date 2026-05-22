<template>
  <main class="tui-page resultado-vagas" id="main-content">
    <div class="container">
      <div class="vagas-header">
        <TuiBox title="VAGAS COMPATÍVEIS COM SEU PERFIL">
          <div class="vagas-intro">
            <p><span aria-hidden="true">&gt; </span>Achamos que essas vagas são as melhores para o seu currículo.</p>
            <p><span aria-hidden="true">&gt; </span>Ordenadas por compatibilidade com seu perfil.</p>
          </div>
          <div class="vagas-count" aria-live="polite">
            <span class="text-green">{{ mockJobs.length }}</span>
            <span class="text-dim"> vagas encontradas</span>
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

.vagas-header {
  margin-bottom: 28px;
}

.vagas-intro {
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.8;
  margin-bottom: 8px;
}

.vagas-count {
  font-size: 1.1rem;
}

.vagas-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  margin-bottom: 32px;
  width: 100%;
}

.vagas-footer {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .vagas-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
