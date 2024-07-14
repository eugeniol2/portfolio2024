// src/types/Project.ts

export interface Project {
  uid: string
  title: string
  description: string
  image: string
  tags: string[]
}

export interface ProjectsType {
  projects: Project[]
}
