import { Check, Star, StarAndCrescent, StarHalf, X, XCircle } from "@phosphor-icons/react";
import { Button, ButtonTextara, ErrorStyles, Profile, RatingStartsContainer, Textarea, TextareaContainer, ToAssessContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "@/lib/axios";
import * as Dialog from "@radix-ui/react-dialog";
import { BooksContext } from "@/context/dataContext";
import { AvatarProfile } from "@/pages/components/avatar";
import { ModalType } from "../modal";

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

export function CreateAreReview({ book, yourEvaluation }: ModalType) {
  const [selectedStarts, setSelectedStarts] = useState(0)
  const [error, setError] = useState(true)

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<TextAreaFormData>({
    resolver: zodResolver(TextAreaFormSchema),
  })

  const { setOpenContext } = useContext(BooksContext)

  // isSubmitSuccessful ? setOpenContext(true) : setOpenContext(false)

  const session = useSession()
  const router = useRouter()

  async function handleSubmitData(data: TextAreaFormData) {
    const createRating = {
      description: data.yourEvaluation,
      rate: data.rating,
      book_id: book,
      user_id: session.data?.user.id
    }

    await api.post("/books/rating", {
      createRating
    })

    await router.push("/explorer")
    reset()
    setSelectedStarts(0)
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

  if(session.data?.user.id) {
    return (
      <>
        <ToAssessContainer onSubmit={handleSubmit(handleSubmitData)}>
          <header>
            <Profile>
              <AvatarProfile image={session.data?.user.avatar_url!} hideProfile="false" />
              <strong>{session.data?.user.name}</strong>
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
  
              <Dialog.Close asChild>
                <button>
                  <X color="#8381D9" />
                </button>
              </Dialog.Close>
  
              <button 
                type={"submit"}
              >
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

  return (
    <></>
  )
}

