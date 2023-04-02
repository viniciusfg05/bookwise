import { Check, Star, StarAndCrescent, StarHalf, X } from "@phosphor-icons/react";
import { Button, ButtonTextara, ErrorStyles, Profile, RatingStartsContainer, Textarea, TextareaContainer, ToAssessContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { AvatarProfile } from "../avatar";
import { ModalType } from "@/pages/explorer/components/modal";
import { useSession } from "next-auth/react";
import { api } from "@/lib/axios";

interface InputProps {
  pageExplorer?: "pageExplorer";
  pageProfile?: "pageProfile";
  placeholder: string;
}

const TextAreaFormSchema = z.object({
  yourEvaluation: z.string().min(10, { message: "No mínimo 10 caracteres" }),
  rating: z.number().min(1, { message: "Avalie com uma estrela" })
});

type TextAreaFormData = z.infer<typeof TextAreaFormSchema>;

interface TextAreaProps {
  yourEvaluation: String | String[];
}

export function CreateAreview({ book }: ModalType) {
  const [selectedStarts, setSelectedStarts] = useState(0)

  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm<TextAreaFormData>({
    resolver: zodResolver(TextAreaFormSchema),
  })

  const session = useSession()

  async function handleSubmitData(data: TextAreaFormData) {
    console.log(data, selectedStarts, book?.title, session.data?.user.id)

    const createRating = {
      description: data.yourEvaluation,
      rate: data.rating,
      book_id: book?.id,
      user_id: session.data?.user.id
    }

    await api.post("/books/rating", {
      createRating
    })

  }

  function handleStartSelect(rating: number) {
    setSelectedStarts(rating)
    register("rating", { value: rating });
  }

  const starts = Array.from({ length: 5 }).map(
    (_, i) => {
      return i;
    }
  );

  return (
    <>
      <ToAssessContainer onSubmit={handleSubmit(handleSubmitData)}>
        <header>
          <Profile>
            <AvatarProfile image="" hideProfile="false" />
            <strong>Vinicius Ferreira</strong>
          </Profile>

          <RatingStartsContainer>
            {starts.map(start => (
              <Button value="1" type="button" onClick={() => handleStartSelect(start + 1)} >
                {
                  selectedStarts < start && <Star size={"2rem"} /> ||
                  selectedStarts == start && <Star size={"2rem"} /> ||
                  selectedStarts <= start + 0.5 && <StarHalf weight="fill" size={"2rem"} /> ||
                  selectedStarts >= start + 0.6 && <Star weight="fill" size={"2rem"} />
                }
              </Button>
            ))}
          </RatingStartsContainer>
        </header>

        <TextareaContainer >
          <Textarea placeholder="Escreva sua avaliação" {...register("yourEvaluation")} />
          <ButtonTextara>
            <button>
              <X color="#8381D9" />
            </button>

            <button type={"submit"} >
              <Check color="#50B2C0" />
            </button>
          </ButtonTextara>


          {errors.yourEvaluation?.message && <ErrorStyles>{errors.yourEvaluation?.message}</ErrorStyles>}
          {errors.rating?.message && <ErrorStyles>Avalie com pelo menos uma estrela</ErrorStyles>}
        </TextareaContainer>
      </ToAssessContainer>
    </>
  )
}

