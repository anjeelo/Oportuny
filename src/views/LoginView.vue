<template>
  <div class="tui-page login-view">
    <div class="container flex-center" style="min-height: calc(100vh - 70px);">
      <div class="login-wrapper">
        <TuiBox :title="isLogin ? 'LOGIN' : 'REGISTRO'">
          <form class="login-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="loginEmail">EMAIL</label>
              <input
                id="loginEmail"
                type="email"
                v-model="email"
                placeholder="seu@email.com"
                required
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
              />
            </div>

            <div class="form-action">
              <TuiButton variant="primary" size="lg" block>
                {{ isLogin ? 'ENTRAR' : 'REGISTRAR' }}
              </TuiButton>
            </div>
          </form>

          <div class="form-toggle">
            <span class="text-dim" v-if="isLogin">
              Não tem conta?
              <a href="#" @click.prevent="isLogin = false" class="toggle-link">Registre-se</a>
            </span>
            <span class="text-dim" v-else>
              Já tem conta?
              <a href="#" @click.prevent="isLogin = true" class="toggle-link">Entre</a>
            </span>
          </div>
        </TuiBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TuiBox from '../components/TuiBox.vue'
import TuiButton from '../components/TuiButton.vue'

const router = useRouter()
const isLogin = ref(true)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function handleSubmit() {
  if (!isLogin.value && password.value !== confirmPassword.value) {
    alert('As senhas não coincidem!')
    return
  }
  alert(isLogin.value ? 'Login simulado!' : 'Registro simulado!')
  router.push('/onboarding')
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

.form-group label {
  display: block;
  color: var(--text-dim);
  font-size: 0.8rem;
  margin-bottom: 6px;
  letter-spacing: 0.08em;
}

.form-group input {
  width: 100%;
  font-family: var(--font-mono);
  font-size: 1rem;
  background: var(--bg-input);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.15s;
}

.form-group input:focus {
  border-color: var(--green);
}

.form-group input::placeholder {
  color: var(--text-dim);
}

.form-action {
  margin-top: 8px;
}

.form-toggle {
  text-align: center;
  margin-top: 16px;
  font-size: 0.85rem;
}

.toggle-link {
  color: var(--blue-bright) !important;
  text-decoration: underline !important;
  cursor: pointer;
}

.toggle-link:hover {
  color: var(--green) !important;
}
</style>
