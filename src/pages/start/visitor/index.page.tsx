import { AssessmentContent, ContainerHome, ConteinerFavoviteBooks, ContentFavoviteBooks, ContentStart, FavoritesConteiner, FavoritesContent, FavoviteBooks, FavoviteBooksContent } from "./styles";
import { AvatarProfile } from "../../components/avatar"
import { useState } from "react";
import { SideBar } from "./components/sideBar";
import { Content } from "./components/content";
import { CaretRight, Star, StarHalf } from "@phosphor-icons/react";
import HabitosDeDesenvolvedores from "../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
import Image from "next/image"
import Link from "next/link";

export default function Start() {
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
    <ContainerHome>
      <ContentStart>

        <SideBar />

        <Content />

        <ConteinerFavoviteBooks>

          <header>
            <p>Livros populares</p>

            <Link href="">
              Ver todos
              <CaretRight size="1rem" />
            </Link>
          </header>

          <FavoritesConteiner>
            <FavoritesContent>
              <section>

                <ContentFavoviteBooks>

                  <FavoviteBooksContent>
                    <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />


                    <FavoviteBooks>
                      <header>
                        <p>14 Hábitos de Desenvolvedores Alta...</p>
                        <span>Zeno Rocha</span>
                      </header>
                      <AssessmentContent>
                        {starts.map(start => (
                          <button value="1" onClick={(event) => handleStartSelect(start + 1)} type="button" >
                            {
                              totalStartsPoints < start && <Star size={"1rem"} /> ||
                              totalStartsPoints == start && <Star size={"1rem"} /> ||
                              totalStartsPoints <= start + 0.5 && <StarHalf weight="fill" size={"1rem"} /> ||
                              totalStartsPoints >= start + 0.6 && <Star weight="fill" size={"1rem"} />
                            }
                          </button>
                        ))}
                      </AssessmentContent>
                    </FavoviteBooks>
                  </FavoviteBooksContent>
                </ContentFavoviteBooks>

                <ContentFavoviteBooks>

                  <FavoviteBooksContent>
                    <Image src={HabitosDeDesenvolvedores} width={108} height={152} alt="" />


                    <FavoviteBooks>
                      <header>
                        <p>14 Hábitos de Desenvolvedores Alta...</p>
                        <span>Zeno Rocha</span>
                      </header>
                      <AssessmentContent>
                        {starts.map(start => (
                          <button value="1" onClick={(event) => handleStartSelect(start + 1)} type="button" >
                            {
                              totalStartsPoints < start && <Star size={"1rem"} /> ||
                              totalStartsPoints == start && <Star size={"1rem"} /> ||
                              totalStartsPoints <= start + 0.5 && <StarHalf weight="fill" size={"1rem"} /> ||
                              totalStartsPoints >= start + 0.6 && <Star weight="fill" size={"1rem"} />
                            }
                          </button>
                        ))}
                      </AssessmentContent>
                    </FavoviteBooks>
                  </FavoviteBooksContent>
                </ContentFavoviteBooks>
              </section>
            </FavoritesContent>
          </FavoritesConteiner>

        </ConteinerFavoviteBooks>

      </ContentStart>
    </ContainerHome>
  )
}
