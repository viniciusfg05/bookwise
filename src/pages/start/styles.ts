import { styled } from "../../styles/stitches.config";
import ElipseTop from "../../../../assets/elipseTop.svg";
import { after } from "node:test";

export const ContainerHome = styled("div", {
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  color: "white",

  "@media (max-width: 768px)": {

    // padding: "0"
  },
})

export const ContentStart = styled("div", {
  display: "grid",
  gridTemplateColumns: "38rem 20.25rem",
  height: "100%",
  width: "100%",
  gap: "4rem",

  "@media (max-width: 768px)": {
    all: "unset",
    display: "flex",
    flexDirection: "column",
  }
})


export const ContainerContent = styled("main", {
  gridArea: "main",
  position: "relative",
});
export const ConteinerFavoviteBooks = styled("footer", {
  gridArea: "footer",
});
