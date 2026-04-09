<template>
  <div class="cv">
    <CvHeader />
    <main class="body">
      <OverviewSection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
    </main>
    <footer class="cv-footer">
      <nav aria-label="Footer navigation">
        <span>Portfolio</span>
        <span>·</span>
        <span >Hai Le </span>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import CvHeader from './components/CvHeader.vue'
import OverviewSection from './components/OverviewSection.vue'
import WorkExperienceSection from './components/WorkExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
</script>

<style>
/* ═══ DESIGN TOKENS ═══ */
:root {
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --ink: #09090B;
  --ink-secondary: #3F3F46;
  --ink-muted: #71717A;
  --ink-faint: #A1A1AA;

  --surface: #FFFFFF;
  --surface-page: #FAFAFA;
  --surface-raised: #F4F4F5;
  --surface-hover: #E4E4E7;

  --accent: #2563EB;
  --accent-hover: #1D4ED8;
  --accent-soft: #DBEAFE;
  --accent-ink: #1E40AF;

  --border: #E4E4E7;
  --border-strong: #D4D4D8;

  --blue-bg: #EFF6FF;   --blue-ink: #1E40AF;
  --green-bg: #ECFDF5;  --green-ink: #065F46;
  --purple-bg: #F5F3FF; --purple-ink: #5B21B6;
  --amber-bg: #FFFBEB;  --amber-ink: #92400E;
  --rose-bg: #FFF1F2;   --rose-ink: #9F1239;
  --cyan-bg: #ECFEFF;   --cyan-ink: #155E75;

  --radius: 8px;
  --radius-lg: 14px;
}

/* ═══ RESET ═══ */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

body {
  font-family: var(--font-body);
  color: var(--ink);
  background: var(--surface-page);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}

/* ═══ LAYOUT ═══ */
.cv {
  max-width: 880px;
  margin: 28px auto;
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06);
  overflow: hidden;
}

.body {
  padding: 32px 44px 40px;
}

section {
  margin-bottom: 28px;
}
section:last-child { margin-bottom: 0; }

.cv-footer {
  text-align: center;
  padding: 16px;
  font-size: 0.75rem;
  color: var(--ink-faint);
  border-top: 1px solid var(--border);
}
.cv-footer a {
  color: var(--ink-muted);
  text-decoration: none;
}
.cv-footer span { margin: 0 8px; }

/* ═══ PRINT ═══ */
@media print {
  body { background: white; font-size: 13px; }
  .cv { margin: 0; box-shadow: none; border-radius: 0; }
  .body { padding: 20px 28px; }
  section { margin-bottom: 20px; }
}

@media screen and (max-width: 768px) {
  .cv { margin: 0; border-radius: 0; }
  .body { padding: 20px; }
}
@media screen and (max-width: 480px) {
  .body { padding: 16px; }
}
</style>
