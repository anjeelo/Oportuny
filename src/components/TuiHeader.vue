<template>
  <header class="tui-header">
    <div class="container">
      <div class="header-border-top" aria-hidden="true">
        <span class="corner">┌</span>
        <span class="fill">{{ '─'.repeat(200) }}</span>
        <span class="corner">┐</span>
      </div>
      
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

      <div class="header-border-bottom" aria-hidden="true">
        <span class="corner">└</span>
        <span class="fill">{{ '─'.repeat(200) }}</span>
        <span class="corner">┘</span>
      </div>
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
  background: var(--bg);
  font-family: var(--font-mono);
}

.header-border-top,
.header-border-bottom {
  display: flex;
  align-items: center;
  color: var(--border);
  font-size: 0.75rem;
  line-height: 1;
  height: 12px;
  user-select: none;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.corner {
  flex-shrink: 0;
}

.fill {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.header-logo {
  color: var(--red);
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.15em;
  flex-shrink: 0;
}
.header-logo:hover {
  color: var(--red-bright);
  text-decoration: none;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 0;
}

.separator {
  color: var(--border);
  margin: 0 12px;
  user-select: none;
}

.nav-link {
  color: var(--text-dim);
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  padding: 4px 6px;
  transition: color 0.15s, background-color 0.15s;
  position: relative;
  background: transparent;
  border: none;
  font-family: inherit;
  cursor: pointer;
  display: inline-block;
}

.nav-link:hover {
  color: var(--text);
  text-decoration: none;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: var(--green);
}

.btn-logout {
  color: var(--red);
}
.btn-logout:hover {
  color: var(--red-bright);
}

.mobile-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 1.3rem;
  cursor: pointer;
  padding: 2px 8px;
  margin-left: auto;
  line-height: 1;
  transition: border-color 0.15s;
}

.mobile-toggle:focus-visible {
  border-color: var(--green);
}

@media (max-width: 768px) {
  .header-content {
    justify-content: space-between;
    flex-wrap: wrap;
    height: auto;
    min-height: 44px;
    padding: 4px 0;
  }
  .mobile-toggle {
    display: block;
  }
  .header-nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0;
    border-top: 1px solid var(--border);
    background: var(--bg);
  }
  .header-nav.open {
    display: flex;
  }
  .separator {
    display: none;
  }
  .nav-link {
    padding: 8px 12px;
    width: 100%;
    text-align: left;
  }
}
</style>
