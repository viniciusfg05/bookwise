import { BookmarkSimple, BookOpen } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../../../styles/stitches.config";
import { Books } from "../books";
import {
  BookContent,
  BookDetail,
  ContentInfo,
  DialogContent,
  Divide,
  Infos,
} from "./styles";

import { Nunito } from "next/font/google";

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
      </DialogContent>
    </Dialog.Portal>
  );
}
