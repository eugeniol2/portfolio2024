import { type NextApiRequest, type NextApiResponse } from 'next'

/**
 * Páginas estáticas que dependem de conteúdo do Prismic e precisam ser
 * regeradas quando algo é publicado no repositório.
 */
const PATHS_TO_REVALIDATE = ['/projects']

/**
 * Revalidação on-demand para páginas do Pages Router (`getStaticProps`).
 *
 * Deve ser chamado pelo webhook do Prismic (Settings > Webhooks) com o mesmo
 * segredo definido em `PRISMIC_WEBHOOK_SECRET`. O Prismic envia o segredo no
 * corpo da requisição; `?secret=` também é aceito para testes manuais.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const expectedSecret = process.env.PRISMIC_WEBHOOK_SECRET

  if (!expectedSecret) {
    res
      .status(500)
      .json({ message: 'PRISMIC_WEBHOOK_SECRET is not configured' })
    return
  }

  const receivedSecret = req.body?.secret ?? req.query.secret

  if (receivedSecret !== expectedSecret) {
    res.status(401).json({ message: 'Invalid secret' })
    return
  }

  try {
    for (const path of PATHS_TO_REVALIDATE) {
      await res.revalidate(path)
    }

    res.status(200).json({ revalidated: PATHS_TO_REVALIDATE, now: Date.now() })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[revalidate] falha ao revalidar', error)

    res.status(500).json({ message: 'Error revalidating' })
  }
}
