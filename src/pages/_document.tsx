import { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyles } from "../styles/global";
import { getCssText  } from "../styles/stitches.config"
import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
});
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className={`${nunito.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
