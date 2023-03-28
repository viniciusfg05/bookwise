import { Binoculars } from "@phosphor-icons/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { SideBar } from "../components/sideBar";
import {
  BooksContainer,
  BooksContent,
  BooksMainConteiner,
  ButtonContent,
  ContainerExplorer,
  ContentExplorer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  ExplorerConteiner,
  LiContent,
} from "./styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FavoriteBooks } from "../components/favoviteBooks";
import HabitosDeDesenvolvedores from "../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import { AssessmentContent } from "../components/favoviteBooks/styles";
import { ContainerHome } from "../styles";
import { ContentStart } from "../start/visitor/styles";
import { RatingStarts } from "../components/ratingStars";
import * as Dialog from '@radix-ui/react-dialog';
import { Books } from "./components/books";
import { Modal } from "./components/modal";


export default function Home() {
  const session = useSession();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  console.log(isDragging);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const distance = (x - startX) * 1.5; // Ajuste a sensibilidade do movimento aqui
    e.currentTarget.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setStartX(0);
  };

  return (
    <ContainerExplorer>
      <ContentExplorer>
        {/* <SideBar /> */}
        <ExplorerConteiner>
          <header>
            <Binoculars size={32} color="#50B2C0" />
            <h2>Explorar</h2>
          </header>
          <nav>
            <ul
              //@ts-ignore
              onMouseDownCapture={handleMouseDown}
              //@ts-ignore
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            // onMouseDownCapture={() => console.log("out")}
            >
              <LiContent variantsStyle>
                <Link href={""}>Todo</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>

              <LiContent variantsStyle="false">
                <Link href={""}>Computação</Link>
              </LiContent>
            </ul>
          </nav>

          <BooksContainer>
            <section>

              <Books typeFor="page"/>
              
              <Books typeFor="page"/>
            </section>
          </BooksContainer>
        </ExplorerConteiner>

      </ContentExplorer>
    </ContainerExplorer>
  );

  // return (
  //   <ContainerExplorer>
  //     <ContentExplorer>
  //       <SideBar />

  //       <ExplorerConteiner>
  //         <header>
  //           <Binoculars size={32} color="#50B2C0" />
  //           <h2>Explorar</h2>
  //         </header>

  //          <nav>
  //           <ul
  //             //@ts-ignore
  //             onMouseDownCapture={handleMouseDown}
  //             //@ts-ignore
  //             onMouseMove={handleMouseMove}
  //             onMouseUp={handleMouseUp}
  //             // onMouseDownCapture={() => console.log("out")}
  //           >
  //             <LiContent variantsStyle>
  //               <Link href={""}>
  //                 Todo
  //               </Link>

  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //             <LiContent variantsStyle="false">
  //               <Link href={""}>
  //                 Computação
  //               </Link>
  //             </LiContent>

  //           </ul>
  //         </nav>

  //           <BooksContainer>
  //             <section>
  //               <BooksContent>
  //                 <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />
  //                 <BooksMainConteiner>
  //                   <header>
  //                     <p>14 Hábitos de Desenvolvedores Alta...</p>
  //                     <span>Zeno Rocha</span>
  //                   </header>
  //                   <AssessmentContent>
  //                     <RatingStarts size="1rem" />
  //                   </AssessmentContent>
  //                 </BooksMainConteiner>
  //               </BooksContent>

  //               <BooksContent>
  //                 <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />
  //                 <BooksMainConteiner>
  //                   <header>
  //                     <p>14 Hábitos de Desenvolvedores Alta...</p>
  //                     <span>Zeno Rocha</span>
  //                   </header>
  //                   <AssessmentContent>
  //                     <RatingStarts size="1rem" />
  //                   </AssessmentContent>
  //                 </BooksMainConteiner>
  //               </BooksContent>

  //               <BooksContent>
  //                 <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />
  //                 <BooksMainConteiner>
  //                   <header>
  //                     <p>14 Hábitos de Desenvolvedores Alta...</p>
  //                     <span>Zeno Rocha</span>
  //                   </header>
  //                   <AssessmentContent>
  //                     <RatingStarts size="1rem" />
  //                   </AssessmentContent>
  //                 </BooksMainConteiner>
  //               </BooksContent>

  //               <BooksContent>
  //                 <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />
  //                 <BooksMainConteiner>
  //                   <header>
  //                     <p>14 Hábitos de Desenvolvedores Alta...</p>
  //                     <span>Zeno Rocha</span>
  //                   </header>
  //                   <AssessmentContent>
  //                     <RatingStarts size="1rem" />
  //                   </AssessmentContent>
  //                 </BooksMainConteiner>
  //               </BooksContent>
  //             </section>
  //           </BooksContainer>

  //       </ExplorerConteiner>
  //     </ContentExplorer>
  //   </ContainerExplorer>
  // );
}
