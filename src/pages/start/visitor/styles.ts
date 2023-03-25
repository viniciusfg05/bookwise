import { styled } from "../../../styles/stitches.config";
import ElipseTop from "../../../../assets/elipseTop.svg";
import { after } from "node:test";

export const ContainerHome = styled("div", {
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  color: "white",
  overflow: "visible",

  "@media (max-width: 768px)": {
    padding: "0",
  },
});

export const ContentStart = styled("div", {
  width: "1440px",
  display: "grid",
  gridTemplateAreas: `
    "nav main main footer"
    "nav main main footer"
    "nav main main footer"
  `,
  height: "100vh",
  gridTemplateColumns: "1f 60% 1f",
  gridTemplateRows: "1f 60% 1f",
});

export const ConteinerSideBar = styled("nav", {
  gridArea: "nav",
  position: "relative",
});

export const BackgroundSidebar = styled("div", {
  height: "100vh",
  width: "25rem",
  background: "$gray600",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "99",
});

export const ContainerContent = styled("main", {
  gridArea: "main",
  position: "relative",
});
export const ConteinerFavoviteBooks = styled("footer", {
  gridArea: "footer",
});
