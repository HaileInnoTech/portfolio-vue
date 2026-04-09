<template>
  <section>
    <SectionHeader title="Overview">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"/>
      </svg>
    </SectionHeader>
    <ul class="overview-list">
      <li v-for="(item, i) in overview" :key="i" v-html="item" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { overview } from '../config'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped>
.overview-list {
  font-size: 0.9rem;
  color: var(--ink-secondary);
  line-height: 1.75;
  padding-left: 18px;
}
.overview-list li { margin-bottom: 3px; }
:deep(strong) { color: var(--ink); font-weight: 600; }
</style>
