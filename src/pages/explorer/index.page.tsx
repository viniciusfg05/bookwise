import { Binoculars } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  BooksContainer,
  BooksContent,
  BooksMainConteiner,
  ContainerExplorer,
  ContentExplorer,
  DialogTrigger,
  ExplorerConteiner,
  LiContent,
} from "./styles";
import { GetServerSideProps, GetStaticProps } from "next";
import { prisma } from "@/lib/prisma";
import { AssessmentContent } from "../components/favoviteBooks/styles";
import { RatingStarts } from "../components/ratingStars";
import { Modal } from "./components/modal";
import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"

interface ExplorerProps {
  title: string,
  image: string,
  author: string,
  summary: string,
  totalPages: number,
  id: string
}

interface CategoriesProps {
  id: string;
  name: string;
}

interface ExplorerTypes {
  allBooks: ExplorerProps[]
  allCategorie: CategoriesProps[]
}

import { Nunito } from "next/font/google";
import { Navbar } from "./components/navbar";
import { useEffect, useState } from "react";
import { InputBar } from "../components/inputBar";
import { useRouter } from "next/router";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function Home({ allBooks, allCategorie }: ExplorerTypes) {
  const session = useSession();

  const router = useRouter()

  const {yourEvaluation} = router.query


  return (
    <ContainerExplorer>
      <ContentExplorer>
        <ExplorerConteiner>
          <header>
            <Binoculars size={32} color="#50B2C0" />
            <h2>Explorar</h2>
            <InputBar pageExplorer="pageExplorer" placeholder="Buscar livro ou autor" />
          </header>
          <Navbar allCategorie={allCategorie}/>

          <BooksContainer>
            <section>
              {allBooks.map((book) => (
                <Dialog.Root key={book.id}>
                  <DialogTrigger asChild>

                    <BooksContent typeFor={"page"} className={`${nunito.className}`}>
                      <Image
                        src={book.image}
                        width={108}
                        height={152}
                        alt=""
                      />
                      <BooksMainConteiner typeFor={"page"}>
                        <header>
                          <p>{book.title.slice(0, 50) + (book.title.length > 50 ? "..." : "")}</p>
                          <span>{book.author}</span>
                        </header>
                        <AssessmentContent>
                          <RatingStarts size="1rem" />
                        </AssessmentContent>
                      </BooksMainConteiner>
                    </BooksContent>
                  </DialogTrigger>
                  <Modal book={{ image: book.image, author: book.author, totalPages: book.totalPages, title: book.title, id: book.id }} yourEvaluation={yourEvaluation!} />
                </Dialog.Root>
              ))}

            </section>
          </BooksContainer>
        </ExplorerConteiner>

      </ContentExplorer>
    </ContainerExplorer>
  );

}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { categorie, search } = query

    if(search === undefined) {

      if(categorie == undefined) {
        const allBooks = await prisma.book.findMany({})
    
        const allBooksRes = allBooks.map((books) => {
          return {
            title: books.name,
            image: books.cover_url,
            author: books.author,
            summary: books.summary,
            totalPages: books.total_pages,
            id: books.id
          }
        })
    
        const allCategorie = await prisma.category.findMany({})
    
        return {
          props: {
            allBooks: allBooksRes,
            allCategorie: allCategorie
          },
        }
      } else {
    
        const allBooks = await prisma.book.findMany({
          where: {
            categories: {
              every: {
                name: {
                  contains: String(categorie)
                }
              }
            }
          }
        })
    
        const allBooksRes = allBooks.map((books) => {
          return {
            title: books.name,
            image: books.cover_url,
            author: books.author,
            summary: books.summary,
            totalPages: books.total_pages,
            id: books.id
          }
        })
    
        const allCategorie = await prisma.category.findMany({})
    
    
        return {
          props: {
            allBooks: allBooksRes,
            allCategorie: allCategorie
          },
        }
      }
    } else {
      const searchBasedOnInput = await prisma.book.findMany({
        where: {
          OR: [
            {
              name: {
                contains: String(search),
              }
            },
            {
              author: {
                contains: String(search),
              }
            }
          ]
        }
      })
    
      const getSearchBasedOnInput = searchBasedOnInput.map((books) => {
        return {
          title: books.name,
          image: books.cover_url,
          author: books.author,
          summary: books.summary,
          totalPages: books.total_pages,
          id: books.id
        }
      })
      const allCategorie = await prisma.category.findMany({})
    
      return {
        props: {
          allBooks: getSearchBasedOnInput,
          allCategorie: allCategorie
        },
      }
    }


}
