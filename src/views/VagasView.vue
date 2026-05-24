<template>
  <main class="tui-page vagas-public" id="main-content">
    <div class="container animate-fade-in-up">
      <div class="vagas-header">
        <h1 class="vagas-title">VAGAS DISPONÍVEIS</h1>
        <p class="vagas-subtitle">
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
          {{ cat }}
        </button>
      </nav>

      <!-- Jobs grid -->
      <div class="vagas-grid" role="list" aria-label="Lista de vagas disponíveis" v-if="filteredJobs.length > 0">
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

      <!-- Empty state -->
      <div class="vagas-empty" v-if="filteredJobs.length === 0" aria-live="polite">
        <div class="empty-content">
          <div class="empty-icon" aria-hidden="true">¯\_(ツ)_/¯</div>
          <p class="empty-text">Nenhuma vaga encontrada nesta categoria.</p>
        </div>
      </div>

      <!-- CTA -->
      <section class="vagas-cta" aria-labelledby="cta-title">
        <h2 id="cta-title" class="sr-only">Gerar seu currículo</h2>
        <p class="cta-text">Quer ver vagas compatíveis com seu perfil?</p>
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

/* Header */
.vagas-header {
  margin-bottom: var(--sp-lg);
}

.vagas-title {
  font-family: var(--font-mono);
  color: var(--text-bright);
  font-size: 2rem;
  margin-bottom: 6px;
}

.vagas-subtitle {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

/* Filters */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-sm);
  margin-bottom: var(--sp-xl);
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--duration-fast, 0.15s);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.filter-btn:focus-visible {
  outline: 2px dashed var(--accent);
  outline-offset: 2px;
}

.filter-btn:hover {
  color: var(--info);
  border-color: var(--info);
}

.filter-btn.active {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-bg);
}

/* Grid */
.vagas-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  margin-bottom: var(--sp-xl);
  width: 100%;
}

/* Empty state */
.vagas-empty {
  margin-bottom: var(--sp-xl);
}

.empty-content {
  text-align: center;
  padding: var(--sp-2xl) var(--sp-md);
}

.empty-icon {
  font-family: var(--font-mono);
  font-size: 2rem;
  color: var(--text-muted);
  margin-bottom: 12px;
  user-select: none;
}

.empty-text {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

/* CTA */
.vagas-cta {
  text-align: center;
  margin-top: var(--sp-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-md);
}

.cta-text {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
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

  .vagas-title {
    font-size: 1.5rem;
  }

  .filter-bar {
    gap: 4px;
  }

  .filter-btn {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
}
</style>
