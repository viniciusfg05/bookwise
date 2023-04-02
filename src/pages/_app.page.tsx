import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { SideBar } from "./components/sideBar";
import { ContentStart, ContainerHome } from "./start/styles";
import { AppConteiner, AppContent } from "./styles";

import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
});
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
GlobalStyles();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { route } = useRouter()

  return (
      <SessionProvider session={session}>
      <AppConteiner>

        <AppContent className={`${nunito.className}`}>
          <SideBar hiden={route === "/" ? true : false}/>

          <Component {...pageProps} />
        </AppContent>
      </AppConteiner>
      </SessionProvider>
  );
}
