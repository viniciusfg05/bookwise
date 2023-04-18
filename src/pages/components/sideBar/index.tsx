import { BackgroundSidebar } from "../backgroundSidebar";
import { SignOutLogin } from "../signOutLogin";
import { ConteinerSideBar, ContentSidebar, LiContent } from "./styles";
import Logo from "../../../../assets/books/logo.svg";
import Image from "next/image"
import Link from "next/link"
import { Binoculars, ChartLineUp, User } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
});

interface AppProps {
  hiden: boolean;
}

export function SideBar({hiden}: AppProps) {
  const session = useSession();

  function handleMakeSureYouAreloggedInBeforeOfPuch() {

  }

  const { route } = useRouter()
  return (
    <ConteinerSideBar ifNotLoggedInHide={hiden === true ? "true" : undefined} className={`${nunito.className}`}>
      <BackgroundSidebar />

      <ContentSidebar>

        <Image src={Logo} alt="" />

        <ul>
          <LiContent activeUrl={route === "/start" && "true"}>
            <Link href={"/start"}>
              <ChartLineUp size={24} />
              Início
            </Link>
          </LiContent>

          <LiContent activeUrl={route === "/explorer" && "true"}>
            <Link href={"/explorer"}>
              <Binoculars size={24} />
              Explorar
            </Link>

          </LiContent>

          {session.data?.user ? (
            <LiContent activeUrl={route === "/profile/[slug]" && "true"}>
              <Link href={{
                pathname: "/profile/[slug]",
                query: {slug: session.data?.user.id, search: ""}
              }}>
                <User size={24} />
                Profile
              </Link>

            </LiContent>
          ): (
            <LiContent>
              <br />
            </LiContent>
            
          )}
        </ul>
        <SignOutLogin />
      </ContentSidebar>
    </ConteinerSideBar>
  )
}