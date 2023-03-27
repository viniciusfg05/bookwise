import {
  AssessmentsTheUsersContainer,
  AssessmentsTheUsersContent,
  ContentCite,
  MainContainer,
  MainContent
} from "./styles";
import Image from "next/image";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import { RatingStarts } from "@/pages/components/ratingStars";

export function AssessnentsUsers() {
  return (
    <AssessmentsTheUsersContainer>
      <AssessmentsTheUsersContent>
        <MainContainer>
          <MainContent>
            <time>Há 2 dias</time>
            <section>
              <header>
                <Image
                  src={HabitosDeDesenvolvedores}
                  width={108}
                  height={152}
                  alt=""
                />

                <ContentCite>
                  <cite>
                    <strong>14 Habitos desenvolvedores</strong>
                    <span>Zeno Rocha</span>
                  </cite>
                  <RatingStarts size="1rem" />
                </ContentCite>
              </header>

              <main>
                <p>
                  Semper et sapien proin vitae nisi. Feugiat neque integer
                  donec et aenean posuere amet ultrices. Cras fermentum id
                  pulvinar varius leo a in. Amet libero pharetra nunc
                  elementum fringilla velit ipsum. Sed vulputate massa
                  velit nibh... ver mais
                </p>
              </main>
            </section>
          </MainContent>
        </MainContainer>
        <MainContent>
          <time>Há 2 dias</time>
          <section>
            <header>
              <Image
                src={HabitosDeDesenvolvedores}
                width={108}
                height={152}
                alt=""
              />

              <ContentCite>
                <cite>
                  <strong>14 Habitos desenvolvedores</strong>
                  <span>Zeno Rocha</span>
                </cite>
                <RatingStarts size="1rem" />
              </ContentCite>
            </header>

            <main>
              <p>
                Semper et sapien proin vitae nisi. Feugiat neque integer
                donec et aenean posuere amet ultrices. Cras fermentum id
                pulvinar varius leo a in. Amet libero pharetra nunc
                elementum fringilla velit ipsum. Sed vulputate massa velit
                nibh... ver mais
              </p>
            </main>
          </section>
        </MainContent>
      </AssessmentsTheUsersContent>
    </AssessmentsTheUsersContainer>
  )
}