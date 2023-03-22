import { AssessmentBook, AssessmentContent, AssessmentManis, ContainerContent, ContentContent, MainContainer, MainContent, MyBooksContainer, MyBooksContent, NameEInfos, ProfileContent, YourReadingsConteiner, YourReadingsMain } from "./styles";
import { ChartLineUp, Star, StarHalf } from "@phosphor-icons/react";
import { AvatarProfile } from "@/pages/components/avatar";
import { useState } from "react";
import HabitosDeDesenvolvedores from "../../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
import Image from "next/image"

export function Content() {
  const [selectedStarts, setSelectedStarts] = useState(0)
  const [totalStartsPoints, setTotalStartsPoints] = useState(1.5)

  function handleStartSelect(value: number) {
    setSelectedStarts(value)
  }

  const starts = Array.from({ length: 5 }).map(
    (_, i) => {
      return i;
    }
  );

  return (
    <ContainerContent>
      <ContentContent>
        <header>
          <ChartLineUp size={32} color="#50B2C0" />
          <h2>Inicio</h2>
        </header>

        <YourReadingsConteiner>
          <header>Sua última leitura</header>
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
                          {starts.map(start => (
                            <button value="1" onClick={(event) => handleStartSelect(start + 1)} type="button" >
                              {
                                totalStartsPoints < start && <Star size={"1.5rem"} /> ||
                                totalStartsPoints == start && <Star size={"1.5rem"} /> ||
                                totalStartsPoints <= start + 0.5 && <StarHalf weight="fill" size={"1.5rem"} /> ||
                                totalStartsPoints >= start + 0.6 && <Star weight="fill" size={"1.5rem"} />
                              }
                            </button>
                          ))}
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
        </YourReadingsConteiner>

        <AssessmentManis>
          <header>Avaliações mais recentes</header>
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
                    {starts.map(start => (
                      <button value="1" onClick={(event) => handleStartSelect(start + 1)} type="button" >
                        {
                          totalStartsPoints < start && <Star size={"1.5rem"} /> ||
                          totalStartsPoints == start && <Star size={"1.5rem"} /> ||
                          totalStartsPoints <= start + 0.5 && <StarHalf weight="fill" size={"1.5rem"} /> ||
                          totalStartsPoints >= start + 0.6 && <Star weight="fill" size={"1.5rem"} />
                        }
                      </button>
                    ))}
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
                    {starts.map(start => (
                      <button value="1" onClick={(event) => handleStartSelect(start + 1)} type="button" >
                        {
                          totalStartsPoints < start && <Star size={"1.5rem"} /> ||
                          totalStartsPoints == start && <Star size={"1.5rem"} /> ||
                          totalStartsPoints <= start + 0.5 && <StarHalf weight="fill" size={"1.5rem"} /> ||
                          totalStartsPoints >= start + 0.6 && <Star weight="fill" size={"1.5rem"} />
                        }
                      </button>
                    ))}
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
                    {starts.map(start => (
                      <button value="1" onClick={(event) => handleStartSelect(start + 1)} type="button" >
                        {
                          totalStartsPoints < start && <Star size={"1.5rem"} /> ||
                          totalStartsPoints == start && <Star size={"1.5rem"} /> ||
                          totalStartsPoints <= start + 0.5 && <StarHalf weight="fill" size={"1.5rem"} /> ||
                          totalStartsPoints >= start + 0.6 && <Star weight="fill" size={"1.5rem"} />
                        }
                      </button>
                    ))}
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

        </AssessmentManis>
      </ContentContent>
    </ContainerContent>
  )
}