import Head from 'next/head'
import React from 'react'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eugenio.vercel.app'

const SITE_NAME = 'Eugênio Araújo'
const LOCALE = 'pt_BR'
const OG_IMAGE_PATH = '/og-image.png'
const OG_IMAGE_WIDTH = '1200'
const OG_IMAGE_HEIGHT = '630'
const OG_IMAGE_ALT =
  'Eugênio Araújo, desenvolvedor full-stack. React, Next.js, TypeScript, Node.js e PostgreSQL.'

interface SeoProps {
  title: string
  description: string
  path: string
}

const Seo: React.FC<SeoProps> = ({ title, description, path }) => {
  const canonicalUrl = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}${OG_IMAGE_PATH}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
    </Head>
  )
}

export default Seo
