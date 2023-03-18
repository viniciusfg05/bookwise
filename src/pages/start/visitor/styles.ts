
import { styled } from "../../../styles/stitches.config"

export const ContainerHome = styled("div", {
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  color: "white",
  overflow: "visible",

  "@media (max-width: 768px)": {
    padding: "0"
  }
})

export const ContentStart = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  height: "100%",
  overflow: "visible",
})

export const ConteinerSideBar = styled("div", {
  height: "100%",

  img: {
    height: "100vh",
    position: "fixed"
  }
})

export const BackgroundSidebar = styled("div", {
  height: "911px",
  background: "$gray700",

  img: {
    height: "100vh",
  }
})

export const ContainerContent = styled("div", {})
export const ConteinerFavoviteBooks = styled("div", {
  height: "100%",
  h1: {
    height: "100vh",
    position: "fixed"
  }
})

