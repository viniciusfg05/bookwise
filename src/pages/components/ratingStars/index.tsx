import { Star, StarHalf } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button, RatingStartsContainer } from "./styles";

interface RatingStartsProps {
  size: string;
  rate: number | undefined;
}

export function RatingStarts({ size, rate }: RatingStartsProps) {
  const [selectedStarts, setSelectedStarts] = useState(0)
  const [totalStartsPoints, setTotalStartsPoints] = useState(0)

  useEffect(() => {
    let rating = rate
    setTotalStartsPoints(rate === null ? 0 : rate!)
  }, [rate])


  const starts = Array.from({ length: 5 }).map(
    (_, i) => {
      return i;
    }
  );

  return (
    <RatingStartsContainer>
      {starts.map(start => (
        <Button  value="1"  type="button" disabled >
          {
            totalStartsPoints! < start && <Star size={size} /> ||
            totalStartsPoints == start && <Star size={size} /> ||
            totalStartsPoints! <= start + 0.5 && <StarHalf weight="fill" size={size} /> ||
            totalStartsPoints! >= start + 0.6 && <Star weight="fill" size={size} />
          }
        </Button>
      ))}
    </RatingStartsContainer>
  )
}