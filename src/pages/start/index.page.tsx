import { ContainerHome, ContentStart } from "./styles";
import { useState } from "react";
import { Content } from "./components/content";
import { SideBar } from "../components/sideBar";
import { FavoriteBooks } from "../components/favoviteBooks";
import { useSession } from "next-auth/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { prisma } from "@/lib/prisma";

import dayjs from "dayjs";

import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

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
}

export default function Start({allRating}: StartTypes) {
  return (
    <ContainerHome>
      <ContentStart>


        <Content allRating={allRating} />

        <FavoriteBooks />

      </ContentStart>
    </ContainerHome>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allRating = await prisma.rating.findMany()
  const allRatingsAndBookAndUser = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    }
  })

  const all = allRatingsAndBookAndUser.map((all) => {
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
  } )

  const rating = allRating.map(rating =>{
    return {
      rating: rating.description,
      rate: rating.rate,
      id: rating.id,
      bookId: rating.book_id,
      userId: rating.user_id,
      createdAt: String(rating.created_at)
    }
  })

  return {
    props: {
      allRating: all,
    },
  }
}
