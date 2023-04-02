import { styled } from "../../../styles/stitches.config"

export const RatingStartsContainer = styled("div", {
  gap: "0.2rem",
  display: "flex",

})

export const Button = styled("button", {
  variants: {
    disabled: {

      true: {
        cursor: "default",
        svg: {
          cursor: "default"
        }
      }
    }
  },

  all: "unset",

  svg: {
    cursor: "pointer",

  }
})

