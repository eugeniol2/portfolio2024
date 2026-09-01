export interface Project {
  uid: string
  title: string
  description: string
  cardImage: string
  projectUrl: string
  projectSourceCode: string
  tags: string[]
}

export interface ProjectListProps {
  projects: Project[]
}
