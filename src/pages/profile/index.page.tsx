import { MagnifyingGlass, User } from "@phosphor-icons/react";
import { RatingStarts } from "../components/ratingStars";
import { SideBar } from "../components/sideBar";
import {
  AssessmentsTheUsersContainer,
  AssessmentsTheUsersContent,
  ContainerProfile,
  ContentCite,
  ContentProfile,
  Input,
  InputConteiner,
  MainContainer,
  MainContent,
  ProfileConteiner,
} from "./styles";
import Image from "next/image";
import HabitosDeDesenvolvedores from "../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";

export default function Profile() {
  return (
    <ContainerProfile>
      <ContentProfile>
        <SideBar />

        <ProfileConteiner>
          <header>
            <User size={32} color="#50B2C0" />
            <h2>Perfil</h2>
          </header>

          <InputConteiner>
            <Input placeholder="Buscar livro avaliado" />

            <MagnifyingGlass />
          </InputConteiner>

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
        </ProfileConteiner>

        <h1>Outro</h1>
      </ContentProfile>
    </ContainerProfile>
  );
}
