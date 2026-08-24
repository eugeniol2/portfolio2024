import { asText } from '@prismicio/client'

import Projects from 'src/feature/Projects'
import { type ProjectsType } from 'src/feature/Projects/types/projectsType'
import { createClient } from 'src/prismicio'

/**
 * Rede de seguranca do ISR. A atualizacao imediata vem do webhook do
 * Prismic em `/api/revalidate`.
 */
const REVALIDATE_IN_SECONDS = 60

interface ProjectsProps extends ProjectsType {}

const projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Projects projects={projects} />
    </>
  )
}

export async function getStaticProps({ previewData }: { previewData: any }) {
  const client = createClient({ previewData })

  try {
    const response = await client.getAllByType('project', {
      fetch: [
        'project.project_title',
        'project.project_description',
        'project.project_images',
        'project.card_image',
        'project.tags',
        'project.project_link',
        'project.github_link'
      ]
    })

    const projects = response.map(project => ({
      uid: project.uid,
      title: project.data.project_title ?? '',
      description: asText(project.data.project_description) ?? '',
      cardImage: project.data.card_image.url ?? '',
      tags: project.data.tags.map(tag => tag.tag) ?? [],
      projectUrl: project.data.project_link,
      projectSourceCode: project.data.github_link
    }))

    return {
      props: { projects },
      revalidate: REVALIDATE_IN_SECONDS
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[projects] falha ao buscar projetos no Prismic', error)

    // Precisa devolver `revalidate` tambem aqui: sem isso a pagina vira
    // estatica permanente e nunca mais se recupera de uma falha.
    return {
      props: { projects: [] },
      revalidate: REVALIDATE_IN_SECONDS
    }
  }
}

export default projects
