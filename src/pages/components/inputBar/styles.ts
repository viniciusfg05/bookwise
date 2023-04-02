import { styled } from "../../../styles/stitches.config"

export const InputConteiner = styled("form", {
  variants: {
    willBeDisplayedIn: {
      pageProfile: {
        width: "100%",
        display: "flex",
      },
      pageExplorer: {
        width: "27.0625rem",
        marginLeft: "auto",
        display: "flex",
      },
    }
  },

  marginTop: "2.5rem",
  marginBottom: "2rem",
  border: "1px solid $gray500",

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

export const ErrosStyles = styled("p", {
  color: "$purple100",
  fontSize: "0.75rem",
  whiteSpace: "nowrap",
  marginRight: "1rem"
});