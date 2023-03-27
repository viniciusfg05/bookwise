import { ContainerHome, ContentStart } from "./styles";
import { useState } from "react";
import { Content } from "./components/content";
import { SideBar } from "../components/sideBar";
import { FavoriteBooks } from "../components/favoviteBooks";
import { useRouter } from 'next/router'

export default function Start() {
  
  return (
    <ContainerHome>
      <ContentStart>

        <SideBar />

        <Content />

        <FavoriteBooks />

      </ContentStart>
    </ContainerHome>
  );
}
