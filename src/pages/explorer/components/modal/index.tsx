import { BookmarkSimple, BookOpen } from "@phosphor-icons/react";
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

import { Nunito } from "next/font/google";
import { AvatarProfile } from "@/pages/components/avatar";
import { RatingStarts } from "@/pages/components/ratingStars";

const nunito = Nunito({
  subsets: ["latin"],
});

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <DialogContent className={`${nunito.className}`}>
        <BookDetail>
          <BookContent>
            <Books typeFor="modal" />

            {/* <Divide /> */}

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
                  <strong>160</strong>
                </article>
              </ContentInfo>
            </Infos>
          </BookContent>
        </BookDetail>

        <AssessmentsContent>
          <header>
            <p>Avaliações</p>
          </header>

          <Assessments>
            <header>
              <Profile>
                <AvatarProfile image="" hideProfile="false"/>
                <cite>
                  <strong>Vinicius Ferreira</strong>
                  <time>Hoje</time>
                </cite>
              </Profile>

              <RatingStarts size="1rem"/>
            </header>

            <body>
              <p>Tortor sed elementum dolor sed nunc elementum enim viverra. Massa tempus ac a adipiscing at cursus senectus dui libero. Elementum lacus enim viverra arcu at ut amet convallis. Maecenas ac fringilla blandit risus nibh praesent sagittis dapibus netus. Dignissim sed congue sed vel faucibus purus dapibus pellentesque.</p>
            </body>
          </Assessments>

          <Assessments>
            <header>
              <Profile>
                <AvatarProfile image="" hideProfile="false"/>
                <cite>
                  <strong>Vinicius Ferreira</strong>
                  <time>Hoje</time>
                </cite>
              </Profile>

              <RatingStarts size="1rem"/>
            </header>

            <body>
              <p>Tortor sed elementum dolor sed nunc elementum enim viverra. Massa tempus ac a adipiscing at cursus senectus dui libero. Elementum lacus enim viverra arcu at ut amet convallis. Maecenas ac fringilla blandit risus nibh praesent sagittis dapibus netus. Dignissim sed congue sed vel faucibus purus dapibus pellentesque.</p>
            </body>
          </Assessments>

          <Assessments>
            <header>
              <Profile>
                <AvatarProfile image="" hideProfile="false"/>
                <cite>
                  <strong>Vinicius Ferreira</strong>
                  <time>Hoje</time>
                </cite>
              </Profile>

              <RatingStarts size="1rem"/>
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
