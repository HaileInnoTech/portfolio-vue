<template>
  <!-- Company Experience -->
  <section v-if="workExperiences.length > 0">
    <SectionHeader title="Work Experience — Company">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    </SectionHeader>
    <div class="xp-list">
      <div
        v-for="item in companyExp"
        :key="item.company"
        class="xp-item"
        :class="{ current: item.isCurrent }"
      >
        <div class="xp-date">{{ item.date }}</div>
        <div class="xp-co">{{ item.company }}</div>
        <div class="xp-role">{{ item.role }}</div>
        <div class="xp-body">{{ item.body }}</div>
      </div>
    </div>
  </section>

  <!-- Freelance Experience -->
  <section v-if="freelanceExp.length >0">
    <SectionHeader title="Work Experience — Freelance" icon-bg="var(--green-bg)" icon-color="var(--green-ink)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
      </svg>
    </SectionHeader>
    <div class="xp-list freelance-list">
      <div
        v-for="item in freelanceExp"
        :key="item.company"
        class="xp-item freelance-item"
        :class="{ current: item.isCurrent }"
      >
        <div class="xp-date">{{ item.date }}</div>
        <div class="xp-co">{{ item.company }}</div>
        <div class="xp-role">{{ item.role }}</div>
        <div class="xp-body">{{ item.body }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { workExperiences } from '../config'
import SectionHeader from './SectionHeader.vue'

const companyExp  = computed(() => workExperiences.filter(x => x.type === 'company'))
const freelanceExp = computed(() => workExperiences.filter(x => x.type === 'freelance'))
</script>

<style scoped>
.xp-list { display: flex; flex-direction: column; gap: 0; }

.xp-item {
  padding: 10px 14px;
  border-left: 2px solid var(--border);
  position: relative;
  margin-left: 4px;
}
.xp-item:last-child { border-left-color: transparent; }

.xp-item::before {
  content: '';
  position: absolute;
  left: -5px; top: 14px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
}
.xp-item.current::before { box-shadow: 0 0 0 3px rgba(37,99,235,0.15); }
.xp-item.freelance-item::before { background: var(--green-ink); }
.xp-item.freelance-item.current::before { box-shadow: 0 0 0 3px rgba(6,95,70,0.15); }

.xp-date {
  font-family: var(--font-mono);
  font-size: 0.85rem; font-weight: 500;
  color: var(--ink-muted);
}
.xp-co {
  font-family: var(--font-heading);
  font-size: 1rem; font-weight: 700;
  color: var(--ink);
}
.xp-role { font-size: 0.85rem; color: var(--accent); font-weight: 500; margin-bottom: 4px; }
.xp-body { font-size: 0.88rem; color: var(--ink-secondary); line-height: 1.6; }

@media screen and (max-width: 768px) {
  .xp-item { padding: 8px 10px; }
}
</style>
