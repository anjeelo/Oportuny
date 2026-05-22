<template>
  <button
    class="tui-btn"
    :class="[
      `tui-btn--${variant}`,
      `tui-btn--${size}`,
      { 'tui-btn--block': block, 'tui-btn--disabled': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span class="tui-btn__bracket">[</span>
    <span class="tui-btn__text"><slot /></span>
    <span class="tui-btn__bracket">]</span>
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary', validator: v => ['primary', 'secondary', 'success'].includes(v) },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg'].includes(v) },
})

defineEmits(['click'])
</script>

<style scoped>
.tui-btn {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border: 1px solid;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  transition: background-color 0.15s, color 0.15s, border-color 0.15s;
  white-space: nowrap;
  line-height: 1;
}

/* Sizes */
.tui-btn--sm {
  font-size: 0.8rem;
  padding: 6px 12px;
}
.tui-btn--md {
  font-size: 0.95rem;
  padding: 10px 20px;
}
.tui-btn--lg {
  font-size: 1.1rem;
  padding: 14px 28px;
}

/* Block */
.tui-btn--block {
  width: 100%;
}

/* Primary — red background */
.tui-btn--primary {
  background: var(--red);
  color: #fff;
  border-color: var(--red);
}
.tui-btn--primary .tui-btn__bracket {
  color: rgba(255,255,255,0.7);
}
.tui-btn--primary:hover:not(:disabled) {
  background: var(--red-bright);
  border-color: var(--red-bright);
}

/* Secondary — blue outline */
.tui-btn--secondary {
  background: transparent;
  color: var(--blue-bright);
  border-color: var(--blue);
}
.tui-btn--secondary .tui-btn__bracket {
  color: var(--blue);
}
.tui-btn--secondary:hover:not(:disabled) {
  background: var(--blue);
  color: #fff;
}
.tui-btn--secondary:hover:not(:disabled) .tui-btn__bracket {
  color: rgba(255,255,255,0.7);
}

/* Success — green outline */
.tui-btn--success {
  background: transparent;
  color: var(--green);
  border-color: var(--green-dark);
}
.tui-btn--success .tui-btn__bracket {
  color: var(--green-dark);
}
.tui-btn--success:hover:not(:disabled) {
  background: var(--green);
  color: var(--bg);
}
.tui-btn--success:hover:not(:disabled) .tui-btn__bracket {
  color: var(--bg);
}

/* Disabled */
.tui-btn--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tui-btn__bracket {
  font-weight: 400;
}
.tui-btn__text {
  margin: 0 4px;
}
</style>
