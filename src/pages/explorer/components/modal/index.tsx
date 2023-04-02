import { BookmarkSimple, BookOpen, Check, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../../../styles/stitches.config";
import { Books } from "../books";
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
import { BooksContent, BooksMainConteiner } from "../../styles";
import { AssessmentContent } from "@/pages/components/favoviteBooks/styles";
import { CreateAreview } from "@/pages/components/createAreview";

const nunito = Nunito({
  subsets: ["latin"],
});

interface ModalProps {
  id: string;
  image: string;
  title: string;
  totalPages: number;
  author: string;
  category?: string[];
}

export interface ModalType {
  book?: ModalProps
  yourEvaluation: string[] | string;
}

export function Modal({ book, yourEvaluation }: ModalType) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <DialogContent className={`${nunito.className}`}>
        <BookDetail>
          <BookContent>
            <BooksContent typeFor={"modal"} className={`${nunito.className}`}>
              <Image src={book?.image!} width={108} height={152} alt="" />
              <BooksMainConteiner typeFor={"modal"}>
                <header>
                  <strong>{book?.title}</strong>
                  <span>{book?.author}</span>
                </header>

                <AssessmentContent>
                  <RatingStarts size="1rem" />
                  <p>{`${3} avaliações`}</p>
                </AssessmentContent>
              </BooksMainConteiner>
            </BooksContent>

            <Infos>
              <ContentInfo>
                <BookmarkSimple />
                <article>
                  <p>Categoria</p>
                  <strong>Computação, educação</strong>
                </article>
              </ContentInfo>

              <ContentInfo>
                <BookOpen />
                <article>
                  <p>Paginas</p>
                  <strong>{book?.totalPages}</strong>
                </article>
              </ContentInfo>
            </Infos>
          </BookContent>
        </BookDetail>

        <AssessmentsContent>
          <header>
            <p>Avaliações</p>
            <button>Avaliar</button>
          </header>

          <CreateAreview yourEvaluation={yourEvaluation} book={book} />


          <Assessments>
            <header>
              <Profile>
                <AvatarProfile image="" hideProfile="false" />
                <cite>
                  <strong>Vinicius Ferreira</strong>
                  <time>Hoje</time>
                </cite>
              </Profile>

              <RatingStarts size="1rem" />
            </header>

            <body>
              <p>Tortor sed elementum dolor sed nunc elementum enim viverra. Massa tempus ac a adipiscing at cursus senectus dui libero. Elementum lacus enim viverra arcu at ut amet convallis. Maecenas ac fringilla blandit risus nibh praesent sagittis dapibus netus. Dignissim sed congue sed vel faucibus purus dapibus pellentesque.</p>
            </body>
          </Assessments>

          <Assessments>
            <header>
              <Profile>
                <AvatarProfile image="" hideProfile="false" />
                <cite>
                  <strong>Vinicius Ferreira</strong>
                  <time>Hoje</time>
                </cite>
              </Profile>

              <RatingStarts size="1rem" />
            </header>

            <body>
              <p>Tortor sed elementum dolor sed nunc elementum enim viverra. Massa tempus ac a adipiscing at cursus senectus dui libero. Elementum lacus enim viverra arcu at ut amet convallis. Maecenas ac fringilla blandit risus nibh praesent sagittis dapibus netus. Dignissim sed congue sed vel faucibus purus dapibus pellentesque.</p>
            </body>
          </Assessments>

          <Assessments>
            <header>
              <Profile>
                <AvatarProfile image="" hideProfile="false" />
                <cite>
                  <strong>Vinicius Ferreira</strong>
                  <time>Hoje</time>
                </cite>
              </Profile>

              <RatingStarts size="1rem" />
            </header>

            <body>
              <p>Tortor sed elementum dolor sed nunc elementum enim viverra. Massa tempus ac a adipiscing at cursus senectus dui libero. Elementum lacus enim viverra arcu at ut amet convallis. Maecenas ac fringilla blandit risus nibh praesent sagittis dapibus netus. Dignissim sed congue sed vel faucibus purus dapibus pellentesque.</p>
            </body>
          </Assessments>

        </AssessmentsContent>
      </DialogContent>
    </Dialog.Portal>
  );
}
