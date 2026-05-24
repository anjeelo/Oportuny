<template>
  <header class="tui-header">
    <div class="container header-container">
      <nav class="header-content" aria-label="Navegação principal">
        <router-link to="/onboarding" class="header-logo" aria-label="Oportuni Home">
          OPORTUNI
        </router-link>

        <div class="header-nav" :class="{ open: menuOpen }" id="main-nav">
          <span class="separator" aria-hidden="true">│</span>
          <router-link to="/onboarding" class="nav-link" @click="menuOpen = false">HOME</router-link>
          <span class="separator" aria-hidden="true">│</span>
          <router-link to="/vagas" class="nav-link" @click="menuOpen = false">VAGAS</router-link>
          <span class="separator" aria-hidden="true">│</span>

          <template v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link" @click="menuOpen = false">LOGIN</router-link>
          </template>
          <template v-else>
            <router-link to="/questionario" class="nav-link" @click="menuOpen = false">MEU CV</router-link>
            <span class="separator" aria-hidden="true">│</span>
            <button class="nav-link btn-logout" @click="handleLogout">SAIR</button>
          </template>
        </div>

        <button
          class="mobile-toggle"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-controls="main-nav"
          aria-label="Alternar menu de navegação"
        >
          <span aria-hidden="true">{{ menuOpen ? '✕' : '≡' }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated, logoutMock } from '../stores/auth'

const router = useRouter()
const menuOpen = ref(false)

function handleLogout() {
  logoutMock()
  menuOpen.value = false
  router.push('/login')
}
</script>

<style scoped>
.tui-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 25, 35, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  font-family: var(--font-mono);
}

.header-container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 var(--sp-lg);
  width: 100%;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
}

.header-logo {
  color: var(--primary);
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.2em;
  flex-shrink: 0;
  transition: color var(--duration-fast);
}

.header-logo:hover {
  color: var(--primary-hover);
  text-decoration: none;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 0;
}

.separator {
  color: var(--border);
  margin: 0 var(--sp-sm);
  user-select: none;
  font-size: 0.85rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  padding: var(--sp-xs) var(--sp-sm);
  transition: color var(--duration-fast);
  position: relative;
  background: transparent;
  border: none;
  font-family: inherit;
  cursor: pointer;
  display: inline-block;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: var(--sp-sm);
  right: var(--sp-sm);
  height: 1px;
  background: var(--text);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform var(--duration-normal) var(--ease-out);
}

.nav-link:hover {
  color: var(--text);
  text-decoration: none;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: var(--accent);
}

.nav-link.router-link-active::after,
.nav-link.router-link-exact-active::after {
  background: var(--accent);
  transform: scaleX(1);
}

.btn-logout {
  color: var(--primary);
}

.btn-logout:hover {
  color: var(--primary-hover);
}

.btn-logout::after {
  background: var(--primary);
}

.mobile-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 1.2rem;
  cursor: pointer;
  padding: var(--sp-xs) var(--sp-sm);
  margin-left: auto;
  line-height: 1;
  transition: border-color var(--duration-fast), color var(--duration-fast);
}

.mobile-toggle:hover {
  border-color: var(--border-active);
}

.mobile-toggle:focus-visible {
  border-color: var(--accent);
}

@media (max-width: 768px) {
  .header-content {
    justify-content: space-between;
    flex-wrap: wrap;
    height: auto;
    min-height: 60px;
    padding: var(--sp-xs) 0;
  }

  .mobile-toggle {
    display: block;
  }

  .header-nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--sp-sm) 0;
    border-top: 1px solid var(--border);
    background: var(--bg-surface);
    overflow: hidden;
    transition: max-height var(--duration-normal) var(--ease-out),
                opacity var(--duration-normal) var(--ease-out);
  }

  .header-nav.open {
    display: flex;
  }

  .separator {
    display: none;
  }

  .nav-link {
    padding: var(--sp-sm) var(--sp-md);
    width: 100%;
    text-align: left;
  }

  .nav-link::after {
    display: none;
  }
}
</style>
