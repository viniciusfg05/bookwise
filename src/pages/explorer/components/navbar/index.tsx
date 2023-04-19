import { LiContent, NavbarCotainer } from "./styles";
import Image from "next/image";
import HabitosDeDesenvolvedores from "../../../../../assets/books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import { RatingStarts } from "@/pages/components/ratingStars";
import * as Dialog from "@radix-ui/react-dialog";
import { ButtonContent, DialogTrigger } from "../../styles";
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/router";

interface CategoriesProps {
  allCategorie: {
    id: string;
    name: string;
  }[]
}

export function Navbar({ allCategorie }: CategoriesProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const distance = (x - startX) * 1.5; // Ajuste a sensibilidade do movimento aqui
    e.currentTarget.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setStartX(0);
  };

  const router = useRouter()
  return (
    <NavbarCotainer>
      <ul
        //@ts-ignore
        onMouseDownCapture={handleMouseDown}
        //@ts-ignore
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Link href={``} style={{ textDecoration: "none" }}>
          <LiContent variantsStyle={router.query.categorie === undefined ? "true" : "false"}>
            <p>Todos</p>
          </LiContent>
        </Link>


        {allCategorie.map(categorie => (
          <Link href={`?categorie=${categorie.name}`} style={{ textDecoration: "none" }}>
            <LiContent variantsStyle={router.query.categorie === categorie.name ? "true" : "false"} key={categorie.id} >
              <p >{categorie.name}</p>
            </LiContent>
          </Link>
        ))}

      </ul>
    </NavbarCotainer>
  )
}
