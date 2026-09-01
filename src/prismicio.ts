import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

import slicemachineConfig from '../slicemachine.config.json'

const PRODUCTION_REVALIDATE_SECONDS = 60
const DEVELOPMENT_REVALIDATE_SECONDS = 5

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT ??
  slicemachineConfig.repositoryName

const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'project',
    path: '/projects'
  },
  {
    type: 'project',
    path: '/:uid'
  }
]

export const createClient = (
  clientConfig: prismicNext.CreateClientConfig = {}
) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const revalidate = isProduction
    ? PRODUCTION_REVALIDATE_SECONDS
    : DEVELOPMENT_REVALIDATE_SECONDS

  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes,
    fetchOptions: { next: { revalidate } },
    ...clientConfig
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: clientConfig.previewData,
    req: clientConfig.req
  })

  return client
}
