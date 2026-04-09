<template>
  <span class="tag" :class="`tag--${color}`">{{ label }}</span>
</template>

<script setup lang="ts">
import type { TagColor } from '../config'
defineProps<{ label: string; color?: TagColor }>()
</script>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  white-space: nowrap;
  background: var(--surface-raised);
  color: var(--ink-secondary);
  border: 1px solid var(--border);
}

.tag--blue   { background: var(--blue-bg);   color: var(--blue-ink);   border-color: transparent; }
.tag--green  { background: var(--green-bg);  color: var(--green-ink);  border-color: transparent; }
.tag--purple { background: var(--purple-bg); color: var(--purple-ink); border-color: transparent; }
.tag--amber  { background: var(--amber-bg);  color: var(--amber-ink);  border-color: transparent; }
.tag--rose   { background: var(--rose-bg);   color: var(--rose-ink);   border-color: transparent; }
.tag--cyan   { background: var(--cyan-bg);   color: var(--cyan-ink);   border-color: transparent; }
.tag--orange  { background: #FFF7ED; color: #9A3412; border-color: transparent; }
.tag--teal    { background: #F0FDFA; color: #0F766E; border-color: transparent; }
.tag--indigo  { background: #EEF2FF; color: #3730A3; border-color: transparent; }
.tag--lime    { background: #F7FEE7; color: #3F6212; border-color: transparent; }
.tag--pink    { background: #FDF2F8; color: #9D174D; border-color: transparent; }
.tag--sky     { background: #F0F9FF; color: #0369A1; border-color: transparent; }
.tag--red     { background: #FEF2F2; color: #991B1B; border-color: transparent; }
.tag--violet  { background: #F5F3FF; color: #6D28D9; border-color: transparent; }
.tag--yellow  { background: #FEFCE8; color: #854D0E; border-color: transparent; }
</style>
