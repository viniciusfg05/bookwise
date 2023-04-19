import { AssessmentManis, ContainerContent, ContentContent, YourReadingsConteiner } from "./styles";
import { ChartLineUp } from "@phosphor-icons/react";
import { YourReading } from "../yourReading";
import { MostRecentReviews } from "../mostRecentReviews";
import { StartTypes } from "../../index.page";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "@/pages/components/loading";

export function Content({ allRating, firstRating, highestRatedBooks }: StartTypes) {
  const session = useSession()


  if (!session.data?.user) {
    return (
      <ContainerContent>
        <ContentContent>
          <header>
            <ChartLineUp size={32} color="#50B2C0" />
            <h2>Inicio</h2>
          </header>

          <AssessmentManis>
            <header>Avaliações mais recentes</header>

            <MostRecentReviews allRating={allRating} />

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

        {firstRating == null ? (
          <p></p>
        ) : (
          <YourReadingsConteiner>
            <header>Sua última leitura</header>

            <YourReading firstRating={firstRating} />
          </YourReadingsConteiner>
        )}

        <AssessmentManis>
          <header>Avaliações mais recentes</header>

          <MostRecentReviews allRating={allRating} />

        </AssessmentManis>


      </ContentContent>
    </ContainerContent>
  )
}