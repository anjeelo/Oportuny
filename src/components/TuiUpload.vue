<template>
  <div
    class="tui-upload"
    :class="{ 'tui-upload--active': isDragging, 'tui-upload--done': selectedFile }"
    @click="triggerInput"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="isDragging = false"
    @drop.prevent="handleDrop"
    role="button"
    :aria-label="label || 'Upload de arquivo'"
    tabindex="0"
    @keydown.enter.prevent="triggerInput"
    @keydown.space.prevent="triggerInput"
  >
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      class="tui-upload__input"
      @change="handleFileChange"
      tabindex="-1"
    />

    <!-- aria-live region to announce changes to screen readers -->
    <div class="sr-only" aria-live="polite" aria-atomic="true">
      {{ srMessage }}
    </div>

    <template v-if="!selectedFile">
      <div class="tui-upload__icon" aria-hidden="true">
        <div>┌──────┐</div>
        <div>│ FILE │</div>
        <div>│  ↑   │</div>
        <div>└──────┘</div>
      </div>
      <div class="tui-upload__label" aria-hidden="true">{{ label || 'Arraste seu arquivo aqui' }}</div>
      <div class="tui-upload__hint" aria-hidden="true">ou clique para selecionar</div>
      <div class="tui-upload__formats" aria-hidden="true">Formatos: {{ accept || '*' }}</div>
      <div class="tui-upload__maxsize" aria-hidden="true">Tamanho máximo: {{ maxSize }}MB</div>
    </template>

    <template v-else>
      <div class="tui-upload__done-icon" aria-hidden="true">✓</div>
      <div class="tui-upload__filename" aria-hidden="true">{{ selectedFile.name }}</div>
      <div class="tui-upload__filesize" aria-hidden="true">{{ formatSize(selectedFile.size) }}</div>
      <div class="tui-upload__change" aria-hidden="true">Clique para trocar o arquivo</div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  accept: { type: String, default: '.pdf,.docx,.jpg,.png' },
  label: { type: String, default: '' },
  maxSize: { type: Number, default: 10 },
})

const emit = defineEmits(['file-selected'])

const fileInput = ref(null)
const isDragging = ref(false)
const selectedFile = ref(null)
const srMessage = ref('')

function triggerInput() {
  fileInput.value?.click()
}

function handleFileChange(e) {
  const file = e.target.files[0]
  if (file) processFile(file)
}

function handleDrop(e) {
  isDragging.value = false
  const file = e.dataTransfer.files[0]
  if (file) processFile(file)
}

function processFile(file) {
  if (file.size > props.maxSize * 1024 * 1024) {
    const errorMsg = `Erro: Arquivo muito grande. Máximo: ${props.maxSize}MB`
    srMessage.value = errorMsg
    alert(errorMsg)
    return
  }
  selectedFile.value = file
  srMessage.value = `Arquivo selecionado: ${file.name}, tamanho ${formatSize(file.size)}.`
  emit('file-selected', file)
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}
</script>

<style scoped>
.tui-upload {
  background: var(--bg-surface);
  border: 2px dashed var(--border-active);
  border-radius: var(--radius-md);
  padding: 40px 28px;
  text-align: center;
  cursor: pointer;
  transition:
    border-color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
  font-family: var(--font-mono);
  user-select: none;
}

.tui-upload:hover {
  border-color: var(--info);
  background: var(--info-bg);
}

.tui-upload--active {
  border-color: var(--accent) !important;
  background: var(--accent-bg) !important;
}

.tui-upload--done {
  border-color: var(--accent);
  border-style: solid;
  background: var(--accent-bg);
}

.tui-upload__input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.tui-upload__icon {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: var(--sp-md);
}

.tui-upload__label {
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 1rem;
  margin-bottom: var(--sp-xs);
}

.tui-upload__hint {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: var(--sp-md);
}

.tui-upload__formats,
.tui-upload__maxsize {
  color: var(--text-secondary);
  font-size: 0.8rem;
  opacity: 0.7;
}

/* ── Done state ── */
.tui-upload__done-icon {
  color: var(--accent);
  font-size: 2.5rem;
  margin-bottom: var(--sp-sm);
}

.tui-upload__filename {
  color: var(--accent-light);
  font-size: 1rem;
  margin-bottom: var(--sp-xs);
  word-break: break-all;
}

.tui-upload__filesize {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: var(--sp-sm);
}

.tui-upload__change {
  color: var(--text-secondary);
  font-size: 0.8rem;
  opacity: 0.7;
}
</style>
