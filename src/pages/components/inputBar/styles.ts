import { styled } from "../../../styles/stitches.config"

export const Container = styled("div", {

})

export const InputConteiner = styled("form", {
  variants: {
    willBeDisplayedIn: {
      pageProfile: {
        width: "calc(100% - 1rem)",
        display: "flex",

        "@media (max-width: 768px)": {
          width: "calc(100% - 1rem)",
          marginLeft: "0.5rem",
        }
      },
      pageExplorer: {
        width: "27.0625rem",
        marginLeft: "auto",
        display: "flex",

        "@media (max-width: 768px)": {
          width: "calc(100vw - 1rem)",
          marginLeft: "0",
        }
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
    margin: "0",
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

export const ClearSearch = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginRight: "1rem",
  cursor: "pointer",
  color: "$gray300",
  transition: "0.3s",
  border: "1px solid $gray500",
  borderRadius: "$full",
  padding: "0.2rem 0.5rem 0.2rem 0.5rem",
  marginTop: "-1rem",
  marginBottom: "2rem",
  
  svg: {
    color: "$gray300",
    width: "1rem",
  },

  "&:hover": {
  color: "$purple100",

    svg: {
      color: "$purple100",
    }
  },

  "@media (max-width: 768px)": {
    marginTop: "1rem",
    marginLeft: "0.5rem",
  }
})