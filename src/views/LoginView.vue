<template>
  <main class="tui-page login-view" id="main-content">
    <div class="container flex-center" style="min-height: calc(100vh - 70px);">
      <div class="login-wrapper">
        <TuiBox :title="isLogin ? 'LOGIN' : 'REGISTRO'">
          
          <!-- Alert for Error Feedback -->
          <div 
            v-if="errorMessage" 
            class="form-alert text-red" 
            role="alert" 
            aria-live="assertive"
          >
            [ERRO] {{ errorMessage }}
          </div>

          <form class="login-form" @submit.prevent="handleSubmit" novalidate>
            
            <div v-if="!isLogin" class="form-instruction text-dim" style="margin-bottom: 16px;">
              <p>Simulação: Não é necessário criar conta real.</p>
              <p>Credencial fixa: <strong class="text-text">teste@oportuny.com</strong> / <strong class="text-text">123456</strong></p>
            </div>

            <div class="form-group">
              <label for="loginEmail">EMAIL</label>
              <input
                id="loginEmail"
                type="email"
                v-model="email"
                placeholder="teste@oportuny.com"
                required
                :aria-invalid="!!errorMessage"
              />
            </div>

            <div class="form-group">
              <label for="loginPassword">SENHA</label>
              <input
                id="loginPassword"
                type="password"
                v-model="password"
                placeholder="••••••••"
                required
                :aria-invalid="!!errorMessage"
              />
            </div>

            <div class="form-group" v-if="!isLogin">
              <label for="loginConfirm">CONFIRMAR SENHA</label>
              <input
                id="loginConfirm"
                type="password"
                v-model="confirmPassword"
                placeholder="••••••••"
                required
                :aria-invalid="!!errorMessage"
              />
            </div>

            <div class="form-action">
              <TuiButton variant="primary" size="lg" block type="submit">
                {{ isLogin ? 'ENTRAR' : 'REGISTRAR' }}
              </TuiButton>
            </div>
          </form>

          <div class="form-toggle">
            <span class="text-dim" v-if="isLogin">
              Não tem conta?
              <button class="toggle-link" @click="toggleMode" type="button">Registre-se</button>
            </span>
            <span class="text-dim" v-else>
              Já tem conta?
              <button class="toggle-link" @click="toggleMode" type="button">Entre</button>
            </span>
          </div>
          
          <!-- Helper snippet -->
          <div v-if="isLogin" class="login-helper text-dim text-center" style="margin-top: 20px; font-size: 0.8rem;">
            Dica: Use <strong>teste@oportuny.com</strong> / <strong>123456</strong>
          </div>
        </TuiBox>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'
import { loginMock } from '../stores/auth'

const router = useRouter()
const isLogin = ref(true)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')

function toggleMode() {
  isLogin.value = !isLogin.value
  errorMessage.value = ''
}

function handleSubmit() {
  errorMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Preencha todos os campos obrigatórios.'
    return
  }

  if (!isLogin.value) {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'As senhas não coincidem!'
      return
    }
    // Simulation: redirect directly as if successful registration + login
    alert('Registro simulado! (No MVP usamos as credenciais fixas).')
    email.value = 'teste@oportuny.com'
    password.value = '123456'
    const result = loginMock(email.value, password.value)
    if (result.success) {
      router.push('/questionario')
    }
    return
  }

  const result = loginMock(email.value, password.value)
  if (result.success) {
    router.push('/questionario')
  } else {
    errorMessage.value = result.message
  }
}
</script>

<style scoped>
.login-wrapper {
  max-width: 420px;
  width: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-alert {
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid var(--red);
  background: rgba(255, 16, 31, 0.1);
  font-size: 0.9rem;
}

.form-toggle {
  text-align: center;
  margin-top: 16px;
  font-size: 0.85rem;
}

.toggle-link {
  background: none;
  border: none;
  color: var(--blue-bright) !important;
  text-decoration: underline !important;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.toggle-link:hover {
  color: var(--green) !important;
}

.form-group input[aria-invalid="true"] {
  border-color: var(--red);
  box-shadow: 0 0 0 1px var(--red);
}
</style>
