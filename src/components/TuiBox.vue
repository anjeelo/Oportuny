<template>
  <div class="tui-box" :class="[`tui-box--${variant}`]">
    <div class="tui-box__top">
      <span class="tui-box__corner">┌</span>
      <span class="tui-box__line" v-if="title">─ </span>
      <span class="tui-box__title" v-if="title">{{ title }}</span>
      <span class="tui-box__line" v-if="title"> ─</span>
      <span class="tui-box__fill">{{ '─'.repeat(80) }}</span>
      <span class="tui-box__corner">┐</span>
    </div>
    <div class="tui-box__body" :class="{ 'tui-box__body--padded': padded }">
      <span class="tui-box__side">│</span>
      <div class="tui-box__content">
        <slot />
      </div>
      <span class="tui-box__side">│</span>
    </div>
    <div class="tui-box__bottom">
      <span class="tui-box__corner">└</span>
      <span class="tui-box__fill">{{ '─'.repeat(80) }}</span>
      <span class="tui-box__corner">┘</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  variant: { type: String, default: 'default', validator: v => ['default', 'highlight', 'danger'].includes(v) },
  padded: { type: Boolean, default: true }
})
</script>

<style scoped>
.tui-box {
  width: 100%;
  font-family: var(--font-mono);
}

.tui-box__top,
.tui-box__bottom {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1;
  height: 1.2em;
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
  color: var(--text-bright);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tui-box__fill {
  overflow: hidden;
  flex: 1;
}

.tui-box__body {
  display: flex;
  min-height: 40px;
}

.tui-box__body--padded .tui-box__content {
  padding: 16px 20px;
}

.tui-box__side {
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
  line-height: 1;
}

.tui-box__content {
  flex: 1;
  min-width: 0;
}

/* Variant colors */
.tui-box--default .tui-box__corner,
.tui-box--default .tui-box__fill,
.tui-box--default .tui-box__line,
.tui-box--default .tui-box__side {
  color: var(--border);
}

.tui-box--highlight .tui-box__corner,
.tui-box--highlight .tui-box__fill,
.tui-box--highlight .tui-box__line,
.tui-box--highlight .tui-box__side {
  color: var(--green);
}
.tui-box--highlight .tui-box__title {
  color: var(--green-bright);
}

.tui-box--danger .tui-box__corner,
.tui-box--danger .tui-box__fill,
.tui-box--danger .tui-box__line,
.tui-box--danger .tui-box__side {
  color: var(--red);
}
.tui-box--danger .tui-box__title {
  color: var(--red-bright);
}
</style>
