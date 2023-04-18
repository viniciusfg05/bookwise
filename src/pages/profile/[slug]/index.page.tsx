import { CaretLeft, MagnifyingGlass, User } from "@phosphor-icons/react";
import { SideBar } from "../../components/sideBar";
import {
  ContainerProfile,
  ContentProfile,
  ProfileConteiner
} from "./styles";
import Link from "next/link"
import { AssessnentsUsers } from "./components/assessnentsUsers";
import { UserProfile } from "./components/userProfile";
import { InputBar } from "../../components/inputBar";

import { Nunito } from "next/font/google";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../api/auth/[...nextauth].api";
import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const nunito = Nunito({
  subsets: ["latin"],
});

const dayjs = require('dayjs');
require('dayjs/locale/pt-br');
require('dayjs/plugin/relativeTime');

dayjs.locale('pt-br');
dayjs.extend(require('dayjs/plugin/relativeTime'));

interface reviewsProps {
  id: string,
  rate: number,
  description: string,
  created_at: any,
  user: {
    id: string,
    name: string,
    created_at: Date,
    avatar_url: string,
  },
  book: {
    id: string,
    name: string,
    summary: string,
    author: string,
    total_pages: number,
    image: string,
    created_at: Date,
    categorie: Array<string>,
  }
}

export interface allRatingProps {
  id: string,
  rate: number,
  description: string,
  created_at: any,
  book: {
    id: string,
    name: string,
    summary: string,
    author: string,
    total_pages: number,
    image: string,
    created_at: Date,
    categorie: Array<string>,
  }
}

interface userReviewsProps {
  userReviews: {
    rating: reviewsProps[]
  },
  allRating: allRatingProps[]
}

export default function Profile({ userReviews, allRating }: userReviewsProps) {
  const session = useSession()
  const router = useRouter()
  return (
    <ContainerProfile className={`${nunito.className}`}>
      <ContentProfile>

        <ProfileConteiner>
          {session.data?.user.id === router.query.slug ? (
            <header>
              <User size={32} color="#50B2C0" />
              <h2>Perfil</h2>
            </header>
          ) : (

            <Link href="/start">
              <CaretLeft size={20} color="#50B2C0" />
              <p>voltar</p>
            </Link>

          )}

          <InputBar pageProfile="pageProfile" placeholder="Buscar livro avaliado" />

          <AssessnentsUsers userReviews={userReviews} allRating={allRating} />
        </ProfileConteiner>
        
        <UserProfile userReviews={userReviews} allRating={allRating}/>


      </ContentProfile>
    </ContainerProfile>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  );

  const { search, slug } = query;


  const userReviews = await prisma.user.findMany({
    where: {
      id: String(slug)
    },
    include: {
      ratings: {
        include: {
          user: true,
          book: {
            include: {
              categories: true,
            }
          }
        }
      }
    }
  })

  const [userReviewFormated] = userReviews.map((review) => {
    return {
      rating: review.ratings.map((rating) => {
        return {
          id: rating.id,
          rate: rating.rate,
          description: rating.description,
          created_at: rating.created_at.toISOString(),
          user: {
            id: review.id,
            name: review.name,
            created_at: review.created_at.toISOString(),
            avatar_url: review.avatar_url,
          },
          book: {
            id: rating.book.id,
            name: rating.book.name,
            summary: rating.book.summary,
            author: rating.book.author,
            total_pages: rating.book.total_pages,
            image: rating.book.cover_url,
            created_at: rating.book.created_at.toISOString(),
            categorie: rating.book.categories.map((category) => (
              category.name
            )),
          }
        }
      }),
    }
  })

  const allRating = await prisma.rating.findMany({
    where: {
      user: {
        id: {
          equals: String(slug)
        }
      },
      AND: [
        {
          OR: [
            {
              description: {
                contains: String(search)
              }
            },
            {
              book: {
                name: {
                  contains: String(search)
                }
              }
            },
            {
              book: {
                author: {
                  contains: String(search)
                }
              }
            }
          ]
        }
      ]
    },
    include: {
      book: true
    }
  })

  const allRatingFormated = allRating.map((rating) => {
    return {
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      created_at: rating.created_at.toISOString(),
      book: {
        id: rating.book.id,
        name: rating.book.name,
        summary: rating.book.summary,
        author: rating.book.author,
        total_pages: rating.book.total_pages,
        image: rating.book.cover_url,
        created_at: rating.book.created_at.toISOString(),
      }
    }
  })

  // console.log(JSON.stringify(allRatingFormated, null, 3))
  return {
    props: {
      userReviews: userReviewFormated,
      allRating: allRatingFormated
    }
  }
}

