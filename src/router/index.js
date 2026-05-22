import { createRouter, createWebHistory } from 'vue-router'

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
  { path: '/', redirect: '/onboarding' },
  { path: '/onboarding', name: 'Onboarding', component: OnboardingView },
  { path: '/questionario', name: 'Questionario', component: QuestionarioView },
  { path: '/questionario/boletim', name: 'BoletimUpload', component: BoletimUploadView },
  { path: '/questionario/curriculo', name: 'CurriculoUpload', component: CurriculoUploadView },
  { path: '/loading', name: 'Loading', component: LoadingView },
  { path: '/resultado', name: 'Resultado', component: ResultadoView },
  { path: '/resultado/vagas', name: 'ResultadoVagas', component: ResultadoVagasView },
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

export default router
