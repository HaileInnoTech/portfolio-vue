<template>
  <section v-if="certificates.length > 0 ">
    <SectionHeader title="Certificates" icon-bg="var(--amber-bg)" icon-color="#D97706">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m9 0H7.5m4.5-12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
      </svg>
    </SectionHeader>
    <div v-for="cert in certificates" :key="cert.name" class="edu">
      <div class="edu-name">{{ cert.name }}</div>
      <div class="edu-date">{{ cert.date }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { certificates } from '../config'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped>
.edu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
}
.edu:last-child { border-bottom: none; }
.edu-name { font-weight: 500; font-size: 0.9rem; color: var(--ink); }
.edu-date {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--ink-muted);
  white-space: nowrap;
}
</style>
