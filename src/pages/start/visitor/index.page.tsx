import { BackgroundSidebar, ContainerContent, ContainerHome, ConteinerFavoviteBooks, ConteinerSideBar, ContentStart } from "./styles";
import sideBar from "../../../../assets/sideBar.svg"
import Image from "next/image"

export default function Start() {
  return (
    <ContainerHome>
      <ContentStart>
        
        <ConteinerSideBar>
          <Image src={sideBar} alt="" />

          {/* <BackgroundSidebar /> */}
            
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
  )
}
