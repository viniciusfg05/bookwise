import {
  AssessmentsTheUsersContainer,
  AssessmentsTheUsersContent,
  ContentCite,
  MainContainer,
  MainContent
} from "./styles";
import Image from "next/image";
import { RatingStarts } from "@/pages/components/ratingStars";
import { allRatingProps } from "../../index.page";
const dayjs = require('dayjs');

interface reviewsProps {
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



interface AssessmentsUserProps {
  userReviews: {
    rating: reviewsProps[]
  },
  allRating: allRatingProps[]
}





export function AssessnentsUsers({ userReviews, allRating }: AssessmentsUserProps) {

  return (
    <AssessmentsTheUsersContainer>
      <AssessmentsTheUsersContent>
        <MainContainer>
          {allRating.map((reviews: reviewsProps) => (
            <MainContent>
              <time>{dayjs(new Date(reviews.created_at)).fromNow()}</time>
              <section>
                <header>
                  <Image
                    src={reviews.book.image}
                    width={108}
                    height={152}
                    alt=""
                  />

                  <ContentCite>
                    <cite>
                      <strong>{reviews.book.name}</strong>
                      <span>{reviews.book.author}</span>
                    </cite>
                    <RatingStarts rate={reviews.rate} size="1rem" />
                  </ContentCite>
                </header>

                <main>
                  <p>{reviews.description}</p>
                </main>
              </section>
            </MainContent>
          ))}

        </MainContainer>
      </AssessmentsTheUsersContent>
    </AssessmentsTheUsersContainer>
  )
}