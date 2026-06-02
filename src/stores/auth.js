import { ref, watch } from 'vue'

const LOCAL_STORAGE_KEY = 'oportuni_auth'

export const isAuthenticated = ref(localStorage.getItem(LOCAL_STORAGE_KEY) === 'true')

watch(isAuthenticated, (newVal) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, newVal)
})

export function loginMock(email, password) {
  if (email === 'teste@oportuny.com' && password === '123456') {
    isAuthenticated.value = true
    return { success: true }
  }
  return { success: false, message: 'Email ou senha incorretos.' }
}

export function logoutMock() {
  isAuthenticated.value = false
  localStorage.removeItem(LOCAL_STORAGE_KEY)
}
