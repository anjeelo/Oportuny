import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../stores/auth'

import OnboardingView from '../views/OnboardingView.vue'
import QuestionarioView from '../views/QuestionarioView.vue'
import BoletimUploadView from '../views/BoletimUploadView.vue'
import CurriculoUploadView from '../views/CurriculoUploadView.vue'
import LoadingView from '../views/LoadingView.vue'
import ResultadoView from '../views/ResultadoView.vue'
import ResultadoVagasView from '../views/ResultadoVagasView.vue'
import VagasView from '../views/VagasView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', name: 'Onboarding', component: OnboardingView },
  { path: '/questionario', name: 'Questionario', component: QuestionarioView, meta: { requiresAuth: true } },
  { path: '/questionario/boletim', name: 'BoletimUpload', component: BoletimUploadView, meta: { requiresAuth: true } },
  { path: '/questionario/curriculo', name: 'CurriculoUpload', component: CurriculoUploadView, meta: { requiresAuth: true } },
  { path: '/loading', name: 'Loading', component: LoadingView, meta: { requiresAuth: true } },
  { path: '/resultado', name: 'Resultado', component: ResultadoView, meta: { requiresAuth: true } },
  { path: '/resultado/vagas', name: 'ResultadoVagas', component: ResultadoVagasView, meta: { requiresAuth: true } },
  { path: '/vagas', name: 'Vagas', component: VagasView },
  { path: '/login', name: 'Login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated.value) {
    next('/questionario')
  } else {
    next()
  }
})

export default router
