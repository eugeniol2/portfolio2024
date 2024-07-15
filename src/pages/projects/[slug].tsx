// pages/[slug].js
import React from 'react'
import { useRouter } from 'next/router'
import { Box, Typography, Container, Chip } from '@mui/material'
import { createClient } from 'src/prismicio'
import { asText } from '@prismicio/client'
import { Project } from 'src/feature/Projects/types/projectsType'

type Params = { uid: string }

const ProjectPage = ({ project }: { project: Project }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  console.log(project)
  return (
    <Container>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          {project.title}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          {project.description}
        </Typography>
      </Box>
    </Container>
  )
}

export async function getStaticPaths() {
  const client = createClient()

  const documents = await client.getAllByType('project')

  const paths = documents.map(doc => ({
    params: { slug: doc.uid }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }: { params: Params }) {
  const client = createClient()

  try {
    const response = await client.getByUID('project', '1')

    if (!response) {
      return { notFound: true }
    }
    const project = {
      uid: response.uid,
      title: response.data.project_title ?? '',
      description: asText(response.data.project_description) ?? '',
      cardImage: response.data.card_image.url ?? '',
      images: response.data.project_images.map(image => image.image.url),
      tags: response.data.tags.map(tag => tag.tag) ?? []
    }

    return {
      props: { project },
      revalidate: 1
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default ProjectPage
