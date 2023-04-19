
import Image from "next/image";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import { RatingStarts } from "@/pages/components/ratingStars";
import { Divider, HeaderProfile, ProfileStyled, UserProfileContainer, UserProfileContent } from "./styles";
import { AvatarProfile } from "@/pages/components/avatar";
import { BookmarkSimple, BookOpen, Books, User } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import dayjs from "dayjs";
import { allRatingProps } from "../../index.page";

interface RatingProps {
  id: string,
  rate: number,
  description: string,
  created_at: Date,
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

interface reviewsProps {
    id: string,
    name: string,
    created_at: Date,
    avatar_url: string,
    rating: RatingProps[]
}

interface UserProfileProps {
  userReviews: reviewsProps
  allRating: allRatingProps[]
}

interface WordCount {
  [key: string]: number;
}

export function UserProfile({userReviews, allRating}: UserProfileProps) {
  const [ mostRepeatedCategory, setMostRepeatedCategory ] = useState("")
  const [ numberOfBooksReadByTheUser, setNumberOfBooksReadByTheUser ] = useState(0)
  const [ numberOfPagesReadByTheUser, setNmberOfPagesReadByTheUser] = useState(0)
  const session = useSession()

  useEffect(() => {
    const mostRepeatedCategory = whichCategoryIsMostReadByTheUser()
    setMostRepeatedCategory(mostRepeatedCategory)

    const numberOfBooksReadByTheUser = sumNumberOfBooksReadByTheUser()
    setNumberOfBooksReadByTheUser(numberOfBooksReadByTheUser)

    const numberOfPagesReadByTheUser = sumNumberOfPagesReadByTheUser()
    setNmberOfPagesReadByTheUser(numberOfPagesReadByTheUser)
  }, [userReviews])

  function whichCategoryIsMostReadByTheUser() {
    const getCategories = userReviews.rating.map((rating) => {
      return rating.book.categorie
    })
    const groupingCategories = getCategories.map((book) => book.join())

    const mostRepeatedCategory: WordCount = groupingCategories.reduce((count, word) => {
      count[word] = (count[word] || 0) + 1;
      return count;
    }, {} as WordCount);
    
    const maxCount: number = Math.max(...Object.values(mostRepeatedCategory));
    const result: string = Object.keys(mostRepeatedCategory).find(key => mostRepeatedCategory[key] === maxCount)!;

    return result
  }

  function sumNumberOfBooksReadByTheUser() {
    const numberOfBooksReadByTheUser = userReviews.rating.map((rating) => {
      return rating.book.id
    })

    const counts: {[key: string]: number} = {};
    let duplicates = 0;
    for (const id of numberOfBooksReadByTheUser) {

      counts[id] = (counts[id] || 0) + 1;
      if (counts[id] === 2) {
        duplicates++;
      }
    }

    const uniqueStrings = Object.keys(counts).filter(str => counts[str] === 1);
    const sume = duplicates + uniqueStrings.length

    return sume
  }

  function sumNumberOfPagesReadByTheUser() {
    const numberOfBooksReadByTheUsers = userReviews.rating.map((rating) => {
      return {
        id: rating.book.id,
        totalPages: rating.book.total_pages
      }
    })

    const counts: {[key: string]: number} = {};
    let totalPages = 0;

    for (const book of numberOfBooksReadByTheUsers) {
      counts[book.id] = (counts[book.id] || 0) + 1;
      if (counts[book.id] === 1) {
        totalPages += book.totalPages;
      }
    }

    return totalPages
  }

  return (
    <>
      <HeaderProfile>
        <User size={32} color="#50B2C0" />
        <h2>Perfil</h2>
      </HeaderProfile>

      <UserProfileContainer>
      <UserProfileContent>
        <ProfileStyled>
          <AvatarProfile image={userReviews.avatar_url} hideProfile="false"/>
          <cite>
            <strong>{userReviews.name}</strong>
            <p>{dayjs(userReviews.created_at).locale('pt-br').format('[Membro desde] MMMM[ de ]YYYY')}</p>
          </cite>
        </ProfileStyled>

        <Divider />

        <ul>
          <li>
            <BookOpen />
            <header>
              <strong>{numberOfPagesReadByTheUser}</strong>
              <span>Páginas lidas</span>
            </header>
          </li>

          <li>
            <Books />
            <header>
              <strong>{numberOfBooksReadByTheUser}</strong>
              <span>Livros avaliados</span>
            </header>
          </li>

          <li>
            <BookmarkSimple />
            <header>
              <strong>{mostRepeatedCategory ? mostRepeatedCategory : "..."}</strong>
              <span>Categoria mais lida</span>
            </header>
          </li>
        </ul>
      </UserProfileContent>
    </UserProfileContainer>
    </>
  )
}

