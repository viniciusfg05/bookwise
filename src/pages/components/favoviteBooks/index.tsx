import {
  AssessmentContent,
  ConteinerFavoviteBooks,
  ContentFavoviteBooks,
  FavoritesConteiner,
  FavoritesContent,
  FavoviteBooks,
  FavoviteBooksContent,
} from "./styles";
import { CaretRight } from "@phosphor-icons/react";
import HabitosDeDesenvolvedores from "../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import Image from "next/image";
import Link from "next/link";
import { RatingStarts } from "../ratingStars";

export function FavoriteBooks() {
  return (
    <ConteinerFavoviteBooks>
      <header>
        <p>Livros populares</p>

        <Link href="">
          Ver todos
          <CaretRight size="1rem" />
        </Link>
      </header>

      <FavoritesConteiner>
        <FavoritesContent>
          <section>
            <ContentFavoviteBooks>
              <FavoviteBooksContent>
                <Image
                  src={HabitosDeDesenvolvedores}
                  width={108}
                  height={152}
                  alt=""
                />

                <FavoviteBooks>
                  <header>
                    <p>14 Hábitos de Desenvolvedores Alta...</p>
                    <span>Zeno Rocha</span>
                  </header>
                  <AssessmentContent>
                    <RatingStarts size="1rem" />
                  </AssessmentContent>
                </FavoviteBooks>
              </FavoviteBooksContent>
            </ContentFavoviteBooks>

            <ContentFavoviteBooks>
              <FavoviteBooksContent>
                <Image
                  src={HabitosDeDesenvolvedores}
                  width={108}
                  height={152}
                  alt=""
                />

                <FavoviteBooks>
                  <header>
                    <p>14 Hábitos de Desenvolvedores Alta...</p>
                    <span>Zeno Rocha</span>
                  </header>
                  <AssessmentContent>
                    <RatingStarts size="1rem" />
                  </AssessmentContent>
                </FavoviteBooks>
              </FavoviteBooksContent>
            </ContentFavoviteBooks>
          </section>
        </FavoritesContent>
      </FavoritesConteiner>
    </ConteinerFavoviteBooks>
  );
}
