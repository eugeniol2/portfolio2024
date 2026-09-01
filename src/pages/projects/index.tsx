import { asText } from '@prismicio/client'
import React from 'react'

import Projects from 'src/feature/Projects'
import { type ProjectListProps } from 'src/feature/Projects/types/projectsType'
import { createClient } from 'src/prismicio'

const REVALIDATE_IN_SECONDS = 60

const PROJECT_FIELDS = [
  'project.project_title',
  'project.project_description',
  'project.card_image',
  'project.tags',
  'project.project_link',
  'project.github_link'
]

const ProjectsPage: React.FC<ProjectListProps> = ({ projects }) => (
  <Projects projects={projects} />
)

export async function getStaticProps({ previewData }: { previewData: any }) {
  const client = createClient({ previewData })

  try {
    const documents = await client.getAllByType('project', {
      fetch: PROJECT_FIELDS
    })

    const projects = documents.map(document => ({
      uid: document.uid ?? document.id,
      title: document.data.project_title ?? '',
      description: asText(document.data.project_description),
      cardImage: document.data.card_image.url ?? '',
      tags: document.data.tags.map(({ tag }) => tag ?? ''),
      projectUrl: document.data.project_link ?? '',
      projectSourceCode: document.data.github_link ?? ''
    }))

    return {
      props: { projects },
      revalidate: REVALIDATE_IN_SECONDS
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[projects] falha ao buscar projetos no Prismic', error)

    return {
      props: { projects: [] },
      revalidate: REVALIDATE_IN_SECONDS
    }
  }
}

export default ProjectsPage
