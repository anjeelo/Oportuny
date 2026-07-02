import { ref, watch } from 'vue'

const FONT_STORAGE_KEY = 'oportuni_large_font'
const CONTRAST_STORAGE_KEY = 'oportuni_high_contrast'

export const isLargeFont = ref(localStorage.getItem(FONT_STORAGE_KEY) === 'true')
export const isHighContrast = ref(localStorage.getItem(CONTRAST_STORAGE_KEY) === 'true')

export function toggleLargeFont() {
  isLargeFont.value = !isLargeFont.value
}

export function toggleHighContrast() {
  isHighContrast.value = !isHighContrast.value
}

watch(isLargeFont, (newVal) => {
  localStorage.setItem(FONT_STORAGE_KEY, newVal)
})

watch(isHighContrast, (newVal) => {
  localStorage.setItem(CONTRAST_STORAGE_KEY, newVal)
})
