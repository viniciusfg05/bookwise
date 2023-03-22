import { ContainerHome, ContentStart } from "./styles";
import { useState } from "react";
import { SideBar } from "../../components/sideBar";
import { Content } from "./components/content";
import { FavoriteBooks } from "../../components/favoviteBooks";

export default function Start() {
  return (
    <ContainerHome>
      <ContentStart>

        <SideBar />

        <Content />

        <FavoriteBooks />

      </ContentStart>
    </ContainerHome>
  )
}
