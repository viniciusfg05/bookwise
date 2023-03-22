import { Star, StarHalf } from "@phosphor-icons/react";
import { useState } from "react";

export function RatingStarts() {
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
    <>
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
    </>
  )
}