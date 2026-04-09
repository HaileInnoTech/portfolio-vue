<template>
  <section>
    <SectionHeader title="Skills">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
      </svg>
    </SectionHeader>
    <table class="skills-table">
      <tr v-for="row in skills" :key="row.category">
        <td class="cat">{{ row.category }}</td>
        <td>
          <div v-if="row.summary" class="summary" v-html="row.summary" />
          <div v-else class="tags">
            <TagBadge v-for="tag in row.tags" :key="tag.label" :label="tag.label" :color="tag.color" />
          </div>
        </td>
      </tr>
    </table>
  </section>
</template>

<script setup lang="ts">
import { skills } from '../config'
import SectionHeader from './SectionHeader.vue'
import TagBadge from './TagBadge.vue'
</script>

<style scoped>
.skills-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.skills-table tr { border-bottom: 1px solid var(--border); }
.skills-table tr:last-child { border-bottom: none; }
.skills-table td {
  padding: 8px 10px;
  vertical-align: middle;
}
.cat {
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--ink-muted);
  width: 160px;
  background: var(--surface-raised);
  white-space: nowrap;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.summary {
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--ink-secondary);
}
:deep(strong) { color: var(--ink); font-weight: 600; }

@media screen and (max-width: 768px) {
  .cat { width: 100px; }
}
</style>
