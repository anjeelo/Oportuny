<template>
  <article class="tui-card" :aria-labelledby="cardId">
    <div class="card-top" aria-hidden="true">
      <span class="card-corner">┌</span>
      <span class="card-fill">{{ '─'.repeat(200) }}</span>
      <span class="card-corner">┐</span>
    </div>
    <div class="card-body">
      <div class="card-side" aria-hidden="true">│</div>
      <div class="card-content">
        <h3 class="card-title" :id="cardId">{{ title }}</h3>
        <div class="card-meta">
          <span class="card-company">{{ company }}</span>
          <span class="card-dot" aria-hidden="true"> • </span>
          <span class="card-location">{{ location }}</span>
        </div>

        <div class="card-divider" aria-hidden="true">
          <span class="card-corner">├</span>
          <span class="card-fill">{{ '─'.repeat(200) }}</span>
          <span class="card-corner">┤</span>
        </div>

        <div class="card-details">
          <div class="card-type" v-if="type">
            <span class="label">Tipo:</span> {{ type }}
          </div>
          <div class="card-score" v-if="score !== undefined && score !== null">
            <span class="label">Compatibilidade:</span>
            
            <span class="score-bar" aria-hidden="true">
              <span class="score-filled">{{ '█'.repeat(Math.round(score / 10)) }}</span>
              <span class="score-empty">{{ '░'.repeat(10 - Math.round(score / 10)) }}</span>
            </span>
            <span class="score-value">{{ score }}%</span>
          </div>
        </div>

        <div class="card-description" v-if="description">{{ description }}</div>

        <div class="card-actions">
          <TuiButton variant="primary" size="sm" @click="handleApply" :aria-label="`Candidatar-se para ${title} na ${company}`">
            CANDIDATAR-SE
          </TuiButton>
        </div>
      </div>
      <div class="card-side" aria-hidden="true">│</div>
    </div>
    <div class="card-bottom" aria-hidden="true">
      <span class="card-corner">└</span>
      <span class="card-fill">{{ '─'.repeat(200) }}</span>
      <span class="card-corner">┘</span>
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
}

.card-top, .card-bottom, .card-divider {
  display: flex;
  align-items: center;
  color: var(--border);
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.2;
  font-size: 0.95rem;
  user-select: none;
  width: 100%;
  max-width: 100%;
}

.card-corner {
  flex-shrink: 0;
}

.card-fill {
  flex: 1;
  overflow: hidden;
  min-width: 0;
}

.card-body {
  display: flex;
  width: 100%;
  max-width: 100%;
}

.card-side {
  color: var(--border);
  flex-shrink: 0;
  line-height: 1;
  display: flex;
  align-items: stretch;
  font-size: 0.95rem;
  user-select: none;
}

.card-content {
  flex: 1;
  padding: 12px 16px;
  min-width: 0;
}

.card-title {
  color: var(--text-bright);
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.card-meta {
  color: var(--text-dim);
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.card-company {
  color: var(--blue-bright);
}

.card-dot {
  color: var(--text-dim);
}

.card-divider {
  margin: 8px -16px;
}

.card-details {
  margin: 10px 0;
}

.label {
  color: var(--text-dim);
}

.card-type {
  color: var(--text);
  margin-bottom: 4px;
}

.card-score {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.score-filled {
  color: var(--green);
}

.score-empty {
  color: var(--text-dim);
  opacity: 0.4;
}

.score-value {
  color: var(--green);
  font-size: 0.95rem;
}

.card-description {
  color: var(--text-dim);
  font-size: 0.85rem;
  margin: 8px 0;
  line-height: 1.5;
}

.card-actions {
  margin-top: 12px;
}
</style>
