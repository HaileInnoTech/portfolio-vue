<template>
  <section>
    <SectionHeader title="Education" icon-bg="var(--purple-bg)" icon-color="#7C3AED">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
      </svg>
    </SectionHeader>
    <div v-for="item in education" :key="item.name" class="edu">
      <div>
        <div class="edu-name">{{ item.name }}</div>
        <div v-if="item.sub" class="edu-sub">{{ item.sub }}</div>
      </div>
      <div class="edu-date">{{ item.date }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education } from '../config'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped>
.edu {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
}
.edu-name { font-weight: 600; font-size: 0.92rem; color: var(--ink); }
.edu-sub  { font-size: 0.83rem; color: var(--ink-muted); margin-top: 2px; }
.edu-date {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--ink-muted);
  white-space: nowrap;
}

@media screen and (max-width: 768px) {
  .edu { flex-direction: column; gap: 2px; }
}
</style>
