<template>
  <header class="tui-header">
    <div class="header-border-top">┌{{ '─'.repeat(200) }}┐</div>
    <nav class="header-content">
      <router-link to="/onboarding" class="header-logo" aria-label="Oportuni Home">
        OPORTUNI
      </router-link>
      <div class="header-nav" :class="{ open: menuOpen }">
        <span class="separator">│</span>
        <router-link to="/onboarding" class="nav-link" @click="menuOpen = false">HOME</router-link>
        <span class="separator">│</span>
        <router-link to="/vagas" class="nav-link" @click="menuOpen = false">VAGAS</router-link>
        <span class="separator">│</span>
        <router-link to="/login" class="nav-link" @click="menuOpen = false">LOGIN</router-link>
      </div>
      <button class="mobile-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
        {{ menuOpen ? '✕' : '≡' }}
      </button>
    </nav>
    <div class="header-border-bottom">└{{ '─'.repeat(200) }}┘</div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
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
  color: var(--border);
  font-size: 0.75rem;
  line-height: 1;
  overflow: hidden;
  white-space: nowrap;
  height: 12px;
  user-select: none;
}

.header-content {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 44px;
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
  padding: 4px 0;
  transition: color 0.15s;
  position: relative;
}

.nav-link:hover {
  color: var(--text);
  text-decoration: none;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: var(--green);
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
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 12px;
    flex-wrap: wrap;
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
    margin-top: 8px;
  }
  .header-nav.open {
    display: flex;
  }
  .separator {
    display: none;
  }
  .nav-link {
    padding: 6px 0;
    width: 100%;
  }
}
</style>
