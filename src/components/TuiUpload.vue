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
    @keydown.enter="triggerInput"
  >
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      class="tui-upload__input"
      @change="handleFileChange"
      aria-hidden="true"
    />

    <template v-if="!selectedFile">
      <div class="tui-upload__icon">
        <div>┌──────┐</div>
        <div>│ FILE │</div>
        <div>│  ↑   │</div>
        <div>└──────┘</div>
      </div>
      <div class="tui-upload__label">{{ label || 'Arraste seu arquivo aqui' }}</div>
      <div class="tui-upload__hint">ou clique para selecionar</div>
      <div class="tui-upload__formats">Formatos: {{ accept || '*' }}</div>
      <div class="tui-upload__maxsize">Tamanho máximo: {{ maxSize }}MB</div>
    </template>

    <template v-else>
      <div class="tui-upload__done-icon">✓</div>
      <div class="tui-upload__filename">{{ selectedFile.name }}</div>
      <div class="tui-upload__filesize">{{ formatSize(selectedFile.size) }}</div>
      <div class="tui-upload__change">Clique para trocar o arquivo</div>
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
    alert(`Arquivo muito grande. Máximo: ${props.maxSize}MB`)
    return
  }
  selectedFile.value = file
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
  border: 2px dashed var(--border);
  padding: 32px 24px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;
  font-family: var(--font-mono);
  user-select: none;
}

.tui-upload:hover {
  border-color: var(--blue-bright);
  background: rgba(36, 110, 130, 0.05);
}

.tui-upload--active {
  border-color: var(--green) !important;
  background: rgba(181, 221, 164, 0.05) !important;
}

.tui-upload--done {
  border-color: var(--green);
  border-style: solid;
}

.tui-upload__input {
  display: none;
}

.tui-upload__icon {
  color: var(--border);
  font-size: 0.9rem;
  line-height: 1.3;
  margin-bottom: 16px;
}

.tui-upload__label {
  color: var(--text);
  font-size: 1rem;
  margin-bottom: 4px;
}

.tui-upload__hint {
  color: var(--text-dim);
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.tui-upload__formats,
.tui-upload__maxsize {
  color: var(--text-dim);
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Done state */
.tui-upload__done-icon {
  color: var(--green);
  font-size: 2rem;
  margin-bottom: 8px;
}

.tui-upload__filename {
  color: var(--green);
  font-size: 1rem;
  margin-bottom: 4px;
  word-break: break-all;
}

.tui-upload__filesize {
  color: var(--text-dim);
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.tui-upload__change {
  color: var(--text-dim);
  font-size: 0.8rem;
  opacity: 0.7;
}

.tui-upload:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 2px;
}
</style>
