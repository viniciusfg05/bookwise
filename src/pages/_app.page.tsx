import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { GlobalStyles } from "../styles/global";

const nunito = Nunito({
  subsets: ["latin"],
});

GlobalStyles();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
