import { Star, StarHalf } from "@phosphor-icons/react";
import { useState } from "react";
import { RatingStartsContainer } from "./styles";

interface RatingStartsProps {
  size: string;
}

export function RatingStarts({ size }: RatingStartsProps) {
  const [selectedStarts, setSelectedStarts] = useState(0)
  const [totalStartsPoints, setTotalStartsPoints] = useState(4.5)

  function handleStartSelect(value: number) {
    setSelectedStarts(value)
  }

  const starts = Array.from({ length: 5 }).map(
    (_, i) => {
      return i;
    }
  );

  return (
    <RatingStartsContainer>
      {starts.map(start => (
        <button  value="1" onClick={(event) => handleStartSelect(start + 1)} type="button" >
          {
            totalStartsPoints < start && <Star size={size} /> ||
            totalStartsPoints == start && <Star size={size} /> ||
            totalStartsPoints <= start + 0.5 && <StarHalf weight="fill" size={size} /> ||
            totalStartsPoints >= start + 0.6 && <Star weight="fill" size={size} />
          }
        </button>
      ))}
    </RatingStartsContainer>
  )
}