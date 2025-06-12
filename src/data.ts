import { html } from 'lit-html'
import openInNew from '../public/icons/openInNew'
import { Employment, Project, Skill } from './types'

export const projects: Project[] = [
  {
    heading: 'Fractal',
    description: html`Personal Project - A fractal generator which runs in the
    browser on the GPU.`,
    images: [
      { src: './images/fractal-c.jpg', alt: 'Coloured Julia Set Fractal' }
    ],
    links: {},
    tags: ['JavaScript', 'gpu.js']
  },
  {
    heading: 'QuickShare.dev',
    description: html`Uni Project - A web app to easily share a code files with
    someone else, allowing them to suggest changes in real-time. It uses the
    File System Access API to read/write directly to a local file from the
    browser.`,
    images: [
      { src: './images/quickshare2-c.jpg', alt: 'QuickShare.dev screenshot' }
    ],
    links: {
      github: 'https://github.com/kieran-harte/quickshare.dev'
    },
    tags: ['TypeScript', 'Lit', 'Web Sockets', 'Node.js'],
    action: {
      url: 'https://quickshare.dev',
      text: 'Open',
      icon: openInNew
    }
  },
  {
    heading: 'Glitch Art',
    description: html`University Project - An application which turns regular
    images into glitch art.`,
    images: [{ src: './images/glitch_art-c.jpg', alt: 'Glitch Art' }],
    links: { github: 'https://github.com/kieran-harte/Glitch-Art' },
    tags: ['Processing', 'Java'],
    action: {
      url: 'https://github.com/kieran-harte/Glitch-Art',
      text: 'View Code',
      icon: openInNew
    }
  },
  {
    heading: 'Meeco',
    description: html`Uni Group Project - A mobile app to find local shops which
    are environmentally sustainable. I developed the backend, and contributed to
    the frontend design and development.`,
    images: [{ src: './images/meeco-c.jpg', alt: 'Meeco Logo' }],
    links: {},
    tags: ['React Native', 'Node.js', 'MongoDB']
  }
]

export const employments: Employment[] = [
  {
    logo: { src: './images/oxa.png', alt: 'Oxa logo' },
    date: { startEnd: 'October 2021 - Present', duration: '' },
    role: 'Senior Web Developer',
    company: 'Oxa',
    description: html`I work as a Senior Web Developer at Oxa, a company
      developing software for autonomous vehicles. As part of the Mapping team,
      I am responsible for <b>designing</b>, <b>developing</b>, and
      <b>maintaining web based tools</b> to build and visualise
      <b>3D maps</b> for autonomous vehicles.`,
    tags: ['React', 'Typescript', 'WebGL', 'C++']
  },
  {
    logo: { src: './images/bsu-logo.png', alt: 'Bath Spa University Logo' },
    date: { startEnd: 'May - July 2021', duration: '3 months' },
    role: 'Student Research Associate',
    company: 'Bath Spa University',
    description: html`With the idea and creative direction supplied by the
      research leader, I coded a new <b>cross-platform mobile</b> audio app to
      facilitate creative and interactive musical flow. I used the
      <b>C++</b> framework <b>JUCE</b> and was responsible for
      <b>testing</b> across a range of mobile devices.`,
    tags: ['C++', 'JUCE']
  },
  {
    date: { startEnd: 'Mar - July 2021', duration: '5 months' },
    role: 'Web Developer',
    company: 'for Ximena Alarcón',
    description: html`I worked part-time as a freelance web developer for sound
      artist and academic researcher Ximena Alarcón. My role was to take an
      existing prototype of her app "INTIMAL App" and turn it into a fully
      featured production-ready progressive web app (<b>PWA</b>). I chose to use
      <b>React + MobX</b> for the front-end, hooked up to a
      <b>Firebase</b> real-time database. The app involves
      <b>detecting motion</b> (steps & rotation) and transforming this into an
      auditory experience which is shared with other users in real-time.`,
    tags: ['React', 'MobX', 'Sass', 'Firebase']
  },
  {
    logo: { src: './images/bsu-logo.png', alt: 'Bath Spa University Logo' },
    date: { startEnd: 'Nov - Dec 2020', duration: '1 month' },
    role: 'Research Assistant',
    company: 'Bath Spa University',
    description: html`This work involved researching different technologies for
      creating cross-platform mobile audio apps. I wrote code using several
      different technologies: <b>Swift</b>, <b>React Native</b>,
      <b>C++/JUCE</b>. I then evaluated the developer experience, user
      experience, and audio performance of each.`,
    tags: ['SwiftUI', 'React Native', 'C++ (JUCE)']
  },
  {
    logo: { src: './images/bsu-logo.png', alt: 'Bath Spa University Logo' },
    date: { startEnd: 'Feb - May 2020', duration: '4 months' },
    role: 'Teaching Assistant',
    company: 'Bath Spa University',
    description: html`I assisted with teaching an introductory web development
    module, guiding students who were stuck or having technical issues.`,
    tags: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    logo: { src: './images/reyrey.png', alt: 'Reynolds & Reynolds logo' },
    date: { startEnd: 'Nov 2017 - Apr 2018', duration: '6 months' },
    role: 'Software Developer',
    company: 'Reynolds & Reynolds',
    description: html`This role involved <strong>designing</strong>,
      <strong>developing</strong>, and <strong>testing</strong> software for
      their primary software solution, a dealership management system for
      automotive retailers, written in <strong>COBOL</strong>. It also included
      finding and <strong>fixing bugs</strong> in existing code, maintaining
      thorough <strong>documentation</strong>, and participating in
      <strong>code reviews</strong>.`,
    tags: ['COBOL']
  }
]

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: './icons/skills/html.png'
  },
  {
    name: 'Tailwind',
    icon: './icons/skills/tailwind.svg'
  },
  {
    name: 'Lit',
    icon: './icons/skills/lit.png'
  },
  {
    name: 'React',
    icon: './icons/skills/react.svg'
  },
  {
    name: 'Three.js (+R3F)',
    icon: './icons/skills/threejs.png'
  },
  {
    name: 'JavaScript',
    icon: './icons/skills/js.png'
  },
  {
    name: 'TypeScript',
    icon: './icons/skills/ts.png'
  },
  {
    name: 'Node.js',
    icon: './icons/skills/node.svg'
  },
  {
    name: 'Postman',
    icon: './icons/skills/postman.png'
  },
  {
    name: 'MongoDB',
    icon: './icons/skills/mongodb.png'
  },
  {
    name: 'PostgreSQL',
    icon: './icons/skills/postgres.svg'
  },
  {
    name: 'Figma',
    icon: './icons/skills/figma.png'
  },
  {
    name: 'C++',
    icon: './icons/skills/cpp.svg'
  }
]
