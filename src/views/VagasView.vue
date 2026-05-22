<template>
  <main class="tui-page vagas-public" id="main-content">
    <div class="container">
      <div class="vagas-header">
        <h1 class="vagas-title">VAGAS DISPONÍVEIS</h1>
        <p class="text-dim">
          <span aria-hidden="true">&gt; </span>Oportunidades para universitários e recém-formados
        </p>
      </div>

      <!-- Category filters -->
      <nav class="filter-bar" aria-label="Filtrar vagas por categoria">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeCategory === cat }"
          :aria-pressed="activeCategory === cat"
          @click="activeCategory = cat"
        >
          <span aria-hidden="true">[</span>{{ cat }}<span aria-hidden="true">]</span>
        </button>
      </nav>

      <!-- Jobs grid -->
      <div class="vagas-grid" role="list" aria-label="Lista de vagas disponíveis">
        <div role="listitem" v-for="job in filteredJobs" :key="job.id">
          <TuiCard
            :title="job.title"
            :company="job.company"
            :location="job.location"
            :type="job.type"
            :description="job.description"
            :url="job.url"
          />
        </div>
      </div>

      <div class="vagas-empty" v-if="filteredJobs.length === 0" aria-live="polite">
        <TuiBox>
          <p class="text-dim text-center">
            <span aria-hidden="true">&gt; </span>Nenhuma vaga encontrada nesta categoria.
          </p>
        </TuiBox>
      </div>

      <!-- CTA -->
      <section class="vagas-cta" aria-labelledby="cta-title">
        <h2 id="cta-title" class="sr-only">Gerar seu currículo</h2>
        <div class="cta-text text-dim">
          <span aria-hidden="true">&gt; </span>Quer ver vagas compatíveis com seu perfil?
        </div>
        <TuiButton variant="primary" @click="$router.push('/questionario')">
          GERAR MEU CURRÍCULO
        </TuiButton>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
import TuiCard from '../components/TuiCard.vue'
import { mockPublicJobs } from '../stores/mockData.js'

const categories = ['Todas', 'Software', 'Marketing', 'Dados', 'Design', 'Infraestrutura', 'Produto']
const activeCategory = ref('Todas')

const filteredJobs = computed(() => {
  if (activeCategory.value === 'Todas') return mockPublicJobs
  return mockPublicJobs.filter(j => j.category === activeCategory.value)
})
</script>

<style scoped>
.vagas-public {
  padding-bottom: 60px;
}

.vagas-header {
  margin-bottom: 20px;
}

.vagas-title {
  color: var(--text-bright);
  font-size: 1.8rem;
  margin-bottom: 4px;
}

/* Filters */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  background: transparent;
  color: var(--text-dim);
  border: 1px solid var(--border);
  padding: 5px 12px;
  cursor: pointer;
  transition: all 0.15s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.filter-btn:focus-visible {
  outline: 2px dashed var(--green);
  outline-offset: 2px;
}

.filter-btn:hover {
  color: var(--blue-bright);
  border-color: var(--blue-bright);
}

.filter-btn.active {
  color: var(--green);
  border-color: var(--green);
  background: rgba(181, 221, 164, 0.08);
}

/* Grid */
.vagas-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  margin-bottom: 32px;
  width: 100%;
}

/* CTA */
.vagas-cta {
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

@media (max-width: 768px) {
  .vagas-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .filter-bar {
    gap: 4px;
  }
  .filter-btn {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
</style>
