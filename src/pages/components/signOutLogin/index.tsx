import { SignIn, SignOut } from "@phosphor-icons/react";
import { ConteinerFooter, ContentFooter, ContentPerfil, Perfil } from "./styles";
import Link from "next/link"
import { useState } from "react";
import { AvatarProfile } from "../avatar";
import { signOut, useSession,  } from "next-auth/react";
import { useRouter } from "next/router";

export function SignOutLogin() {
  const session = useSession();
  const router = useRouter();
    // console.log(session)
  if (session.status !== "authenticated") {
    return (
    <ConteinerFooter>
      <ContentFooter mobile={{ '@bp2': 'true' }}>
        <button onClick={() => router.push("/")}>Fazer Login</button>
          <Link href={""}>
            <SignIn size={24} color="#50B2C0" />
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
              <AvatarProfile image={session.data.user.avatar_url} hideProfile="true"/>
            </ContentPerfil>
          </Perfil>
          
          <p>{session.data.user.name}</p>

          <Link href={""} title="Sair">
            <SignOut size={24} color="#F75A68" onClick={() => signOut()}/>
          </Link>
      </ContentFooter>
    </ConteinerFooter>
  )
}