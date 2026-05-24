<template>
  <article class="tui-card" :aria-labelledby="cardId">
    <div class="card-content">
      <h3 class="card-title" :id="cardId">{{ title }}</h3>
      <div class="card-meta">
        <span class="card-company">{{ company }}</span>
        <span class="card-dot" aria-hidden="true"> · </span>
        <span class="card-location">{{ location }}</span>
      </div>

      <div class="card-divider" aria-hidden="true"></div>

      <div class="card-details">
        <div class="card-type" v-if="type">
          <span class="type-badge">{{ type }}</span>
        </div>
        <div class="card-score" v-if="score !== undefined && score !== null">
          <span class="label">Compatibilidade:</span>

          <span class="score-bar" aria-hidden="true">
            <span class="score-filled" :class="scoreColorClass">{{ '█'.repeat(Math.round(score / 10)) }}</span>
            <span class="score-empty">{{ '░'.repeat(10 - Math.round(score / 10)) }}</span>
          </span>
          <span class="score-value" :class="scoreColorClass">{{ score }}%</span>
        </div>
      </div>

      <div class="card-description" v-if="description">{{ description }}</div>

      <div class="card-actions">
        <TuiButton variant="primary" size="sm" @click="handleApply" :aria-label="`Candidatar-se para ${title} na ${company}`">
          CANDIDATAR-SE
        </TuiButton>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import TuiButton from './TuiButton.vue'

const props = defineProps({
  title: { type: String, required: true },
  company: { type: String, default: '' },
  location: { type: String, default: '' },
  score: { type: Number, default: undefined },
  type: { type: String, default: '' },
  description: { type: String, default: '' },
  url: { type: String, default: '#' },
})

const cardId = computed(() => 'card-' + Math.random().toString(36).substr(2, 9))

const scoreColorClass = computed(() => {
  if (props.score >= 80) return 'score-high'
  if (props.score >= 60) return 'score-mid'
  return 'score-low'
})

function handleApply() {
  if (props.url && props.url !== '#') {
    window.open(props.url, '_blank')
  } else {
    alert('Link de candidatura simulado!')
  }
}
</script>

<style scoped>
.tui-card {
  font-family: var(--font-mono);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) var(--ease-out);
}

.tui-card:hover {
  border-color: var(--border-active);
  background: var(--bg-elevated);
  transform: translateY(-2px);
}

.card-content {
  padding: 20px 24px;
}

.card-title {
  color: var(--text-bright);
  font-size: 1.05rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--sp-xs);
}

.card-meta {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: var(--sp-sm);
}

.card-company {
  color: var(--info);
}

.card-dot {
  color: var(--text-muted);
}

.card-location {
  color: var(--text-secondary);
}

.card-divider {
  border-top: 1px solid var(--border);
  margin: var(--sp-sm) 0;
}

.card-details {
  margin: var(--sp-sm) 0;
}

.label {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.card-type {
  margin-bottom: var(--sp-sm);
}

.type-badge {
  display: inline-block;
  background: var(--info-bg);
  color: var(--info);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.card-score {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  flex-wrap: wrap;
}

.score-bar {
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.score-filled {
  transition: color var(--duration-fast);
}

.score-high {
  color: var(--accent);
}

.score-mid {
  color: var(--warm);
}

.score-low {
  color: var(--primary);
}

.score-empty {
  color: var(--text-muted);
  opacity: 0.3;
}

.score-value {
  font-size: 0.9rem;
  font-weight: 500;
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-family: var(--font-body);
  margin: var(--sp-sm) 0;
  line-height: 1.6;
}

.card-actions {
  margin-top: var(--sp-md);
}
</style>
