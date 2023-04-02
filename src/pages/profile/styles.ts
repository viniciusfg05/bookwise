import { styled } from "../../styles/stitches.config";

export const ContainerProfile = styled("div", {
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  color: "white",

  "@media (max-width: 768px)": {
    // padding: "0"
  },
});

export const ContentProfile = styled("div", {
  display: "grid",
  gridTemplateColumns: "39rem 19.25rem",
  height: "100%",
  width: "100%",
  gap: "4rem",

  "@media (max-width: 768px)": {
    all: "unset",
  },
});

export const ProfileConteiner = styled("div", {
  marginTop: "4.5rem",

  header: {
    display: "flex",
    gap: "0.75rem",
  },

  "> a": {
    display: "flex",
    gap: "0.75rem",
    color: "$white",
    fontWeight: "bold",
    textDecoration: "none"
  },

  "@media(max-width: 768px)": {
    marginTop: "2rem",
    width: "100vw",


    header: {
      padding: "0.5rem",
    },

    "> a": {
      marginBottom: "2rem",
    }
  },
});






