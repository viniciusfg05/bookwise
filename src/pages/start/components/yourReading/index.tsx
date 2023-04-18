import { AssessmentContent, MainContainer, MainContent, MyBooksContainer, MyBooksContent, YourReadingsMain } from "./styles";
import Image from "next/image"
import { RatingStarts } from "@/pages/components/ratingStars";

const dayjs = require('dayjs');

interface YourReading  {
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

interface YourRatingTypes {
  firstRating: YourReading[];
}


export function YourReading({firstRating}: YourRatingTypes) {
  return (
    <MyBooksContainer className="nunito">
      <MyBooksContent>
        <section>
          <MainContainer>
            {firstRating.map((firstRating) => (
              <MainContent>
                <Image src={firstRating.book.cover_url} width={108} height={152} alt="" />

                <YourReadingsMain>
                  <header>
                    <p>{dayjs(firstRating.created_at).fromNow()}</p>

                    <AssessmentContent>
                      <RatingStarts rate={Number(firstRating.rate)} size="1rem" />
                    </AssessmentContent>
                  </header>

                  <cite>
                    <strong>{firstRating.book.name.slice(0, 50) + (firstRating.book.name.length > 50 ? "..." : "")}</strong>
                    <span>{firstRating.book.author}</span>
                  </cite>

                  <p>{firstRating.description.slice(0, 195) + (firstRating.description.length > 195 ? "..." : "")}</p>

                </YourReadingsMain>
              </MainContent>
            ))}
          </MainContainer>
        </section>
      </MyBooksContent>
    </MyBooksContainer>
  )
}