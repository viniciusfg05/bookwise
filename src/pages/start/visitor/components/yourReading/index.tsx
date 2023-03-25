import { AssessmentContent, MainContainer, MainContent, MyBooksContainer, MyBooksContent, YourReadingsMain } from "./styles";
import { Star, StarHalf } from "@phosphor-icons/react";
import { useState } from "react";
import HabitosDeDesenvolvedores from "../../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
import Image from "next/image"
import { RatingStarts } from "../../../../components/ratingStars";

export function YourReading() {

  return (
    <MyBooksContainer>
    <MyBooksContent>
      <section>
        <MainContainer>
          <MainContent>
            <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />

            <YourReadingsMain>
              <header>
                <p>Há 2 dias</p>

                <AssessmentContent>
                  <RatingStarts />
                </AssessmentContent>
              </header>

              <cite>
                <strong>Entendendo Algoritmos</strong>
                <span>Aditya Bhargava</span>
              </cite>

              <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a ...</p>

            </YourReadingsMain>


          </MainContent>
        </MainContainer>
      </section>
    </MyBooksContent>
  </MyBooksContainer>
  )
}