import { AssessmentManis, ContainerContent, ContentContent, YourReadingsConteiner } from "./styles";
import { ChartLineUp } from "@phosphor-icons/react";
import { useState } from "react";
import { YourReading } from "../yourReading";
import { Assessment } from "../mostRecentReviews";

export function Content() {
  const [ login, setLogin ] = useState(true);

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
  
            <Assessment />
  
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

          <Assessment />

        </AssessmentManis>
      </ContentContent>
    </ContainerContent>
  )
}