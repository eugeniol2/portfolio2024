import createEmotionServer from '@emotion/server/create-instance'
import { type AppType } from 'next/app'
import Document, {
  type DocumentContext,
  type DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import * as React from 'react'

import { NO_SCRIPT_REVEAL_CSS } from 'src/app/components/reveal'
import createEmotionCache from 'src/app/createEmotionCache'
import { tokens } from 'src/app/theme/tokens'
import images from 'src/images'

import { type MyAppProps } from './_app'

const SITE_TITLE = 'Eugênio Araújo | Desenvolvedor Full-Stack'
const SITE_DESCRIPTION =
  'Portfólio de Eugênio Dorneles das Chagas Araújo, desenvolvedor full-stack com React, Next.js, TypeScript, Node.js e PostgreSQL.'
const SITE_AUTHOR = 'Eugênio Dorneles das Chagas Araújo'
const SITE_KEYWORDS = [
  'Desenvolvedor Full-Stack',
  'Desenvolvedor Web',
  'Desenvolvimento Mobile',
  'React.js',
  'Next.js',
  'React Native',
  'TypeScript',
  'JavaScript',
  'Material UI',
  'Node.js',
  'Express.js',
  'Prisma ORM',
  'PostgreSQL',
  'APIs REST',
  'Zod',
  'Vitest',
  'Docker',
  'Git',
  'Design Responsivo',
  'Portfólio de Programador',
  'Freelance Developer'
].join(', ')

const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Public+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap'

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[]
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="emotion-insertion-point" content="" />
        <meta name="title" content={SITE_TITLE} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="author" content={SITE_AUTHOR} />
        <meta name="keywords" content={SITE_KEYWORDS} />

        <meta name="theme-color" content={tokens.background} />
        <meta name="color-scheme" content="dark" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={GOOGLE_FONTS_HREF} rel="stylesheet" />
        <link rel="shortcut icon" href={images.favIconData.favIcon.src} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={images.favIconData.favIconApple.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={images.favIconData.favIcon32x32.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={images.favIconData.favIcon16x16.src}
        />

        <noscript>
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: NO_SCRIPT_REVEAL_CSS }}
          />
        </noscript>

        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = async () =>
    await originalRenderPage({
      enhanceApp: (
        App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        }
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags
  }
}
