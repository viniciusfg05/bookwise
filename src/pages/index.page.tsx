import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@foreverdark/react/dist";
import LogoGoogle from "../../assets/logo-google.svg";
import bgHome from "../../assets/books/bg-home.png";
import Logo from "../../assets/books/logo.svg";
import JetLogin from "../../assets/books/rocketLaunch.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  ButtonStyles,
  ContainerHome,
  ConteinerLogin,
  ContentBg,
  ContentButton,
  ContentHome,
  ContentImage,
  ContentLogin,
  ImageBackground,
  ImageLogo,
} from "./styles";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  async function handleConnectGoogle() {
    await signIn("google");
  }
  return (
    <ContainerHome>
      {/* <p>{JSON.stringify(session.data)}</p> */}
      <ContentHome>
        <ContentBg>
          <ContentImage>
            <ImageBackground src={bgHome} alt="backgroud" />
            <ImageLogo src={Logo} alt="backgroud" />
          </ContentImage>
        </ContentBg>

        <ConteinerLogin>
          <ContentLogin>
            <header>
              <h2>Boas vindas!</h2>
              <p>Faça seu login ou acesse como visitante.</p>
            </header>

            <ContentButton>
              <ButtonStyles onClick={handleConnectGoogle}>
                <FcGoogle size={32} />
                Entrar com Google
              </ButtonStyles>

              <ButtonStyles>
                <FaGithub />
                Entrar com Github
              </ButtonStyles>

              <ButtonStyles>
                <Image src={JetLogin} alt="" />
                Acessar como visitante
              </ButtonStyles>
            </ContentButton>
          </ContentLogin>
        </ConteinerLogin>
      </ContentHome>
    </ContainerHome>
  );
}
