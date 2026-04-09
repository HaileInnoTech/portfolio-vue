# 🗂️ Portfolio Vue

A **Vue 3 + TypeScript + Vite** project that renders a clean, printable CV/portfolio page. All content is managed from a single `config.ts` file — no need to touch any component to update your CV.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Other commands

```bash
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

---

## 📁 Project Structure

```
portfolio-vue/
├── index.html                        # HTML entry point (Google Fonts loaded here)
├── public/
│   └── photo_2026-02-28_14-23-18.jpg # ← Put your avatar image here
├── src/
│   ├── main.ts                       # Vue app bootstrap
│   ├── env.d.ts                      # Vue/Vite type declarations
│   ├── App.vue                       # Root layout + global CSS design tokens
│   ├── config.ts                     # ✅ All CV data lives here
│   └── components/
│       ├── CvHeader.vue              # Dark header: avatar, name, contact grid
│       ├── ContactIcon.vue           # SVG icons for each contact type
│       ├── SectionHeader.vue         # Reusable section title with icon slot
│       ├── TagBadge.vue              # Colored skill/tech tag pill
│       ├── OverviewSection.vue       # Bullet-point summary
│       ├── WorkExperienceSection.vue # Company + Freelance timeline
│       ├── EducationSection.vue      # Education entries
│       ├── SkillsSection.vue         # Skills table with tag groups
│       ├── ProjectCard.vue           # Single project block (table format)
│       ├── ProjectsSection.vue       # Work projects + Personal projects
│       └── CertificatesSection.vue   # Certificates list
```

---

## ✏️ How to Customize Your CV

**Everything is controlled by `src/config.ts`.** Edit that one file to update the entire portfolio — no component changes needed.

### 1. Personal Info

```ts
export const personal = {
  name: 'Your Name',
  title: 'Your Job Title',
  yoe: '3+ YoE',
  avatar: '/your-photo.jpg',   // place the file in public/
  siteUrl: 'https://yoursite.com',
}
```

### 2. Contact Details

```ts
export const contacts: ContactItem[] = [
  { label: 'Email',   value: 'you@email.com', href: 'mailto:you@email.com', icon: 'email' },
  { label: 'Github',  value: 'github.com/you', href: 'https://github.com/you', icon: 'github' },
  // Available icons: 'birth' | 'email' | 'phone' | 'github' | 'address' | 'linkedin'
]
```

### 3. Work Experience

```ts
export const workExperiences: WorkExperience[] = [
  {
    type: 'company',       // 'company' or 'freelance'
    date: '01/2024 — Present',
    company: 'Acme Corp',
    role: 'Senior Frontend Developer',
    body: 'Short description of what you did.',
    isCurrent: true,       // shows pulsing dot indicator
  },
]
```

### 4. Skills

```ts
export const skills: SkillRow[] = [
  {
    category: 'Web Framework',
    tags: [
      { label: 'Vue 3',    color: 'green' },
      { label: 'React',    color: 'blue' },
      { label: 'Nuxt',     color: 'green' },
    ],
  },
]
```

### 5. Projects

```ts
export const projects: Project[] = [
  {
    type: 'work',          // 'work' or 'personal'
    name: 'My Project',
    period: '01/2024 — Present',
    featured: true,        // highlights with blue border
    client: 'Client Name',
    description: 'What the project does.',
    members: 5,
    position: 'Frontend Developer',
    responsibilities: [
      'Built the dashboard from scratch',
      'Integrated payment gateway',
    ],
    tech: [
      { label: 'Next.js', color: 'blue' },
      { label: 'Tailwind CSS', color: 'green' },
    ],
    link: 'https://myproject.com',  // optional
  },
]
```

---

## 🎨 Tag Colors

Use these values for the `color` field on any tag:

| Value | Preview |
|---|---|
| `blue` | Dark blue on light blue bg |
| `green` | Dark green on light green bg |
| `purple` | Dark purple on light purple bg |
| `amber` | Dark amber on light amber bg |
| `rose` | Dark rose on light rose bg |
| `cyan` | Dark cyan on light cyan bg |
| `orange` | Dark orange on light orange bg |
| `teal` | Dark teal on light teal bg |
| `indigo` | Dark indigo on light indigo bg |
| `lime` | Dark lime on light lime bg |
| `pink` | Dark pink on light pink bg |
| `sky` | Dark sky on light sky bg |
| `red` | Dark red on light red bg |
| `violet` | Dark violet on light violet bg |
| `yellow` | Dark yellow on light yellow bg |
| `default` | Gray on light gray bg |

---

## 🖨️ Print / PDF Export

The layout is print-optimized. To export as PDF:

1. Open the page in Chrome
2. Press `Ctrl+P` / `Cmd+P`
3. Set **Destination** → `Save as PDF`
4. Set **Margins** → `None`
5. Enable **Background graphics**
6. Save

---

## 🛠️ Tech Stack

| | |
|---|---|
| Framework | Vue 3 (Composition API + `<script setup>`) |
| Language | TypeScript |
| Build tool | Vite 5 |
| Fonts | Space Grotesk, DM Sans, JetBrains Mono |
| Styling | Scoped CSS + CSS custom properties (no CSS framework) |

---
