import { Binoculars } from "@phosphor-icons/react";
import {
  AssessmentContent,
  BooksContainer,
  BooksContent,
  BooksMainConteiner,
  ContainerExplorer,
  ContentExplorer,
  DialogTrigger,
  ExplorerConteiner,
} from "./styles";
import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prisma";
import { RatingStarts } from "../components/ratingStars";
import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { Nunito } from "next/font/google";
import { Navbar } from "./components/navbar";
import { useContext, useEffect, useState } from "react";
import { InputBar } from "../components/inputBar";
import { useRouter } from "next/router";
import { BooksContext } from "@/context/dataContext";
import { Modal } from "./components/modal";


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

interface CategoriesProps {
  id: string,
  name: string,
}

interface ExplorerProps {
  title: string,
  image: string,
  author: string,
  summary: string,
  totalPages: number,
  id: string
  ratings: RatingProps[]
  categories: CategoriesProps[]
}

interface CategoriesProps {
  id: string;
  name: string;
}

export interface ExplorerTypes {
  allBooks: ExplorerProps[]
  allCategorie?: CategoriesProps[]
}

export default function Home({ allBooks, allCategorie }: ExplorerTypes) {
  const [selectBooks, setSelectBooks] = useState("")

  const {
    dataExplorer,
    setDataExplorerContext
  } = useContext(BooksContext);

  useEffect(() => {
    setDataExplorerContext(allBooks)
  }, [allBooks])

  const router = useRouter()
  const { yourEvaluation } = router.query

  function handleSelectBooks(id: string) {
    setSelectBooks(id)
  }
  console.log(dataExplorer)
  return (
    <ContainerExplorer>
      <ContentExplorer>
        <ExplorerConteiner>
          <header>
            <section>
              <Binoculars size={32} color="#50B2C0" />
              <h2>Explorar</h2>
            </section>
            <InputBar pageExplorer="pageExplorer" placeholder="Buscar livro ou autor" />
          </header>
          {allCategorie ? (

            <Navbar allCategorie={allCategorie!} />
          ): (
            <p>sem dados</p>
          )}

          <BooksContainer>
            { dataExplorer ? (
              <section>

              {dataExplorer.map((book) => (
                <Dialog.Root key={book.id}>
                  <DialogTrigger asChild>
                    <BooksContent typeFor={"page"} className={`${nunito.className}`} onClick={() => handleSelectBooks(book.id)}>
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
                          <RatingStarts rate={book.totalRating} size="1rem" />
                        </AssessmentContent>
                      </BooksMainConteiner>
                    </BooksContent>
                  </DialogTrigger>
                  <Modal book={selectBooks} yourEvaluation={yourEvaluation!}  />
                </Dialog.Root>
              ))}

              </section>

            ) : (
              <h1>Sem dados</h1>
            )}
          </BooksContainer>
        </ExplorerConteiner>

      </ContentExplorer>
    </ContainerExplorer>
  );


}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { categorie, search } = query

  async function FindBooksBasedOnSearches() {
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
      },
      include: {
        categories: true,
        ratings: {
          orderBy: {
            created_at: "desc"
          },
          include: {
            user: true,
          }
        }

      }
    })

    const getSearchBasedOnInput = searchBasedOnInput.map((books) => {
      return {
        title: books.name,
        image: books.cover_url,
        author: books.author,
        summary: books.summary,
        totalPages: books.total_pages,
        id: books.id,
        categories: books.categories.map((categorie) => {
          return {
            id: categorie.id,
            name: categorie.name
          }
        }),
        ratings: books.ratings.map((rating) => {
          return {
            id: rating.id,
            book_id: rating.book_id,
            user_id: rating.user_id,
            rate: rating.rate,
            description: rating.description,
            created_at: rating.created_at.toISOString(),
            user: {
              id: rating.user.id,
              name: rating.user.name,
              avatar_url: rating.user.avatar_url,
              email: rating.user.email,
              created_at: rating.created_at.toISOString(),
            }
          }

        })
      }
    })

    const allCategorie = await prisma.category.findMany({})

    return { getSearchBasedOnInput, allCategorie }
  }

  async function SearchForBooksBasedOnTheSelectedCategory() {
    const allBooks = await prisma.book.findMany({
      where: {
        categories: {
          every: {
            name: {
              contains: String(categorie)
            }
          },
        },
      },
      include: {
        categories: true,
        ratings: {
          orderBy: {
            created_at: "desc"
          },
          include: {
            user: true,
          }
        }

      }

    })

    const allBooksFormated = allBooks.map((books) => {
      return {
        title: books.name,
        image: books.cover_url,
        author: books.author,
        summary: books.summary,
        totalPages: books.total_pages,
        id: books.id,
        categories: books.categories.map((categorie) => {
          return {
            id: categorie.id,
            name: categorie.name
          }
        }),
        ratings: books.ratings.map((rating) => {
          return {
            id: rating.id,
            book_id: rating.book_id,
            user_id: rating.user_id,
            rate: rating.rate,
            description: rating.description,
            created_at: rating.created_at.toISOString(),
            user: {
              id: rating.user.id,
              name: rating.user.name,
              avatar_url: rating.user.avatar_url,
              email: rating.user.email,
              created_at: rating.created_at.toISOString(),
            }
          }

        })
      }
    })

    const allCategorie = await prisma.category.findMany({})

    return { allBooksFormated, allCategorie }
  }

  async function SearchAllBooksWithoutCriteria() {
    const allBooks = await prisma.book.findMany({
      include: {
        categories: true,
        ratings: {
          orderBy: {
            created_at: "desc"
          },
          include: {
            user: true,
          }
        }

      }
    })

    const allBooksFormated = allBooks.map((books) => {
      const calcRating = books.ratings.reduce((acc, value) => acc + value.rate, 0)
      const totalRating = calcRating == null ? 0 : calcRating / books.ratings.length


      return {
        title: books.name,
        image: books.cover_url,
        author: books.author,
        summary: books.summary,
        totalPages: books.total_pages,
        id: books.id,
        totalRating: Number(totalRating.toFixed(1)),
        categories: books.categories.map((categorie) => {
          return {
            id: categorie.id,
            name: categorie.name
          }
        }),
        ratings: books.ratings.map((rating) => {
          return {
            id: rating.id,
            book_id: rating.book_id,
            user_id: rating.user_id,
            rate: rating.rate,
            description: rating.description,
            created_at: rating.created_at.toISOString(),
            user: {
              id: rating.user.id,
              name: rating.user.name,
              avatar_url: rating.user.avatar_url,
              email: rating.user.email,
              created_at: rating.created_at.toISOString(),
            }
          }

        })

      }
    })

    const allCategorie = await prisma.category.findMany({})

    return { allBooksFormated, allCategorie }
  }

  if (search !== undefined) {
    const { getSearchBasedOnInput, allCategorie } = await FindBooksBasedOnSearches()

    return {
      props: {
        allBooks: getSearchBasedOnInput,
        allCategorie: allCategorie
      },
    }
  }

  if (categorie !== undefined) {
    const { allBooksFormated, allCategorie } = await SearchForBooksBasedOnTheSelectedCategory()

    return {
      props: {
        allBooks: allBooksFormated,
        allCategorie: allCategorie
      },
    }
  }

  const { allBooksFormated, allCategorie } = await SearchAllBooksWithoutCriteria()

  return {
    props: {
      allBooks: allBooksFormated,
      allCategorie: allCategorie
    }
  }
}
