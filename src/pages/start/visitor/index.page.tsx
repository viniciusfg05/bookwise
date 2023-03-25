import {
  BackgroundSidebar,
  ContainerContent,
  ContainerHome,
  ConteinerFavoviteBooks,
  ConteinerSideBar,
  ContentStart,
} from "./styles";
import sideBar from "../../../../assets/sideBar.svg";
import Image from "next/image";
import ElipseTop from "../../../../assets/elipseTop.svg";
import ElipseCentro from "../../../../assets/elipseCentro.svg";
import ElipseTopLeft from "../../../../assets/elipseTopLeft.svg";
import ElipseBotton from "../../../../assets/elipseBotton.svg";

export default function Start() {
  return (
    <ContainerHome>
      <ContentStart>
        <ConteinerSideBar>
          {/* <Image src={sideBar} alt="" /> */}

          <BackgroundSidebar>
            {/* <Image src={ElipseTop} alt="" />
            <Image src={ElipseCentro} alt="" />
            <Image src={ElipseTopLeft} alt="" />
            <Image src={ElipseBotton} alt="" /> */}
          </BackgroundSidebar>
        </ConteinerSideBar>

        <ContainerContent>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
          <h1>Conteudooooo</h1>
        </ContainerContent>

        <ConteinerFavoviteBooks>
          <h1>Livros favoritos</h1>
        </ConteinerFavoviteBooks>
      </ContentStart>
    </ContainerHome>
  );
}
