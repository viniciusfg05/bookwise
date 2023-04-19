import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { SideBar } from "./components/sideBar";
import { ContentStart, ContainerHome } from "./start/styles";
import { AppConteiner, AppContent } from "./styles";
import "dayjs/locale/pt-br";
const dayjs = require('dayjs');
require('dayjs/locale/pt-br');
require('dayjs/plugin/relativeTime');

dayjs.locale('pt-br');
dayjs.extend(require('dayjs/plugin/relativeTime'));

import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
});
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { BooksProvider } from "@/context/dataContext";
GlobalStyles();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { route } = useRouter()

  return (

    <SessionProvider session={session}>
      <BooksProvider >
        <AppConteiner>

          <AppContent className={`${nunito.className}`}>
            <SideBar hiden={route === "/" ? true : false} />

            <Component {...pageProps} className={`${nunito.className}`} />
          </AppContent>
        </AppConteiner>
      </BooksProvider>
    </SessionProvider>

  );
}
