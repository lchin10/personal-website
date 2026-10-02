export const site = {
  email: 'lukaschin000@gmail.com',
  github: 'https://github.com/lchin10',
  linkedin: 'https://www.linkedin.com/in/lukaschin000/',
};

export const experience = [
  {
    role: 'Software Engineer', org: 'VideoNest', place: 'New York, NY', when: 'Oct 2025 – Mar 2026', link: 'https://videonest.co/',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Prisma'],
    points: [
      'Owned the end-to-end build of a user-facing analytics dashboard pulling from 8 third-party data sources through APIs and daily sync pipelines.',
      'Exposed the normalized data through internal API endpoints and built line and bar charts used by about 2,500 users, replacing a static table.',
      'Fixed full-stack bugs in an Agile/Scrum team to keep rollouts stable.',
    ],
  },
  {
    role: 'Co-founder & Software Engineer', org: 'Celeri', place: 'Remote', when: 'Aug 2024 – Sep 2025', link: 'https://github.com/celeriTeam/celeri',
    stack: ['React Native', 'TypeScript', 'JavaScript', 'Firebase', 'Node.js'],
    points: [
      'Built and shipped a cross-platform mobile app on iOS (TestFlight) and Android (Google Play) to 400+ beta users.',
      'Architected the full backend: database schema, JWT auth flows and REST APIs for user and event management.',
      'Ran beta feedback cycles and UX iterations to improve usability and retention.',
    ],
  },
  {
    role: 'Software Engineering Intern', org: 'Madison Square Garden Entertainment', place: 'New York, NY', when: 'May 2024 – Aug 2024', link: 'https://www.msgentertainment.com/',
    stack: ['TypeScript', 'Sequelize', 'GitHub Actions', 'AWS EC2'],
    points: [
      'Wrote payload schemas for 30+ REST APIs during a backend migration, enabling automated output validation for post-migration testing.',
      'Fixed bugs in an AWS EC2 frontend rewrite through GitHub Actions CI/CD, keeping ticketing flows stable through the production cutover.',
    ],
  },
  {
    role: 'Software Developer', org: 'Castles Unlimited', place: 'Newton, MA', when: 'Sep 2022 – Apr 2024', link: 'https://castlesunlimited.com/',
    stack: ['HTML', 'CSS', 'JavaScript'],
    points: [
      "Built the company's online presence, improving functionality and UI/UX across 6 websites.",
      'Raised overall SEO by 600%.',
    ],
  },
];

type Project = { name: string; blurb: string; stack: string[]; highlight?: string; points?: string[]; link?: string };
export const projects: Project[] = [
  {
    name: 'AI Music Coach',
    blurb: 'A practice app with a team of AI coaches. It reads your sheet music, plans your practice, tracks progress across sessions and adapts to how you play.',
    stack: ['Python', 'TypeScript', 'SQL', 'Next.js'],
    highlight: 'Multi-agent coaching system orchestrated with LangGraph',
    link: 'https://github.com/lchin10/ai-music-coach',
  },
  {
    name: 'Pratt Print App',
    blurb: "A web app for Pratt Institute's 2D print space. Students and alumni send jobs to the digital printers with full control over the printer, paper size, orientation, and more.",
    stack: ['React', 'JavaScript', 'Python', 'SQL'],
    points: ['Built for 5,000+ students and alumni without the bottleneck', 'Worked in collaboration with Pratt Institute\'s print manager'],
  },
  {
    name: 'Smart System for the Visually Impaired',
    blurb: 'A hardware system that helps people with visual impairments navigate safely. Built with a team of five.',
    stack: ['Python', 'C++', 'C'],
    highlight: 'Boston University ECE Senior Design Capstone Project',
    link: 'https://github.com/jas-li/Senior-Design-Smart-Bears',
  },
  {
    name: 'HTAP using Epoxy',
    blurb: 'A hybrid transactional and analytical (HTAP) system that uses Epoxy to bring OLTP and OLAP together.',
    stack: ['Java', 'Docker', 'Kubernetes', 'Python'],
    points: ['Processes datasets at 3 MB/s', 'Integrates OLTP with OLAP using Epoxy', 'Runs in a Docker container orchestrated by Kubernetes'],
    link: 'https://github.com/EC528-Fall-2024/hybrid-tx-analytical-epoxy',
  },
  {
    name: 'Discubble',
    blurb: 'A social app for talking politics, built in Flutter and Firebase with a development team of four.',
    stack: ['Flutter', 'Firebase', 'Node.js'],
    points: [
      "Built and launched a static website to grow the app's online presence",
      'Built a Node.js server to make data easier to manage and access',
      'Added admin login so the team could work together',
    ],
  },
];

export const skills: [string, string[]][] = [
  ['Languages', ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C/C++']],
  ['Frameworks', ['React', 'Next.js', 'React Native', 'FastAPI', 'Node.js']],
  ['AI / ML', ['LangGraph', 'LLMs', 'Multi-agent systems', 'Computer vision', 'OpenCV']],
  ['Tools & infrastructure', ['Docker', 'Kubernetes', 'PostgreSQL', 'Firebase', 'CI/CD', 'Git']],
];

export const coursework = ['Operating Systems', 'Cloud Computing', 'Cybersecurity', 'Databases', 'Full-Stack Software'];
export const clubs = ['High Performance Computing (HPC)', 'Society of Asian Scientists and Engineers (SASE)'];

// Photo first (shown by default), then videos. Climbing clips are muted; piano ones play with sound.
export const climbing = [
  { src: '/img/climb.jpg', alt: 'Lukas on an indoor bouldering wall, one hand on a hold and a laptop in the other' },
  { src: '/media/climb-1.jpg', video: '/media/climb-1.mp4', alt: 'Bouldering clip 1' },
  { src: '/media/climb-2.jpg', video: '/media/climb-2.mp4', alt: 'Bouldering clip 2' },
  { src: '/media/climb-3.jpg', video: '/media/climb-3.mp4', alt: 'Bouldering clip 3' },
];

export const piano = [
  { src: '/img/piano.jpg', alt: 'Lukas playing an upright piano in a white hoodie' },
  { src: '/media/piano-3.jpg', video: '/media/piano-3.mp4', sound: true, alt: 'Lukas playing Liszt on piano', title: 'Liszt - Transcendental Etude No. 4 (Mazeppa)' },
  { src: '/media/piano-2.jpg', video: '/media/piano-2.mp4', sound: true, alt: 'Lukas playing Debussy on piano', title: 'Debussy - Clair de Lune' },
  { src: '/media/piano-1.jpg', video: '/media/piano-1.mp4', sound: true, alt: 'Lukas playing Chopin on piano', title: 'Chopin - Etude Op. 25 No. 5 (Wrong Note)' },
];

// [photo file in public/img, alt text]
export const food = [
  { src: '/img/food-chicken-rice.jpg', alt: 'Hainanese chicken rice with three sauces', title: 'Hainanese chicken rice' },
  { src: '/img/food-mapo.jpg', alt: 'Mapo tofu in a red-rimmed bowl', title: 'Mapo tofu' },
  { src: '/img/food-curry.jpg', alt: 'Thai curry with rice and cucumber', title: 'Thai curry' },
  { src: '/img/food-salmon.jpg', alt: 'Salmon don with scallion and cucumber', title: 'Salmon don' },
  { src: '/img/food-udon.jpg', alt: 'Tan tan udon with soft eggs and bok choy', title: 'Tan tan udon' },
];

export const sewing = [
  { src: '/img/sew-chalk-bag.jpg', alt: 'A chalk bag made from a pink plush, with a webbing belt and buckle', title: 'Turned a plush into a chalk bag for climbing.' },
  { src: '/img/sew-creatures.jpg', alt: 'Two small keychains sewn from dark denim and cream canvas, with jeans buttons for eyes', title: "2 keychains made for my friends' birthdays." },
];

// [big figure, what it means]
export const facts = [
  ['42.5s', 'My Tetris 40-line personal best.'],
  ['1,000+', 'Days in a row on Duolingo, learning Korean and Chinese.'],
  ['Sydney', 'Where I learned to breakdance while studying abroad.'],
];

export const instruments = [
  ['Piano', 'played since I was 7 years old'],
  ['French horn', 'played twice with the New York Pops'],
  ['Trumpet', 'jazz band'],
  ['Guitar', 'for my favorite songs'],
  ['Trombone', "my high school's pit orchestra"],
  ['Flute', "my church's Christmas service"],
  // ['Accordion', 'Christmas jingles in elementary school'],
];

export const fits = [
  ['fit-cardigan', 'Olive cardigan, white tee, washed jeans'],
  ['fit-black-cardigan', 'Black cardigan, graphic tee, grey jeans'],
  ['fit-black', 'Black zip jacket, black tee, washed jeans'],
  ['fit-hoodie', 'Grey hoodie, black pants'],
  ['fit-store', 'Black overshirt, light jeans, green cap'],
];
