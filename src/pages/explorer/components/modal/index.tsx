import { BookmarkSimple, BookOpen, Check, X, XCircle } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../../../styles/stitches.config";
import {
  Assessments,
  AssessmentsContent,
  BookContent,
  BookDetail,
  ContentInfo,
  DialogContent,
  Infos,
  Profile,
} from "./styles";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import Image from "next/image"
import { Nunito } from "next/font/google";
import { AvatarProfile } from "@/pages/components/avatar";
import { RatingStarts } from "@/pages/components/ratingStars";
import { AssessmentContent, BooksContent, BooksMainConteiner } from "../../styles";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import { prisma } from "@/lib/prisma";
import { BooksContext } from "@/context/dataContext";
// import { CreateAreReview } from "../createAreReview";
import { ModalSign } from "./components/modalSign";
import { CreateAreReview } from "../createAreReview";

const dayjs = require('dayjs');
require('dayjs/locale/pt-br');
require('dayjs/plugin/relativeTime');

dayjs.locale('pt-br');
dayjs.extend(require('dayjs/plugin/relativeTime'));

const nunito = Nunito({
  subsets: ["latin"],
});

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

interface ModalProps {
  id: string;
  image: string;
  title: string;
  totalPages: number;
  author: string;
  category?: string[];
  ratings: RatingProps[]
}

export interface ModalType {
  book: string;
  yourEvaluation: string[] | string;
}

export function Modal({ book, yourEvaluation }: ModalType) {
  const {
    dataExplorer,
  } = useContext(BooksContext);

  const find = dataExplorer.filter((books: any) => books.id === book);


  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <DialogContent className={`${nunito.className}`}>
        <BookDetail>
          <BookContent>
            <BooksContent typeFor={"modal"} className={`${nunito.className}`}>
              <Image src={find[0] !== undefined ? find[0].image : ""} width={108} height={152} alt="" />
              <BooksMainConteiner typeFor={"modal"}>
                <header>
                  <strong>{find[0] !== undefined ? find[0].title : ""}</strong>
                  <span>{find[0] !== undefined ? find[0].author : ""}</span>
                </header>

                <AssessmentContent>
                  <RatingStarts rate={find[0] !== undefined ? find[0].totalRating : 0} size="1rem" />
                  <p>{`${find[0] !== undefined ? find[0].ratings.length : ""} avaliações`}</p>

                </AssessmentContent>
              </BooksMainConteiner>
            </BooksContent>

            <Infos>
              <ContentInfo>
                <BookmarkSimple />
                <article>
                  <p>Categoria</p>
                  <strong>{find[0] !== undefined ? find[0].categories[0].name : ""}</strong>
                </article>
              </ContentInfo>

              <ContentInfo>
                <BookOpen />
                <article>
                  <p>Paginas</p>
                  <strong>{find[0] !== undefined ? find[0].totalPages : ""}</strong>
                </article>
              </ContentInfo>
            </Infos>
          </BookContent>
        </BookDetail>

        <AssessmentsContent>
          <header>
            <p>Avaliações</p>
            <Dialog.Root >
              <Dialog.Trigger>
                <button>Avaliar</button>
              </Dialog.Trigger>
              <ModalSign/>
            </Dialog.Root>
          </header>


          <CreateAreReview yourEvaluation={yourEvaluation} book={book} />

          {find[0] && find[0].ratings.map((rating) => (

            <Assessments>
              <header>
                <Profile>
                  <AvatarProfile image={rating.user.avatar_url} hideProfile="false" />
                  <cite>
                    <strong>{rating.user.name}</strong>
                    <time>{dayjs(rating.created_at).fromNow()}</time>
                  </cite>
                </Profile>

                <RatingStarts rate={rating.rate} size="1rem" />
              </header>

              <body>
                <p>{rating.description}</p>
              </body>
            </Assessments>
          ))}
        </AssessmentsContent>
      </DialogContent>

    </Dialog.Portal>
  );
}
