import { AssessmentBook, AssessmentContent, MainContainer, MainContent, MyBooksContainer, MyBooksContent, NameEInfos, ProfileContent } from "./styles";
import { AvatarProfile } from "@/pages/components/avatar";
import { useState } from "react";
import Image from "next/image"
import { RatingStarts } from "@/pages/components/ratingStars";
import { useSession } from "next-auth/react";
const dayjs = require('dayjs');

import { StartTypes } from "../../index.page";
import Link from "next/link";


export function MostRecentReviews({ allRating, firstRating }: StartTypes) {
  return (
    <MyBooksContainer >
      <MyBooksContent>
        {allRating.map((rating) => (

          <section>
            <header>
              <ProfileContent>

                <Link href={{
                  pathname: '/profile/[slug]',
                  query: { slug: rating.user.id, search: "" },
                }}>
                  <AvatarProfile image={rating.user.avatarUrl}
                    hideProfile="false"

                  />
                </Link>

                <NameEInfos>
                  <Link href={{
                    pathname: '/profile/[slug]',
                    query: { slug: rating.user.id },
                  }}>

                    <p>{rating.user.name}</p>
                  </Link>
                  <span>{dayjs(rating.createdAt).fromNow()}</span>
                </NameEInfos>
              </ProfileContent>

              <AssessmentContent>
                <RatingStarts rate={rating.rate} size="1rem" />
              </AssessmentContent>
            </header>

            <MainContainer>
              <MainContent>
                <Image src={rating.book.coverUrl} width={108} height={152} alt="" />

                <AssessmentBook>
                  <cite>
                    <strong>{rating.book.name.slice(0, 60) + (rating.book.name.length > 60 ? "..." : "")}</strong>
                    <span>{rating.book.author}</span>
                  </cite>

                  {rating.rating.length > 195 ? (
                    <p>{rating.rating.slice(0, 195) + (rating.rating.length > 195 ? "..." : "")}
                      <Link href="#">
                        &ensp;  ver mais
                      </Link>
                    </p>) : (

                    <p>{rating.rating.slice(0, 195) + (rating.rating.length > 195 ? "..." : "")}</p>
                  )
                  }
                </AssessmentBook>
              </MainContent>
            </MainContainer>
          </section>
        ))}

      </MyBooksContent>

    </MyBooksContainer>
  )
}