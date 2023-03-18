import { getCssText } from '@/styles/stitches.config'
import { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyles } from "../styles/global";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
