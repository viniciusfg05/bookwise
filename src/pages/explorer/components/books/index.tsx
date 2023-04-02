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

interface ExplorerProps {
  title: string,
  image: string,
  author: string,
  summary: string,
  totalPages: number,
  id: string
}

interface BooksProps {
  typeFor: "page" | "modal";
  allBooks: ExplorerProps[]
}

export function Books({ typeFor, allBooks }: BooksProps) {
  // if (typeFor === "modal") {
  //   return (
  //     <BooksContent typeFor={typeFor} className={`${nunito.className}`}>
  //       <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />
  //       <BooksMainConteiner typeFor={typeFor}>
  //         <header>
  //           <strong>14 Hábitos de Desenvolvedores Alta...</strong>
  //           <span>Zeno Rocha</span>
  //         </header>

  //         <AssessmentContent>
  //           <RatingStarts size="1rem" />
  //           <p>{`${3} avaliações`}</p>
  //         </AssessmentContent>
  //       </BooksMainConteiner>
  //     </BooksContent>
  //   );
  // }

  // return (
  //   <>
  //     {allBooks.map((book) => (
  //       <Dialog.Root>
  //         <DialogTrigger asChild>

  //           <BooksContent key={book.id} typeFor={typeFor} className={`${nunito.className}`}>
  //             <Image
  //               src={book.image}
  //               width={108}
  //               height={152}
  //               alt=""
  //             />
  //             <BooksMainConteiner typeFor={typeFor}>
  //               <header>
  //                 <p>{book.title.slice(0, 50) + (book.title.length > 50 ? "..." : "")}</p>
  //                 <span>{book.author}</span>
  //               </header>
  //               <AssessmentContent>
  //                 <RatingStarts size="1rem" />
  //               </AssessmentContent>
  //             </BooksMainConteiner>
  //           </BooksContent>
  //         </DialogTrigger>
  //         <Modal />
  //       </Dialog.Root>
  //     ))}</>
  // );
}
