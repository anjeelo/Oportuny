<template>
  <div class="resume-preview">
    <TuiBox title="CURRÍCULO GERADO" variant="highlight">

      <!-- Personal Info -->
      <section class="section" aria-labelledby="resume-personal">
        <h3 id="resume-personal" class="section-header">DADOS PESSOAIS</h3>
        <div class="field"><span class="field-label">Nome:</span> {{ data.name }}</div>
        <div class="field"><span class="field-label">Email:</span> {{ data.email }}</div>
        <div class="field" v-if="data.phone"><span class="field-label">Tel:</span> {{ data.phone }}</div>
        <div class="field" v-if="data.city"><span class="field-label">Cidade:</span> {{ data.city }}</div>
      </section>

      <!-- Summary -->
      <section class="section" v-if="data.summary" aria-labelledby="resume-summary">
        <h3 id="resume-summary" class="section-header">RESUMO PROFISSIONAL</h3>
        <div class="section-text">{{ data.summary }}</div>
      </section>

      <!-- Education -->
      <section class="section" v-if="data.education?.length" aria-labelledby="resume-edu">
        <h3 id="resume-edu" class="section-header">EDUCAÇÃO</h3>
        <div class="item" v-for="(edu, i) in data.education" :key="i">
          <div class="item-marker"><span aria-hidden="true">&gt; </span>{{ edu.degree }}</div>
          <div class="item-sub">  {{ edu.institution }} ({{ edu.period }})</div>
          <div class="item-sub item-grade" v-if="edu.gpa">  Média: <span :class="gradeClass(edu.gpa)">{{ edu.gpa }}</span></div>
        </div>
      </section>

      <!-- Skills -->
      <section class="section" v-if="data.skills?.length" aria-labelledby="resume-skills">
        <h3 id="resume-skills" class="section-header">HABILIDADES</h3>
        <div class="skills-list" role="list">
          <span
            class="skill-tag"
            v-for="(skill, i) in data.skills"
            :key="i"
            role="listitem"
            :class="skillColorClass(i, data.skills.length)"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- Projects -->
      <section class="section" v-if="data.projects?.length" aria-labelledby="resume-projects">
        <h3 id="resume-projects" class="section-header">PROJETOS</h3>
        <div class="item" v-for="(proj, i) in data.projects" :key="i">
          <div class="item-marker"><span aria-hidden="true">&gt; </span>{{ proj.name }}</div>
          <div class="item-sub">  {{ proj.description }}</div>
          <div class="item-tech">  Stack: {{ proj.tech }}</div>
        </div>
      </section>

      <!-- Disciplines -->
      <section class="section" v-if="data.disciplines?.length" aria-labelledby="resume-disc">
        <h3 id="resume-disc" class="section-header">DISCIPLINAS RELEVANTES</h3>
        <ul class="disciplines-grid">
          <li class="discipline" v-for="(disc, i) in data.disciplines" :key="i">
            <span class="disc-name">{{ disc.name }}</span>
            <span class="disc-dots" aria-hidden="true">{{ '.'.repeat(Math.max(2, 30 - disc.name.length)) }}</span>
            <span class="disc-grade" :class="gradeClass(disc.grade)">
              <span class="sr-only">Nota </span>{{ disc.grade.toFixed(1) }}
            </span>
          </li>
        </ul>
      </section>

    </TuiBox>
  </div>
</template>

<script setup>
import TuiBox from './TuiBox.vue'

defineProps({
  data: { type: Object, required: true }
})

function gradeClass(grade) {
  if (grade >= 8.5) return 'grade-high'
  if (grade >= 7.0) return 'grade-mid'
  return 'grade-low'
}

function skillColorClass(index, total) {
  const third = Math.ceil(total / 3)
  if (index < third) return 'skill-accent'
  if (index < third * 2) return 'skill-info'
  return 'skill-warm'
}
</script>

<style scoped>
.resume-preview {
  font-family: var(--font-mono);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 28px;
}

.section:last-child {
  margin-bottom: 0;
}

.section-header {
  color: var(--info);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  margin-bottom: var(--sp-sm);
  text-transform: uppercase;
  border-left: 3px solid var(--info);
  padding-left: 12px;
}

.field {
  margin-bottom: var(--sp-xs);
  color: var(--text);
  font-size: 0.9rem;
}

.field-label {
  color: var(--text-secondary);
}

.section-text {
  color: var(--text);
  line-height: 1.7;
  font-size: 0.9rem;
  font-family: var(--font-body);
}

.item {
  margin-bottom: var(--sp-sm);
}

.item-marker {
  color: var(--text-bright);
  font-size: 0.9rem;
}

.item-marker span {
  color: var(--accent);
}

.item-sub {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.item-grade {
  font-size: 0.85rem;
}

.item-tech {
  color: var(--info);
  font-size: 0.85rem;
}

/* ── Skills ─────────────────────────────────────────────── */
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-sm);
}

.skill-tag {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid;
  display: inline-block;
  transition: background var(--duration-fast);
}

.skill-accent {
  color: var(--accent);
  border-color: var(--accent-muted);
  background: var(--accent-bg);
}

.skill-info {
  color: var(--info);
  border-color: var(--border-active);
  background: var(--info-bg);
}

.skill-warm {
  color: var(--warm);
  border-color: rgba(212, 160, 83, 0.3);
  background: var(--warm-bg);
}

/* ── Disciplines ────────────────────────────────────────── */
.disciplines-grid {
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
  list-style: none;
  padding: 0;
  margin: 0;
}

.discipline {
  display: flex;
  align-items: baseline;
  font-size: 0.9rem;
  width: 100%;
}

.disc-name {
  color: var(--text);
  flex-shrink: 1;
  min-width: 0;
  word-break: break-word;
}

.disc-dots {
  color: var(--text-muted);
  opacity: 0.2;
  margin: 0 var(--sp-xs);
  overflow: hidden;
  flex: 1;
}

.disc-grade {
  flex-shrink: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.grade-high { color: var(--accent); }
.grade-mid  { color: var(--info); }
.grade-low  { color: var(--primary); }

/* ── Accessibility ──────────────────────────────────────── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
