import { MagnifyingGlass } from "@phosphor-icons/react";
import { ErrosStyles, Input, InputConteiner } from "./styles";
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
  const session = useSession();
  const router = useRouter();

  const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(InputFormSchema),
  })

  function handleSubmitData(data: FormData) {
    console.log(data)

    router.push(`?search=${data.input}`)
  }

  return (
    <InputConteiner willBeDisplayedIn={pageExplorer ||  pageProfile  } onSubmit={handleSubmit(handleSubmitData)}>
      <Input placeholder={placeholder} {...register("input")}/>
      { errors.input?.message && <ErrosStyles>Minimo 3 caractreres</ErrosStyles> }
      <MagnifyingGlass />
    </InputConteiner>
  )
}

