<template>
  <section 
    class="tui-box" 
    :class="[`tui-box--${variant}`]"
    :aria-labelledby="title ? boxId : null"
  >
    <div class="tui-box__top" aria-hidden="true">
      <span class="tui-box__corner">┌</span>
      <span class="tui-box__line" v-if="title">─ </span>
      <span class="tui-box__title" v-if="title" :id="boxId">{{ title }}</span>
      <span class="tui-box__line" v-if="title"> ─</span>
      <span class="tui-box__fill">{{ '─'.repeat(200) }}</span>
      <span class="tui-box__corner">┐</span>
    </div>
    
    <!-- Para leitores de tela lerem o título caso o top esteja escondido -->
    <h2 v-if="title" :id="boxId" class="sr-only">{{ title }}</h2>

    <div class="tui-box__body" :class="{ 'tui-box__body--padded': padded }">
      <span class="tui-box__side" aria-hidden="true">│</span>
      <div class="tui-box__content">
        <slot />
      </div>
      <span class="tui-box__side" aria-hidden="true">│</span>
    </div>

    <div class="tui-box__bottom" aria-hidden="true">
      <span class="tui-box__corner">└</span>
      <span class="tui-box__fill">{{ '─'.repeat(200) }}</span>
      <span class="tui-box__corner">┘</span>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  variant: { type: String, default: 'default', validator: v => ['default', 'highlight', 'danger'].includes(v) },
  padded: { type: Boolean, default: true }
})

const boxId = computed(() => 'box-' + Math.random().toString(36).substr(2, 9))
</script>

<style scoped>
.tui-box {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--font-mono);
  border-radius: var(--radius-md);
  animation: fadeIn var(--duration-slow) var(--ease-out) both;
}

.tui-box__top,
.tui-box__bottom {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1;
  height: 1.2em;
  user-select: none;
  width: 100%;
  max-width: 100%;
}

.tui-box__corner {
  flex-shrink: 0;
}

.tui-box__line {
  flex-shrink: 0;
  white-space: pre;
}

.tui-box__title {
  flex-shrink: 0;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-bright);
  border-left: 3px solid var(--accent);
  padding-left: var(--sp-sm);
}

.tui-box__fill {
  overflow: hidden;
  flex: 1;
  min-width: 0;
}

.tui-box__body {
  display: flex;
  min-height: 40px;
  width: 100%;
  max-width: 100%;
  background-color: var(--bg-elevated);
}

.tui-box__body--padded .tui-box__content {
  padding: 20px 24px;
}

.tui-box__side {
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
  line-height: 1;
  user-select: none;
}

.tui-box__content {
  flex: 1;
  min-width: 0;
}

/* ── Default variant ── */
.tui-box--default .tui-box__corner,
.tui-box--default .tui-box__fill,
.tui-box--default .tui-box__line,
.tui-box--default .tui-box__side {
  color: var(--text-muted);
  opacity: 0.5;
}

/* ── Highlight variant ── */
.tui-box--highlight .tui-box__corner,
.tui-box--highlight .tui-box__fill,
.tui-box--highlight .tui-box__line,
.tui-box--highlight .tui-box__side {
  color: var(--accent-muted);
}
.tui-box--highlight .tui-box__title {
  color: var(--accent-light);
  border-left-color: var(--accent-light);
}

/* ── Danger variant ── */
.tui-box--danger .tui-box__corner,
.tui-box--danger .tui-box__fill,
.tui-box--danger .tui-box__line,
.tui-box--danger .tui-box__side {
  color: var(--primary-muted);
}
.tui-box--danger .tui-box__title {
  color: var(--danger-light);
  border-left-color: var(--danger-light);
}

@media (max-width: 480px) {
  .tui-box__body--padded .tui-box__content {
    padding: 14px 16px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
