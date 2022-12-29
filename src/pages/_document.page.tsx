import { getCssText } from '@ignite-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
