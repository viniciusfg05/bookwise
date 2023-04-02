import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { SideBar } from "../components/sideBar";
import {
  ContainerProfile,
  ContentProfile,
  ProfileConteiner
} from "./styles";
import Link from "next/link"
import { AssessnentsUsers } from "./components/assessnentsUsers";
import { UserProfile } from "./components/userProfile";
import { InputBar } from "../components/inputBar";

export default function Profile() {
  return (
    <ContainerProfile>
      <ContentProfile>
        {/* <SideBar /> */}

        <ProfileConteiner>
          {/* <header>
            <User size={32} color="#50B2C0" />
            <h2>Perfil</h2>
          </header> */}

          <Link href="">
            <CaretLeft size={20} color="#50B2C0" />
            <p>voltar</p>
          </Link>

          <InputBar pageProfile="pageProfile" placeholder="Buscar livro avaliado"/>

          <AssessnentsUsers />
        </ProfileConteiner>

        <UserProfile />

      </ContentProfile>
    </ContainerProfile>
  );
}
