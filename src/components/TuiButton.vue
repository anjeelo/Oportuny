<template>
  <button
    class="tui-btn"
    :class="[
      `tui-btn--${variant}`,
      `tui-btn--${size}`,
      { 'tui-btn--block': block, 'tui-btn--disabled': disabled }
    ]"
    :aria-disabled="disabled"
    @click="handleClick"
  >
    <span class="tui-btn__bracket" aria-hidden="true">[</span>
    <span class="tui-btn__text"><slot /></span>
    <span class="tui-btn__bracket" aria-hidden="true">]</span>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary', validator: v => ['primary', 'secondary', 'success'].includes(v) },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg'].includes(v) },
})

const emit = defineEmits(['click'])

function handleClick(e) {
  if (!props.disabled) {
    emit('click', e)
  } else {
    e.preventDefault()
  }
}
</script>

<style scoped>
.tui-btn {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  border-radius: var(--radius-sm);
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
  white-space: nowrap;
  line-height: 1;
}

/* ── Sizes ── */
.tui-btn--sm {
  font-size: 0.8rem;
  padding: 8px 14px;
}
.tui-btn--md {
  font-size: 0.95rem;
  padding: 12px 24px;
}
.tui-btn--lg {
  font-size: 1.1rem;
  padding: 16px 32px;
}

/* ── Block ── */
.tui-btn--block {
  width: 100%;
}

/* ── Primary ── */
.tui-btn--primary {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}
.tui-btn--primary .tui-btn__bracket {
  color: rgba(255, 255, 255, 0.6);
}
.tui-btn--primary:hover:not(.tui-btn--disabled) {
  background: var(--primary-muted);
  border-color: var(--primary-muted);
  transform: translateY(-1px);
}
.tui-btn--primary:active:not(.tui-btn--disabled) {
  transform: translateY(0);
}

/* ── Secondary ── */
.tui-btn--secondary {
  background: transparent;
  color: var(--info);
  border: 2px solid var(--border-active);
}
.tui-btn--secondary .tui-btn__bracket {
  color: var(--border-active);
}
.tui-btn--secondary:hover:not(.tui-btn--disabled) {
  background: var(--info-bg);
  transform: translateY(-1px);
}
.tui-btn--secondary:active:not(.tui-btn--disabled) {
  transform: translateY(0);
}

/* ── Success ── */
.tui-btn--success {
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent-muted);
}
.tui-btn--success .tui-btn__bracket {
  color: var(--accent-muted);
}
.tui-btn--success:hover:not(.tui-btn--disabled) {
  background: var(--accent-bg);
  transform: translateY(-1px);
}
.tui-btn--success:active:not(.tui-btn--disabled) {
  transform: translateY(0);
}

/* ── Disabled ── */
.tui-btn--disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.tui-btn__bracket {
  font-weight: 400;
}
.tui-btn__text {
  margin: 0 4px;
}
</style>
