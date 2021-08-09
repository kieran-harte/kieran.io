import { TemplateResult } from 'lit'

export interface Employment {
  logo?: { src: string; alt: string }
  date: { startEnd: string; duration?: string }
  role: string
  company?: string
  description: TemplateResult
  tags?: string[]
}

export interface Project {
  heading: string
  description: TemplateResult
  images: { src: string; alt: string }[]
  links?: { github?: string; youtube?: string }
  tags: string[]
  action?: { url: string; text: string; icon?: TemplateResult }
}

export interface Skill {
  name: string
  icon: string
  link?: string
}
