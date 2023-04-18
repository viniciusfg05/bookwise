import {
  AssessmentContent,
  ConteinerFavoviteBooks,
  ContentFavoviteBooks,
  FavoritesConteiner,
  FavoritesContent,
  FavoviteBooks,
  FavoviteBooksContent,
  HeaderStart,
} from "./styles";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";
import HabitosDeDesenvolvedores from "../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RatingStarts } from "@/pages/components/ratingStars";

interface RatingProps {
  id: string,
  rate: number,
  description: string
  created_at: Date,
  book_id: string;
  user_id: string;
  user: {
    id: string,
    name: string,
    avatar_url: string,
    email: string,
    created_at: Date,
  }
}

interface CategoriesProps {
  id: string,
  name: string,
}

export interface ExplorerProps {
  title: string,
  image: string,
  author: string,
  summary: string,
  totalPages: number,
  id: string;
  totalRating?: number;
  ratings: RatingProps[]
  categories: CategoriesProps[]
}

interface FavoriteBooksProps {
  highestRatedBooks: ExplorerProps[]
}

export function FavoriteBooks({highestRatedBooks}: FavoriteBooksProps) {
  const router = useRouter()
  return (
    <>
      <HeaderStart>
        <ChartLineUp size={32} color="#50B2C0" />
        <h2>Inicio</h2>
      </HeaderStart>

      <ConteinerFavoviteBooks>
        <header>
          <p>Livros populares</p>

          <Link href="/explorer">
            Ver todos
            <CaretRight size="1rem" />
          </Link>
        </header>

        <FavoritesConteiner>
          <FavoritesContent>
            <section>
              {highestRatedBooks.map((highestRatedBook) => (

                <ContentFavoviteBooks>
                  <FavoviteBooksContent>
                    <Image
                      src={highestRatedBook.image}
                      width={64}
                      height={94}
                      alt=""
                    />

                    <FavoviteBooks>
                      <header>
                        <p>{highestRatedBook.title.slice(0, 40)}...</p>
                        <span>{highestRatedBook.author}</span>
                      </header>
                      <AssessmentContent>
                        <RatingStarts rate={highestRatedBook.totalRating} size="1rem" />
                      </AssessmentContent>
                    </FavoviteBooks>
                  </FavoviteBooksContent>
                </ContentFavoviteBooks>
              ))}

              {/* <ContentFavoviteBooks>
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
              </ContentFavoviteBooks> */}
            </section>
          </FavoritesContent>
        </FavoritesConteiner>
      </ConteinerFavoviteBooks>
    </>
  );
}
