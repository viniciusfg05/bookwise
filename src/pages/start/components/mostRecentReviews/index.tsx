import { AssessmentBook, AssessmentContent, MainContainer, MainContent, MyBooksContainer, MyBooksContent, NameEInfos, ProfileContent } from "./styles";
import { Star, StarHalf } from "@phosphor-icons/react";
import { AvatarProfile } from "@/pages/components/avatar";
import { useState } from "react";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
import Image from "next/image"
import { RatingStarts } from "@/pages/components/ratingStars";
import { useSession } from "next-auth/react";

const dayjs = require('dayjs');
require('dayjs/locale/pt-br');
require('dayjs/plugin/relativeTime');

dayjs.locale('pt-br');
dayjs.extend(require('dayjs/plugin/relativeTime'));

import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
});

interface StartProps {
  rating: string,
  rate: number,
  id: string,
  bookId: string,
  userId: string,
  createdAt: Date,
  user: {
    name: string,
    email: string,
    avatarUrl: string,
    created_at: Date,
    id: string,
  },
  book: {
    name: string,
    author: string,
    coverUrl: string,
    summary: string,
    totalPages: number,
    created_at: Date,
    id: string,
  }
}

export interface StartTypes {
  allRating: StartProps[];
  // thereIsAUserRating: StartProps[];
}

export function Assessment({ allRating }: StartTypes) {
  const session = useSession();
  const [ thereIsAUserRating, setThereIsAUserRating ] = useState(true)


  return (
    <MyBooksContainer >
      <MyBooksContent >
        {allRating.map((rating) => (

          <section>
            <header>
              <ProfileContent>
                <AvatarProfile image={rating.user.avatarUrl}
                  hideProfile="false"
                />

                <NameEInfos>
                  <p>{rating.user.name}</p>
                  <span>{dayjs(rating.createdAt).fromNow()}</span>
                </NameEInfos>
              </ProfileContent>

              <AssessmentContent>
                <RatingStarts size="1rem" />
              </AssessmentContent>
            </header>

            <MainContainer>
              <MainContent>
                <Image src={rating.book.coverUrl} width={108} height={152} alt="" />


                <AssessmentBook>
                  <cite>
                    <strong>{rating.book.name}</strong>
                    <span>{rating.book.author}</span>
                  </cite>

                  <p>{rating.rating}</p>
                </AssessmentBook>
              </MainContent>
            </MainContainer>
          </section>
        ))}

      </MyBooksContent>

    </MyBooksContainer>
  )
}