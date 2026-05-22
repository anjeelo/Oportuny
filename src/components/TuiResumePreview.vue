<template>
  <div class="resume-preview">
    <TuiBox title="CURRÍCULO GERADO" variant="highlight">
      
      <!-- Personal Info -->
      <section class="section" aria-labelledby="resume-personal">
        <h3 id="resume-personal" class="section-header">
          <span aria-hidden="true">══ </span>DADOS PESSOAIS<span aria-hidden="true"> ══</span>
        </h3>
        <div class="field"><span class="field-label">Nome:</span> {{ data.name }}</div>
        <div class="field"><span class="field-label">Email:</span> {{ data.email }}</div>
        <div class="field" v-if="data.phone"><span class="field-label">Tel:</span> {{ data.phone }}</div>
        <div class="field" v-if="data.city"><span class="field-label">Cidade:</span> {{ data.city }}</div>
      </section>

      <!-- Summary -->
      <section class="section" v-if="data.summary" aria-labelledby="resume-summary">
        <h3 id="resume-summary" class="section-header">
          <span aria-hidden="true">══ </span>RESUMO PROFISSIONAL<span aria-hidden="true"> ══</span>
        </h3>
        <div class="section-text">{{ data.summary }}</div>
      </section>

      <!-- Education -->
      <section class="section" v-if="data.education?.length" aria-labelledby="resume-edu">
        <h3 id="resume-edu" class="section-header">
          <span aria-hidden="true">══ </span>EDUCAÇÃO<span aria-hidden="true"> ══</span>
        </h3>
        <div class="item" v-for="(edu, i) in data.education" :key="i">
          <div class="item-marker"><span aria-hidden="true">&gt; </span>{{ edu.degree }}</div>
          <div class="item-sub">  {{ edu.institution }} ({{ edu.period }})</div>
          <div class="item-sub" v-if="edu.gpa">  Média: {{ edu.gpa }}</div>
        </div>
      </section>

      <!-- Skills -->
      <section class="section" v-if="data.skills?.length" aria-labelledby="resume-skills">
        <h3 id="resume-skills" class="section-header">
          <span aria-hidden="true">══ </span>HABILIDADES<span aria-hidden="true"> ══</span>
        </h3>
        <div class="skills-list" role="list">
          <span class="skill-tag" v-for="(skill, i) in data.skills" :key="i" role="listitem">
            <span aria-hidden="true">[</span>{{ skill }}<span aria-hidden="true">]</span>
          </span>
        </div>
      </section>

      <!-- Projects -->
      <section class="section" v-if="data.projects?.length" aria-labelledby="resume-projects">
        <h3 id="resume-projects" class="section-header">
          <span aria-hidden="true">══ </span>PROJETOS<span aria-hidden="true"> ══</span>
        </h3>
        <div class="item" v-for="(proj, i) in data.projects" :key="i">
          <div class="item-marker"><span aria-hidden="true">&gt; </span>{{ proj.name }}</div>
          <div class="item-sub">  {{ proj.description }}</div>
          <div class="item-tech">  Stack: {{ proj.tech }}</div>
        </div>
      </section>

      <!-- Disciplines -->
      <section class="section" v-if="data.disciplines?.length" aria-labelledby="resume-disc">
        <h3 id="resume-disc" class="section-header">
          <span aria-hidden="true">══ </span>DISCIPLINAS RELEVANTES<span aria-hidden="true"> ══</span>
        </h3>
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
</script>

<style scoped>
.resume-preview {
  font-family: var(--font-mono);
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.section:last-child {
  margin-bottom: 0;
}

.section-header {
  color: var(--blue-bright);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.field {
  margin-bottom: 2px;
}

.field-label {
  color: var(--text-dim);
}

.section-text {
  color: var(--text);
  line-height: 1.6;
  font-size: 0.9rem;
}

.item {
  margin-bottom: 10px;
}

.item-marker {
  color: var(--green);
}

.item-sub {
  color: var(--text-dim);
  font-size: 0.9rem;
}

.item-tech {
  color: var(--blue-bright);
  font-size: 0.85rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  color: var(--green);
  font-size: 0.85rem;
  border: 1px solid var(--green-dark);
  padding: 2px 8px;
  display: inline-block;
}

.disciplines-grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
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
  color: var(--text-dim);
  opacity: 0.3;
  margin: 0 4px;
  overflow: hidden;
  flex: 1;
}

.disc-grade {
  flex-shrink: 0;
  font-size: 0.9rem;
}

.grade-high { color: var(--green); }
.grade-mid { color: var(--blue-bright); }
.grade-low { color: var(--red); }
</style>
