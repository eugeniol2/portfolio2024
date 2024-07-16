// src/types/Project.ts

export interface Project {
  uid: string
  title: string
  description: string
  cardImage: string
  images: string[]
  tags: string[]
}

export interface ProjectsType {
  projects: Project[]
}
