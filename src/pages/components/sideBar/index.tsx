import { BackgroundSidebar } from "../backgroundSidebar";
import { SignOutLogin } from "../signOutLogin";
import { ConteinerSideBar, ContentSidebar, LiContent } from "./styles";
import Logo from "../../../../assets/books/logo.svg";
import Image from "next/image"
import Link from "next/link"
import { Binoculars, ChartLineUp, User } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function SideBar() {
  const [ whichRouteToBe, setWhichRouteToBe] = useState();
  const [ activeUrl, SetActiveUrl] = useState({
    "@bp2": "mobile"
  });
  const { route } = useRouter()
  console.log(route)

  useEffect(() => {

  }, [])

  return (
    <ConteinerSideBar>
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

          <LiContent activeUrl={route === "/profile" && "true"}>
            <Link href={"/profile"}>
              <User size={24} />
              Profile
            </Link>

          </LiContent>
        </ul>

        <SignOutLogin />
      </ContentSidebar>
    </ConteinerSideBar>
  )
}