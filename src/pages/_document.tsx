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

import createEmotionCache from 'src/app/createEmotionCache'
import images from 'src/images'

import { type MyAppProps } from './_app'

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[]
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="emotion-insertion-point" content="" />
        <meta name="title" content="Eugênio Araújo portfolio" />
        <meta name="description" content="Portfolio de eugenio araújo" />
        <meta name="author" content="Eugênio Dorneles das Chagas Araújo" />
        <meta
          name="keywords"
          content="Desenvolvedor Front-End, Programador Web, Engenharia de Software, Desenvolvimento Web, React.js, Next.js, React Native, JavaScript, HTML5, CSS3, TypeScript, Material-UI, Redux, Tailwind CSS, Bootstrap, Git, Webpack, Babel, Design Responsivo, Desenvolvimento Mobile, Desenvolvimento Full-Stack, API Integration, Otimização de Desempenho, Projetos de Código Aberto, Portfólio de Programador, Freelance Developer, Iniciante em Desenvolvimento Web, Portfólio de Programação"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
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
