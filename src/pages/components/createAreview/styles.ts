import { styled } from "../../../styles/stitches.config"

export const TextareaContainer = styled("div", {
  width: "100%",
  height: "13.5rem"
})

export const Textarea = styled("textarea", {
  all: "inherit",
  width: "100%",
  display: "flex",
  background: "$gray800",
  color: "$gray400",
  fontSize: "0.75rem",
  padding: "1.125rem",
  height: "10.25rem",
  fontFamily: "$default",
  border: "$gray500",
  borderRadius: "$sm",

  "&:placeholder": {
    color: "$gray400",
    fontSize: "0.75rem"
  }
})

export const ButtonTextara = styled("div", {
  cursor: "pointer",
  display: "flex",
  gap: "0.5rem",
  justifyContent: "end",
  width: "100%",
  marginTop: "0.75rem",

  button: {
    display: "flex",
    background: "$gray600",
    borderRadius: "$sm",
    padding: "0.5rem",
    width: "2.5rem",
    height: "2.5rem",
    border: "none",
    lineHeight: "0",



    svg: {
      width: "1.5rem",
      height: "1.5rem"
    }
  }
})


export const Profile = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  
  "> strong": {
    color: "$gray100",
  },


  cite: {
    display: "flex",
    flexDirection: "column",
    fontStyle: "normal",

    strong: {
      color: "$gray100"
    },

    time: {
      color: "$gray400"
    }
  }
});

export const ToAssessContainer = styled("form", {
  width: "100%",
  height: "20.5rem",
  background: "$gray700",
  borderRadius: "$md",
  marginBottom: "1rem",
  padding: "1.5rem",
})

export const RatingStartsContainer = styled("div", {
  gap: "0.2rem",
  display: "flex",

})

export const Button = styled("button", {


  all: "unset",

  svg: {
    cursor: "pointer",

  }
})

export const ErrorStyles = styled("p", {
  color: "red",
  fontSize: "0.75rem",
})