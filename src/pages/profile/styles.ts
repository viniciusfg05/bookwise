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
  gridTemplateColumns: "24.16% 43.33%  32.5%",
  height: "100%",
  width: "100%",

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


    header: {
      padding: "0.5rem",
    },

    "> a": {
      marginBottom: "2rem",
    }
  },
});

export const InputConteiner = styled("div", {
  marginTop: "2.5rem",
  marginBottom: "2rem",
  border: "1px solid $gray500",
  width: "100%",
  display: "flex",
  paddingRight: "1.25rem",
  alignItems: "center",
  fontSize: "0.875rem",
  color: "$gray400",
  borderRadius: "$sm",

  "&:placeholder": {
    color: "$gray400",
    fontSize: "0.875rem",
  },

  "&:has(input:focus)": {
    borderColor: "$green200",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  svg: {
    width: "1.25rem",
    color: "$gray500",
    height: "1.25rem",
  },

  "@media(max-width: 768px)": {
    margin: "0.5rem",
    width: "calc(100% - 1rem)",
  },
});

export const Input = styled("input", {
  all: "unset",
  width: "100%",
  padding: "0.875rem 0.5rem 0.875rem 1.25rem",
});




