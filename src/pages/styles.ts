import { Button } from "@foreverdark/react/dist";
import Image from "next/image";
import bgHome from "../../assets/books/bg-home.png";
import { styled } from "../styles/stitches.config";
export const ContainerHome = styled("div", {
  padding: "16px",
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  overflow: "hidden",

  "@media (max-width: 768px)": {
    padding: "0",
  },
});

export const ContentHome = styled("div", {
  "*": {
    overflow: "hidden",
  },

  display: "grid",
  height: "100%",
  width: "90rem",
  gridTemplateColumns: "37.5rem 1fr",

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    width: "100vw",
  },
});

export const ContentBg = styled("div", {
  height: "100%",
  borderRadius: "$lg",

  "@media (max-width: 768px)": {},
});

export const ContentImage = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "100%",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    padding: "0.8rem",
  },
});

export const ImageBackground = styled(Image, {
  height: "100%",
  borderRadius: "$lg",

  "@media (max-width: 768px)": {
    width: "100%",
    borderRadius: "$lg",
  },
});

export const ImageLogo = styled(Image, {
  position: "absolute",
});

export const ConteinerLogin = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    height: "60vh",
  },
});

export const ContentLogin = styled("div", {
  width: "23.25rem",

  header: {
    lineHeight: "$tall",
    color: "$white",
    marginBottom: "$10",

    h2: {},
  },

  "@media (max-width: 768px)": {
    height: "60vh",
    width: "100%",
    marginTop: "2rem",
    padding: "1rem",
  },

  "@media (max-height: 768px)": {
    marginTop: "0",
  },
});

export const ContentButton = styled("div", {});

export const ButtonStyles = styled("button", {
  boxSizing: "border-box",
  width: "23.25rem",
  height: "100%",
  padding: "$5 $6 $5 $6",
  marginBottom: "$4",
  fontSize: "$lg",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  background: "$gray600",
  color: "$white",
  border: "none",
  borderRadius: "$md",
  cursor: "pointer",
  transition: "0.3s background",

  svg: {
    width: "2rem",
    height: "2rem",
    marginRight: "$5",
  },

  "> img": {
    marginRight: "$5",
  },

  "&:not(:disabled):hover": {
    background: "$gray500",
  },

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

export const AppConteiner = styled("div", {
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  color: "white",
})

export const AppContent = styled("div", {
  display: "flex",

  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
})

