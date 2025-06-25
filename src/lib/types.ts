export interface Solution {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  color: string
}

export interface Client {
  id: string
  name: string
  logo: string
  industry: 'banking' | 'oil' | 'government'
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  image: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  expertise: string[]
  image: string
  linkedin?: string
}

export interface ContactForm {
  name: string
  email: string
  company: string
  industry: 'banking' | 'oil' | 'other'
  message: string
  requestDemo: boolean
}