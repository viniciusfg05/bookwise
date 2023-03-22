import { SignOut } from "@phosphor-icons/react";
import { ConteinerFooter, ContentFooter, ContentPerfil, Perfil } from "./styles";
import Link from "next/link"
import { useState } from "react";
import { AvatarProfile } from "../avatar";

export function SignOutLogin() {
  const [ login, setLogin ] = useState(true)

  if (!login) {
    return (
    <ConteinerFooter>
      <ContentFooter mobile={{ '@bp2': 'true' }}>
        <p>Fazer Login</p>
          <Link href={""}>
            <SignOut size={24} color="#F75A68" />
          </Link>
      </ContentFooter>
    </ConteinerFooter>
    )
  }
  
  return (
    <ConteinerFooter>
      <ContentFooter mobile={{ '@bp2': 'true' }}>
          <Perfil>
            <ContentPerfil>
              <AvatarProfile image="https://avatars.githubusercontent.com/u/68232658?v=4" hideProfile="true"/>
            </ContentPerfil>
          </Perfil>
          
          <p>Vinicius</p>

          <Link href={""} title="Sair">
            <SignOut size={24} color="#F75A68"/>
          </Link>
      </ContentFooter>
    </ConteinerFooter>
  )
}