import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { ClearSearch, Container, ErrosStyles, Input, InputConteiner } from "./styles";
import { useSession, } from "next-auth/react";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface InputProps {
  pageExplorer?: "pageExplorer";
  pageProfile?: "pageProfile";
  placeholder: string;
}

const InputFormSchema = z.object({
  input: z.string().min(3, { message: "No mínimo 3 caracteres" })
});

type FormData = z.infer<typeof InputFormSchema>;

export function InputBar({pageExplorer, pageProfile, placeholder}: InputProps) {
  const router = useRouter();

  const {register, handleSubmit, formState: { errors }, reset} = useForm<FormData>({
    resolver: zodResolver(InputFormSchema),
  })

  function handleSubmitData(data: FormData) {

    if(router.route === "/profile/[slug]") {
      router.push({
        pathname: `[slug]`,
        query: { slug: router.query.slug, search: `${data.input}` },
      })      
    }

    if(router.route === "/explorer") {
      router.push({
        pathname: ``,
        query: {search: `${data.input}` },
      })      
    }
  }

  function handleClearQuery() {
    reset()

    if(router.route === "/explorer") {
      router.push({
        pathname: ``,
        query: {search: `` },
      })      
    }

    if(router.route === "/profile/[slug]") {
      router.push({
        pathname: `[slug]`,
        query: { slug: router.query.slug, search: `${""}` },
      })   
    }


  }

  return (
    <Container>
      <InputConteiner willBeDisplayedIn={pageExplorer || pageProfile  } onSubmit={handleSubmit(handleSubmitData)}>
        <Input placeholder={placeholder} {...register("input")}/>
        { errors.input?.message && <ErrosStyles>Minimo 3 caractreres</ErrosStyles> }

        <MagnifyingGlass />
      </InputConteiner>
      {router.query.search && 
        <ClearSearch onClick={() => handleClearQuery()}>
          <X />
          {router.query.search}
        </ClearSearch >  
      }
    </Container>
  )
}
