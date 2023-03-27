import { BooksContent, BooksMainConteiner } from "./styles";
import Image from "next/image";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import { AssessmentContent } from "@/pages/components/favoviteBooks/styles";
import { RatingStarts } from "@/pages/components/ratingStars";
import * as Dialog from "@radix-ui/react-dialog";
import { ButtonContent, DialogTrigger } from "../../styles";
import { Modal } from "../modal";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

interface BooksProps {
  typeFor: "page" | "modal";
}

export function Books({ typeFor }: BooksProps) {
  if (typeFor === "modal") {
    return (
      <BooksContent typeFor={typeFor} className={`${nunito.className}`}>
        <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />
        <BooksMainConteiner typeFor={typeFor}>
          <header>
            <strong>14 Hábitos de Desenvolvedores Alta...</strong>
            <span>Zeno Rocha</span>
          </header>

          <AssessmentContent>
            <RatingStarts size="1rem" />
            <p>{`${3} avaliações`}</p>
          </AssessmentContent>
        </BooksMainConteiner>
      </BooksContent>
    );
  }

  return (
    <Dialog.Root>
      <DialogTrigger asChild>
        <BooksContent typeFor={typeFor} className={`${nunito.className}`}>
          <Image
            src={HabitosDeDesenvolvedores}
            width={108}
            height={152}
            alt=""
          />
          <BooksMainConteiner typeFor={typeFor}>
            <header>
              <p>14 Hábitos de Desenvolvedores Alta...</p>
              <span>Zeno Rocha</span>
            </header>
            <AssessmentContent>
              <RatingStarts size="1rem" />
            </AssessmentContent>
          </BooksMainConteiner>
        </BooksContent>
      </DialogTrigger>
      <Modal />
    </Dialog.Root>
  );
}
