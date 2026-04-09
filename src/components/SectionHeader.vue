<template>
  <div class="sh">
    <div class="sh-icon" :style="iconStyle">
      <slot />
    </div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  iconBg?: string
  iconColor?: string
}>()

const iconStyle = computed(() =>
  props.iconBg ? `background: ${props.iconBg}; color: ${props.iconColor};` : ''
)
</script>

<style scoped>
.sh {
  display: flex; align-items: center; gap: 9px;
  margin-bottom: 14px; padding-bottom: 8px;
  border-bottom: 1.5px solid var(--border);
}
.sh-icon {
  width: 26px; height: 26px;
  display: flex; align-items: center; justify-content: center;
  background: var(--accent-soft); color: var(--accent);
  border-radius: 6px; flex-shrink: 0;
}
:deep(svg) { width: 14px; height: 14px; }
h2 {
  font-family: var(--font-heading);
  font-size: 0.88rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1.1px;
  color: var(--ink);
}
</style>
