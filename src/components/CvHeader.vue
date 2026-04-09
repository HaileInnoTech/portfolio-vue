<template>
  <header class="cv-header">
    <img :src="personal.avatar" :alt="personal.name" class="avatar" />
    <div class="h-info">
      <h1>{{ personal.name }}</h1>
      <div class="h-title">
        {{ personal.title }}
        <span class="yoe">{{ personal.yoe }}</span>
      </div>
      <div class="contact-grid">
        <a
          v-for="item in contacts"
          :key="item.label"
          :href="item.href"
          :target="item.href?.startsWith('http') ? '_blank' : undefined"
          rel="noopener"
          class="contact-item"
          :class="{ 'no-link': !item.href }"
        >
          <ContactIcon :icon="item.icon" />
          <span class="label">{{ item.label }}</span>
          <span>{{ item.value }}</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { personal, contacts } from '../config'
import ContactIcon from './ContactIcon.vue'
</script>

<style scoped>
.cv-header {
  position: relative;
  background: linear-gradient(155deg, #0f1b3d 0%, #162952 35%, #111f42 65%, #1a2f5a 100%);
  color: #F1F5F9;
  padding: 32px 40px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 22px;
  align-items: center;
  overflow: hidden;
}

.cv-header::before {
  content: '';
  position: absolute;
  top: -60px; right: -40px;
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(96,165,250,0.25) 0%, transparent 60%);
  border-radius: 50%;
}

.cv-header::after {
  content: '';
  position: absolute;
  bottom: -80px; left: 25%;
  width: 240px; height: 240px;
  background: radial-gradient(circle, rgba(147,197,253,0.15) 0%, transparent 60%);
  border-radius: 50%;
}

.avatar {
  width: 120px; height: 120px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
  border: 2px solid rgba(255,255,255,0.12);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  position: relative; z-index: 1;
}

.h-info { position: relative; z-index: 1; }

.h-info h1 {
  font-family: var(--font-heading);
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.15;
}

.h-title {
  font-size: 1.05rem;
  font-weight: 500;
  color: #93C5FD;
  margin-bottom: 10px;
}

.yoe {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 1px 9px;
  border-radius: 5px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #E2E8F0;
  margin-left: 6px;
  vertical-align: middle;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 16px;
  font-size: 0.82rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(241,245,249,0.75);
  text-decoration: none;
  transition: color 0.15s;
}
.contact-item:hover:not(.no-link) { color: #93C5FD; }
.no-link { cursor: default; }

.label {
  font-weight: 600;
  color: rgba(241,245,249,0.5);
  min-width: 52px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

@media screen and (max-width: 768px) {
  .cv-header {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 28px 20px;
    gap: 16px;
  }
  .avatar { margin: 0 auto; width: 100px; height: 100px; }
  .contact-grid { grid-template-columns: 1fr; text-align: left; }
}
</style>
