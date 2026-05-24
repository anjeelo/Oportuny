<template>
  <main class="tui-page login-view" id="main-content">
    <div class="container flex-center" style="min-height: calc(100vh - 70px);">
      <div class="login-wrapper animate-fade-in-up">

        <!-- Terminal Header Decoration -->
        <div class="terminal-header">
          <span class="terminal-dots" aria-hidden="true">
            <span class="dot dot--red"></span>
            <span class="dot dot--yellow"></span>
            <span class="dot dot--green"></span>
          </span>
          <span class="terminal-title">oportuni://auth</span>
        </div>

        <TuiBox :title="isLogin ? 'LOGIN' : 'REGISTRO'" class="login-box">

          <!-- Alert for Error Feedback -->
          <div
            v-if="errorMessage"
            class="form-alert"
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
          <div v-if="isLogin" class="login-helper">
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
  max-width: 440px;
  width: 100%;
}

/* ── Terminal Header ──────────────────────────────────────── */
.terminal-header {
  display: flex;
  align-items: center;
  gap: var(--sp-md);
  background: var(--bg-elevated);
  padding: 10px 16px;
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  border: 1px solid var(--border);
  border-bottom: none;
}

.terminal-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot--red {
  background-color: #e85d4a;
}

.dot--yellow {
  background-color: #d4a053;
}

.dot--green {
  background-color: #50b584;
}

.terminal-title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* ── Login Box (seamless connection) ──────────────────────── */
:deep(.login-box) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

/* ── Form ─────────────────────────────────────────────────── */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-alert {
  margin-bottom: var(--sp-md);
  padding: 10px 14px;
  border: 1px solid var(--primary);
  background: var(--danger-bg);
  color: var(--primary);
  font-size: 0.9rem;
  font-family: var(--font-mono);
  border-radius: var(--radius-sm);
}

.form-toggle {
  text-align: center;
  margin-top: var(--sp-md);
  font-size: 0.85rem;
}

.toggle-link {
  background: none;
  border: none;
  color: var(--info);
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  transition: color var(--duration-fast);
}

.toggle-link:hover {
  color: var(--accent);
}

.login-helper {
  margin-top: 20px;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
  font-family: var(--font-body);
}

.login-helper strong {
  color: var(--text-secondary);
}

.form-group input[aria-invalid="true"] {
  border-color: var(--danger);
}

.form-instruction {
  font-size: 0.85rem;
  line-height: 1.6;
  padding: 10px 14px;
  background: var(--bg-surface);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}
</style>
