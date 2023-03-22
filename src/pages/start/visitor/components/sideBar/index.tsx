import { BackgroundSidebar } from "../../../../components/backgroundSidebar";
import { SignOutLogin } from "../../../../components/signOutLogin";
import { ConteinerSideBar, ContentSidebar, LiContent } from "./styles";
import Logo from "../../../../../../assets/books/logo.svg";
import Image from "next/image"
import Link from "next/link"
import { Binoculars, ChartLineUp } from "@phosphor-icons/react";

export function SideBar() {
  return (
    <ConteinerSideBar>
    <BackgroundSidebar />

    <ContentSidebar>

      <Image src={Logo} alt=""/>

      <ul>
        <LiContent activeUrl={{ "@bp2": "mobile", "@bp3": "desktop" }}>
          <Link href={""}>
            <ChartLineUp size={24} />
            Início
          </Link>
        </LiContent>

        <LiContent>
          <Link href={""}>
            <Binoculars size={24} />
            Explorar
          </Link>

        </LiContent>

        <LiContent>
          <Link href={""}>
            <Binoculars size={24} />
            Explorar
          </Link>

        </LiContent>
      </ul>

      <SignOutLogin />
    </ContentSidebar>
  </ConteinerSideBar>
  )
}