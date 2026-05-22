<template>
  <div class="tui-card">
    <div class="card-top">┌{{ '─'.repeat(60) }}┐</div>
    <div class="card-body">
      <div class="card-side">│</div>
      <div class="card-content">
        <div class="card-title">{{ title }}</div>
        <div class="card-meta">
          <span class="card-company">{{ company }}</span>
          <span class="card-dot"> • </span>
          <span class="card-location">{{ location }}</span>
        </div>

        <div class="card-divider">├{{ '─'.repeat(60) }}┤</div>

        <div class="card-details">
          <div class="card-type" v-if="type">
            <span class="label">Tipo:</span> {{ type }}
          </div>
          <div class="card-score" v-if="score !== undefined && score !== null">
            <span class="label">Compatibilidade:</span>
            <span class="score-bar">
              <span class="score-filled">{{ '█'.repeat(Math.round(score / 10)) }}</span>
              <span class="score-empty">{{ '░'.repeat(10 - Math.round(score / 10)) }}</span>
            </span>
            <span class="score-value">{{ score }}%</span>
          </div>
        </div>

        <div class="card-description" v-if="description">{{ description }}</div>

        <div class="card-actions">
          <TuiButton variant="primary" size="sm" @click="handleApply">
            CANDIDATAR-SE
          </TuiButton>
        </div>
      </div>
      <div class="card-side">│</div>
    </div>
    <div class="card-bottom">└{{ '─'.repeat(60) }}┘</div>
  </div>
</template>

<script setup>
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
}

.card-top, .card-bottom, .card-divider {
  color: var(--border);
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.2;
  font-size: 0.95rem;
}

.card-body {
  display: flex;
}

.card-side {
  color: var(--border);
  flex-shrink: 0;
  line-height: 1;
  display: flex;
  align-items: stretch;
  font-size: 0.95rem;
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
