import { AssessmentBook, AssessmentContent, MainContainer, MainContent, MyBooksContainer, MyBooksContent, NameEInfos, ProfileContent } from "./styles";
import { Star, StarHalf } from "@phosphor-icons/react";
import { AvatarProfile } from "@/pages/components/avatar";
import { useState } from "react";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
import Image from "next/image"
import { RatingStarts } from "@/pages/components/ratingStars";

export function Assessment() {

  return (
    <MyBooksContainer>
      <MyBooksContent>
        <section>
          <header>
            <ProfileContent>
              <AvatarProfile image="https://avatars.githubusercontent.com/u/68232658?v=4"
                hideProfile="false"
              />

              <NameEInfos>
                <p>Vincius Ferreira</p>
                <span>Hoje</span>
              </NameEInfos>
            </ProfileContent>

            <AssessmentContent>
              <RatingStarts size="1rem"/>
            </AssessmentContent>
          </header>

          <MainContainer>
            <MainContent>
              <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />


              <AssessmentBook>
                <cite>
                  <strong>14 Habitos desenvolvedores</strong>
                  <span>Zeno Rocha</span>
                </cite>

                <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais</p>
              </AssessmentBook>
            </MainContent>
          </MainContainer>
        </section>

        <section>
          <header>
            <ProfileContent>
              <AvatarProfile image="https://avatars.githubusercontent.com/u/68232658?v=4"
                hideProfile="false"
              />

              <NameEInfos>
                <p>Vincius Ferreira</p>
                <span>Hoje</span>
              </NameEInfos>
            </ProfileContent>

            <AssessmentContent>
              <RatingStarts size="1rem"/>

            </AssessmentContent>
          </header>

          <MainContainer>
            <MainContent>
              <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />


              <AssessmentBook>
                <cite>
                  <strong>14 Habitos desenvolvedores</strong>
                  <span>Zeno Rocha</span>
                </cite>

                <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais</p>
              </AssessmentBook>
            </MainContent>
          </MainContainer>
        </section>

        <section>
          <header>
            <ProfileContent>
              <AvatarProfile image="https://avatars.githubusercontent.com/u/68232658?v=4"
                hideProfile="false"
              />

              <NameEInfos>
                <p>Vincius Ferreira</p>
                <span>Hoje</span>
              </NameEInfos>
            </ProfileContent>

            <AssessmentContent>
              <RatingStarts size="1rem"/>

            </AssessmentContent>
          </header>

          <MainContainer>
            <MainContent>
              <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />


              <AssessmentBook>
                <cite>
                  <strong>14 Habitos desenvolvedores</strong>
                  <span>Zeno Rocha</span>
                </cite>

                <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais</p>
              </AssessmentBook>
            </MainContent>
          </MainContainer>
        </section>
      </MyBooksContent>

    </MyBooksContainer>
  )
}