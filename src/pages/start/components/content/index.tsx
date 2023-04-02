import { AssessmentManis, ContainerContent, ContentContent, YourReadingsConteiner } from "./styles";
import { ChartLineUp } from "@phosphor-icons/react";
import { useState } from "react";
import { YourReading } from "../yourReading";
import { Assessment } from "../mostRecentReviews";
import { StartTypes } from "../../index.page";
import { useSession } from "next-auth/react";

export function Content({allRating}: StartTypes) {
  const [ login, setLogin ] = useState(true);

  const session = useSession()
  const thereIsAUserRating = allRating.find((rating) => rating.user.id === session.data?.user.id)

  if(!login) {
    return (
      <ContainerContent>
        <ContentContent>
          <header>
            <ChartLineUp size={32} color="#50B2C0" />
            <h2>Inicio</h2>
          </header>
  
          <AssessmentManis>
            <header>Avaliações mais recentes</header>
  
            <Assessment allRating={allRating}/>
  
          </AssessmentManis>
        </ContentContent>
      </ContainerContent>
    )
  }

  return (
    <ContainerContent>
      <ContentContent>
        <header>
          <ChartLineUp size={32} color="#50B2C0" />
          <h2>Inicio</h2>
        </header>

        <YourReadingsConteiner>
          <header>Sua última leitura</header>

          <YourReading />
        </YourReadingsConteiner>

        <AssessmentManis>
          <header>Avaliações mais recentes</header>

          <Assessment allRating={allRating}/>

        </AssessmentManis>
      </ContentContent>
    </ContainerContent>
  )
}