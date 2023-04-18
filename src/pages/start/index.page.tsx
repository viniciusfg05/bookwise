import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../api/auth/[...nextauth].api";
import { prisma } from "@/lib/prisma";
import { Content } from "./components/content";
import { ContainerHome, ContentStart } from "./styles";
import { Nunito } from "next/font/google";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { FavoriteBooks } from "./components/favoriteBooks";

require('dayjs/locale/pt-br');
require('dayjs/plugin/relativeTime');

dayjs.locale('pt-br');
dayjs.extend(require('dayjs/plugin/relativeTime'));

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

interface firstRatingProps {
  id: string,
  rate: Number,
  created_at: Date;
  user_id: string;
  book_id: string;
  description: string;
  book: {
    id: string;
    name: string;
    author: string;
    summary: string;
    cover_url: string;
    total_pages: Number;
    created_at: Date;
  }
}

interface CategoriesProps {
  id: string,
  name: string,
}

export interface ExplorerProps {
  title: string,
  image: string,
  author: string,
  summary: string,
  totalPages: number,
  id: string
  ratings: RatingProps[]
  categories: CategoriesProps[]
}

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
  allRating: StartProps[]
  highestRatedBooks?: ExplorerProps[],
  firstRating?: firstRatingProps[],
}

const nunito = Nunito({
  subsets: ["latin"],
});

export default function Start({ allRating, highestRatedBooks, firstRating }: StartTypes) {

  return (
    <ContainerHome >

      <ContentStart className={`${nunito.className}`}>

        <Content allRating={allRating} firstRating={firstRating!} highestRatedBooks={highestRatedBooks}/>

        <FavoriteBooks highestRatedBooks={highestRatedBooks!}/>


      </ContentStart>
    </ContainerHome>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  );

  async function AllGetRating()  {
    const allRatingsAndBookAndUser = await prisma.rating.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        book: true,
        user: true,
      }
    })
  
    const allRatingsAndBookAndUserFormated = allRatingsAndBookAndUser.map((all) => {
      return {
        rating: all.description,
        rate: all.rate,
        id: all.id,
        bookId: all.book_id,
        userId: all.user_id,
        createdAt: all.created_at.toISOString(),
        user: {
          name: all.user.name,
          email: all.user.email,
          avatarUrl: all.user.avatar_url,
          created_at: all.user.created_at.toISOString(),
          id: all.user.id,
        },
        book: {
          name: all.book.name,
          author: all.book.author,
          coverUrl: all.book.cover_url,
          summary: all.book.summary,
          totalPages: all.book.total_pages,
          created_at: all.book.created_at.toISOString(),
          id: all.book.id,
        }
      }
    })

    return allRatingsAndBookAndUserFormated
  }

  async function GettingTheLastUserRating() {
    const LastUserRating = await prisma.rating.findFirst({
      where: {
        user: {
          id: session?.user.id,
        }
      },
      orderBy: {
        created_at: "desc"
      },
      include: {
        book: true
      }
    })
    const obj = [LastUserRating]

    const LastUserRatingFormated = obj.map(firstRating => {
      return {
        id: firstRating?.id,
        rate: firstRating?.rate,
        created_at: String(firstRating?.created_at),
        user_id: firstRating?.user_id,
        book_id: firstRating?.book_id,
        description: firstRating?.description,
        book: {
          id: firstRating?.book.id,
          name: firstRating?.book.name,
          author: firstRating?.book.author,
          summary: firstRating?.book.summary,
          cover_url: firstRating?.book.cover_url,
          total_pages: firstRating?.book.total_pages,
          created_at: String(firstRating?.book.created_at),
        }
      }
    })

    return LastUserRatingFormated
  }

  async function PickUpTheMostPopularBooks() {
    const booksPopular = await prisma.book.findMany({
  
      include: {
        ratings: {
          orderBy: {
            created_at: "desc"
          },
          include: {
            user: true,
          }
        },
        categories: true,
  
      },
      orderBy: {
        ratings: {
          _count: "desc"
        }
      },
      take: 5
    })

    const booksPopularFormated = booksPopular.map((books) => {
      const calcRating = books.ratings.reduce((acc, value) => acc + value.rate, 0)
      const totalRating = calcRating == null ? 0 : calcRating / books.ratings.length
  
  
      return {
        title: books.name,
        image: books.cover_url,
        author: books.author,
        summary: books.summary,
        totalPages: books.total_pages,
        id: books.id,
        totalRating: totalRating,
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

    return booksPopularFormated
  }

  const pickUpTheMostPopularBooks = await PickUpTheMostPopularBooks()
  const gettingTheLastUserRating = await GettingTheLastUserRating()
  const allGetRating = await AllGetRating()

  return {
    props: {
      allRating: allGetRating,
      highestRatedBooks: pickUpTheMostPopularBooks,
      firstRating: gettingTheLastUserRating
    },
  }
}



