<template>
  <div class="project-block" :class="{ featured: project.featured }">
    <div class="project-header">
      <h3>{{ project.name }}</h3>
      <span class="project-period">{{ project.period }}</span>
    </div>
    <table class="project-table">
      <tr v-if="project.client">
        <td>Client</td>
        <td>{{ project.client }}</td>
      </tr>
      <tr v-if="project.links">
        <td>Link</td>
        <td>
          <a
              v-for="(link, index) in project.links"
              :key="index"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              style="margin-right: 8px"
          >
            {{ link }}
          </a>
        </td>
      </tr>
      <tr>
        <td>Descriptions</td>
        <td v-html="project.description" />
      </tr>
      <tr v-if="project.members">
        <td>Number of members</td>
        <td>{{ project.members }}</td>
      </tr>
      <tr>
        <td>Position</td>
        <td>{{ project.position }}</td>
      </tr>
      <tr>
        <td>Responsibilities</td>
        <td>
          <ul>
            <li v-for="(r, i) in project.responsibilities" :key="i" v-html="r" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>Technology in use</td>
        <td>
          <div class="tags">
            <TagBadge
              v-for="tech in project.tech"
              :key="tech.label"
              :label="tech.label"
              :color="tech.color"
              small
            />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../config'
import TagBadge from './TagBadge.vue'
defineProps<{ project: Project }>()
</script>

<style scoped>
.project-block {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 12px;
  transition: border-color 0.15s;
}
.project-block:hover { border-color: var(--border-strong); }
.project-block.featured { border-color: #BFDBFE; }

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: var(--surface-raised);
  border-bottom: 1px solid var(--border);
}
.project-block.featured .project-header {
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
}

.project-header h3 {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink);
}
.project-period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--ink-muted);
}

.project-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}
.project-table tr { border-bottom: 1px solid var(--border); }
.project-table tr:last-child { border-bottom: none; }
.project-table td { padding: 8px 14px; vertical-align: top; }

.project-table td:first-child {
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--ink-muted);
  width: 150px;
  background: var(--surface-raised);
  white-space: nowrap;
}
.project-table td:last-child { color: var(--ink-secondary); line-height: 1.6; }

.project-table ul { padding-left: 15px; margin: 0; }
.project-table li { margin-bottom: 2px; }
:deep(strong) { color: var(--ink); font-weight: 600; }

.tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

@media screen and (max-width: 768px) {
  .project-header { flex-direction: column; gap: 4px; align-items: flex-start; }
  .project-table td:first-child { width: 110px; }
  .project-table td { padding: 6px 10px; }
}
</style>
