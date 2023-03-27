
import Image from "next/image";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import { RatingStarts } from "@/pages/components/ratingStars";
import { Divider, ProfileStyled, UserProfileContainer, UserProfileContent } from "./styles";
import { AvatarProfile } from "@/pages/components/avatar";
import { BookmarkSimple, BookOpen, Books } from "@phosphor-icons/react";

export function UserProfile() {
  return (
    <UserProfileContainer>
    <UserProfileContent>
      <ProfileStyled>
        <AvatarProfile image="" hideProfile="false"/>
        <cite>
          <strong>Cristofer Rosser</strong>
          <p>membro desde 2019</p>
        </cite>
      </ProfileStyled>

      <Divider />

      <ul>
        <li>
          <BookOpen />
          <header>
            <strong>3853</strong>
            <span>Páginas lidas</span>
          </header>
        </li>

        <li>
          <Books />
          <header>
            <strong>10</strong>
            <span>Livros avaliados</span>
          </header>
        </li>

        <li>
          <BookmarkSimple />
          <header>
            <strong>Computação</strong>
            <span>Categoria mais lida</span>
          </header>
        </li>
      </ul>
    </UserProfileContent>
  </UserProfileContainer>
  )
}