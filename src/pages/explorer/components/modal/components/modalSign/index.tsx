import * as Dialog from "@radix-ui/react-dialog"
import { DialogContent, DialogOverlay, DialogTitle } from "./styles"
import { FcGoogle } from "react-icons/fc"
import { Nunito } from "next/font/google";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

const nunito = Nunito({
  subsets: ["latin"],
});

export function ModalSign() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent className={`${nunito.className}`}>
        <DialogTitle>
          Faça login para deixar sua avaliação
        </DialogTitle>
        <button onClick={() => signIn("google", {callbackUrl: "/explorer"})}>
          <FcGoogle size={32} />
          Entrar com Google
        </button>

        <button onClick={() => signIn("github", {callbackUrl: "/explorer"})}>
            <FaGithub size={32}/>
            Entrar com Github
        </button>
      </DialogContent>
    </Dialog.Portal>
  )
}