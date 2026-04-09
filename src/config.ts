// ============================================================
//  config.ts — Single source of truth for all portfolio data
//  Edit this file to update your CV without touching components
// ============================================================

export interface ContactItem {
    label: string
    value: string
    href?: string
    icon: 'birth' | 'email' | 'phone' | 'github' | 'address' | 'linkedin'
}

export interface WorkExperience {
    date: string
    company: string
    role: string
    body: string
    isCurrent?: boolean
    type: 'company' | 'freelance'
}

export interface SkillRow {
    category: string
    tags: { label: string; color: TagColor }[]
    summary?: string
}

export interface Project {
    name: string
    period: string
    client?: string
    description: string
    members?: number
    position: string
    responsibilities: string[]
    tech: { label: string; color: TagColor }[]
    links?: string[]
    featured?: boolean
    type: 'work' | 'personal'
}

export interface Education {
    name: string
    sub?: string
    date: string
}

export interface Certificate {
    name: string
    date: string
}

export type TagColor =
    | 'blue'
    | 'green'
    | 'purple'
    | 'amber'
    | 'rose'
    | 'cyan'
    | 'orange'
    | 'teal'
    | 'indigo'
    | 'lime'
    | 'pink'
    | 'sky'
    | 'red'
    | 'violet'
    | 'yellow'
    | 'default';

export type Personal = {
    name: string
    title: string
    yoe: string
    avatar: any
    siteUrl: string
}

// ─────────────────────────────────────────
//  PERSONAL INFO
// ─────────────────────────────────────────
import avatarImg from './assets/img/avatar.jpg'

export const personal: Personal = {
    name: 'Le Hoang Hai',
    title: 'Full Stack Developer',
    yoe: '1.5 YoE',
    avatar: avatarImg,
    siteUrl: 'https://google.com/',
}
// ─────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────
export const contacts: ContactItem[] = [
    {label: 'Birth', value: '28/02/2002', icon: 'birth'},
    {label: 'Email', value: 'hai28022002@gmail.com', href: 'mailto:hai28022002@gmail.com', icon: 'email'},
    {label: 'Phone', value: '0702917344', href: 'tel:+84702917344', icon: 'phone'},
    {label: 'Github', value: 'github.com/HaileInnoTech', href: 'https://github.com/HaileInnoTech', icon: 'github'},
    {label: 'Address', value: 'Ho Chi Minh, Vietnam', icon: 'address'},
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/haileinnotech',
        href: 'https://www.linkedin.com/in/haileinnotech/',
        icon: 'linkedin'
    },
]

// ─────────────────────────────────────────
//  OVERVIEW
// ─────────────────────────────────────────
export const overview: string[] = [
    'Software Engineer with <strong>1.5 years of professional experience</strong> in enterprise full-stack development, specializing in <strong>Java, Spring Boot, RESTful API design, Spring Security, and JWT/OAuth2 authentication</strong>.',
    'Proficient in <strong>database integration</strong> using Spring Data JPA and SQL, ensuring scalable and maintainable backend solutions.',
    'Frontend experience with <strong>Vue and TypeScript</strong> provides strong understanding of how backend decisions impact real products.',
    'Familiar with <strong>Design Patterns, Clean Code, and Domain-Driven Design (DDD)</strong>, enabling clean and modular software architecture.',
    'Experienced in <strong>Git-based Agile workflows, Docker, and CI/CD practices</strong>, ensuring smooth team collaboration and reliable deployments.',
    'Quick learner with strong communication skills, focused on contributing to scalable and maintainable Java-based systems.',
];

// ─────────────────────────────────────────
//  WORK EXPERIENCE
// ─────────────────────────────────────────
export const workExperiences: WorkExperience[] = [
    {
        type: 'company',
        date: '10/2025 — 12/2025',
        company: 'Silicon Stack',
        role: 'Software Engineer',
        body: 'Delivered scalable full-stack CRM features with Vue.js and Spring Boot, applying SOLID principles and Clean Architecture while collaborating with cross-functional teams.',
        isCurrent: false,
    },
    {
        type: 'company',
        date: '09/2024 — 09/2025',
        company: 'IVC - ISB Viet Nam',
        role: 'Software Engineer',
        body: 'Developed a full-stack live camera inspection system with Vue.js and Spring Boot, featuring responsive UI, JWT/RBAC security, AI-assisted testing, and automated deployments.',
    },
    {
        type: 'company',
        date: '09/2023 — 12/2023',
        company: 'NaviWorld VietNam',
        role: 'Technical Consultant Internship ',
        body: 'Developed Spring Boot POCs for a leave management system and Power Agent integration, automating workflows and enabling multi-platform queries, while collaborating in an Agile team.',
    },
]

// ─────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────
export const education: Education[] = [
    {
        name: 'Swinburne University of Technology',
        sub: 'Information Technology and Communication Bachelor ',
        date: '09/2021 — 11/2024',
    },
]

// ─────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────
export const skills: SkillRow[] = [
    {
        category: 'Programming Language',
        tags: [
            {label: 'Java', color: 'amber'},
            {label: 'HTML', color: 'blue'},
            {label: 'CSS', color: 'blue'},
            {label: 'JavaScript', color: 'blue'},
            {label: 'TypeScript', color: 'blue'},

        ],
    },
    {
        category: 'CSS Framework',
        tags: [
            {label: 'Bootstrap', color: 'green'},
            {label: 'Tailwind CSS', color: 'green'},
            {label: 'Vuetify', color: 'green'},
            {label: 'Ant Design', color: 'green'}
        ],
    },
    {
        category: 'Backend Framework',
        tags: [
            {label: 'Spring Boot', color: 'lime'},
            {label: 'Spring Security', color: 'lime'},
            {label: 'Spring JPA/Hibernate', color: 'lime'},
        ],
    },
    {
        category: 'Web Framework',
        tags: [
            {label: 'VueJS', color: 'purple'},
            {label: 'Vue Router', color: 'purple'},
            {label: 'Pinia', color: 'purple'},
        ],
    },
    {
        category: 'Database',
        tags: [
            {label: 'MongoDB', color: 'amber'},
            {label: 'PostgreSQL', color: 'amber'},
            {label: 'MySQL', color: 'amber'},
            {label: 'Redis', color: 'amber'},
        ],
    },
    {
        category: 'AI & Dev Tools',
        tags: [
            {label: 'Claude Code', color: 'rose'},
            {label: 'Chat GPT', color: 'rose'},
            {label: 'Cursor AI', color: 'rose'},
            {label: 'GitHub Copilot', color: 'rose'},
        ],
    },
    {
        category: 'IDE',
        tags: [
            {label: 'Visual Studio Code', color: 'default'},
            {label: 'IntelliJ IDEA', color: 'default'},
        ],
    },

    {
        category: 'Source Control',
        tags: [
            {label: 'Git', color: 'cyan'},
            {label: 'Github', color: 'cyan'},
        ],
    },
    {
        category: 'Summary',
        tags: [],
        summary:
            '- <strong>Frontend:</strong> JavaScript, TypeScript, ReactJS, VueJS | State: Pinia, Zustand | Styling: Tailwind CSS, Ant Design, Vuetify.<br>' +
            '- <strong>Backend:</strong> Spring Boot, Restful APIS, Spring Security, JWT, OAuth2, Spring JPA/Hibernate, MySQL, PostgreSQL.<br>' +
            '- <strong>Tools:</strong> Git, Docker, Jenkins',
    },
]

// ─────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────
export const projects: Project[] = [
    {
        type: 'work',
        name: 'Volkswagen CRM',
        period: '10/2025 — 12/2025 ',
        client: 'Volkswagen',
        description: 'Enterprise CRM platform for multiple automotive clients, built on a microfrontend architecture using Vue.js and Spring Boot.',
        members: 10,
        position: 'Full Stack Developer',
        responsibilities: [
            'Implemented full-stack features using Vue.js and Ant Design for frontend and Spring Boot for backend APIs, delivering Volkswagen-specific modules in collaboration with cross-functional teams.',
            'Collaborated with Business Analysts, Backend Engineers, and Project Manager using JIRA to clarify requirements, track tasks, and ensure timely sprint delivery of full-stack client-facing features.',

        ],
        tech: [
            {label: 'VueJS', color: 'blue'},
            {label: 'TypeScript', color: 'blue'},
            {label: 'Ant Design', color: 'green'},
            {label: 'Pinia', color: 'purple'},
            {label: 'Spring Boot', color: 'lime'},
            {label: 'PostgreSQL', color: 'amber'},
        ],
        featured: true,
    },
    {
        type: 'work',
        name: 'TakeX',
        period: '09/2024 — 09/2025',
        client: 'ISB Viet Nam',
        description: 'KOL content creator platform by Vingroup. Creators share content on YouTube, TikTok, Facebook and earn rewards by views. Partners: MB Bank, VPBank, VNPAY, Yody.',
        members: 15,
        position: 'Frontend Developer',
        responsibilities: [
            'Implemented 100+ responsive views from Figma designs using Vue.js and Vuetify.',
            'Designed and implemented full-stack JWT-based authentication and RBAC across 6 user roles.',
            'Maintained codebase and refactored legacy components',
            'Conducted code reviews to ensure quality standards',
        ],
        tech: [
            {label: 'VueJS', color: 'blue'},
            {label: 'TypeScript', color: 'blue'},
            {label: 'Vuetify', color: 'green'},
            {label: 'Pinia', color: 'purple'},
            {label: 'Spring Boot', color: 'lime'},
            {label: 'PostgreSQL', color: 'amber'},
        ],
        featured: true,
    },
    {
        type: 'personal',
        name: 'Backend API ',
        period: '2026',
        links: ['https://spring.cyberpond.online/swagger-ui/index.html'],
        description: 'Practice full backend developer using Spring Boot',
        position: 'Backend Developer',
        responsibilities: [
            'Built a REST API with JWT + Google OAuth2 authentication, role-based access control, and full CRUD for a blog domain (Posts, Comments, Tags, Users).',
            'Implemented secure refresh token rotation with HttpOnly cookies and dynamic filtering via JPA Specifications.',
            'Containerized with multi-stage Docker and documented with Swagger / OpenAPI 3.'
        ],
        tech: [
            {label: 'Spring Boot', color: 'lime'},
            {label: 'Spring Security', color: 'lime'},
            {label: 'Spring JPA/Hibernate', color: 'lime'},
        ],
    },

    {
        type: 'personal',
        name: 'DevOps Infrastructure – Raspberry Pi',
        links: ['https://jenkin.cyberpond.online/', 'https://n8n.cyberpond.online/'],
        period: '2026',
        description: 'Self-hosted Linux server on Raspberry Pi with Nginx as reverse proxy, Docker for containerized application deployment, and SSL/domain setup for secure assets access',
        position: 'Fullstack Developer',
        responsibilities: [
            'Designed and built the full application from scratch',
            'Implemented task management with drag-and-drop, tags, and analytics',
            'Built productivity analytics dashboard with charts and session history',
        ],
        tech: [
            {label: 'Docker', color: 'blue'},
            {label: 'Docker Compose', color: 'blue'},
            {label: 'Linux', color: 'rose'},
            {label: 'CloudFlare', color: 'rose'},
            {label: 'Nginx', color: 'lime'},

        ],
    },

]

// ─────────────────────────────────────────
//  CERTIFICATES
// ─────────────────────────────────────────
export const certificates: Certificate[] = []
