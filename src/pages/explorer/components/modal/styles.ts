import {styled} from "../../../../styles/stitches.config" 
import * as Dialog from '@radix-ui/react-dialog';
import { keyframes } from "@stitches/react";



const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { translate: "150%" },
  "100%": { translate: "0%" },
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$gray700",
  position: "fixed",
  maxWidth: "41.25rem",
  width: "100%",
  height: "100vh",
  right: "0",
  top: "0",
  padding: "3rem",
  animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  
  "&:focus": {
    outline: "none",
  },

  "@media (max-width: 768px)": {
    maxWidth: "100vw",
    width: "100%",
    height: "100vh",
  }
})

export const BookDetail = styled("div", {
  width: "100%",
  height: "25.875rem",
})

export const BookContent = styled("div", {
  width: "100%",
  height: "15.125rem",
})
