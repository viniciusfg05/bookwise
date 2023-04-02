import { styled } from "../../../styles/stitches.config"
import * as Avatar from '@radix-ui/react-avatar';

export const ConteinerFooter = styled("footer", {
  width: "100%",
})


export const ContentFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  gap: "1rem",

  button: {
    all: "unset",
    cursor: "pointer",
  },

  "> a": {
    display: "flex",
    alignItems: "center",
  },

  variants: {
    mobile: {
      true: {
        position: "absolute",
        top: "1.6rem",
        right: "1.6rem",
        gap: "1rem",

        p: {
          display: "none",
        },

        a: {
          svg: {
          }
        }
      },
    },
  },
  
})

export const Perfil = styled("div", {
  display: "flex",
  alignItems: "center",

  img: {
    margin: "0"
  },
})

export const ContentPerfil = styled("div", {

})

