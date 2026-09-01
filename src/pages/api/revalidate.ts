import { type NextApiRequest, type NextApiResponse } from 'next'

const PATHS_TO_REVALIDATE = ['/projects']
const ALLOWED_METHOD = 'POST'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== ALLOWED_METHOD) {
    response.setHeader('Allow', ALLOWED_METHOD)
    response.status(405).json({ message: 'Method not allowed' })
    return
  }

  const expectedSecret = process.env.PRISMIC_WEBHOOK_SECRET

  if (!expectedSecret) {
    response
      .status(500)
      .json({ message: 'PRISMIC_WEBHOOK_SECRET is not configured' })
    return
  }

  const receivedSecret = request.body?.secret ?? request.query.secret
  const isAuthorized = receivedSecret === expectedSecret

  if (!isAuthorized) {
    response.status(401).json({ message: 'Invalid secret' })
    return
  }

  try {
    for (const path of PATHS_TO_REVALIDATE) {
      await response.revalidate(path)
    }

    response
      .status(200)
      .json({ revalidated: PATHS_TO_REVALIDATE, now: Date.now() })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[revalidate] falha ao revalidar', error)

    response.status(500).json({ message: 'Error revalidating' })
  }
}
