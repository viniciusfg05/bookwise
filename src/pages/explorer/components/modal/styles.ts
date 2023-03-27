import { styled } from "../../../../styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";
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
    padding: "1rem",
  },
});

export const BookDetail = styled("div", {
  width: "100%",
  height: "25.875rem",
});

export const BookContent = styled("div", {
  width: "100%",
  height: "15.125rem",
});

export const Infos = styled("div", {
  borderTop: "1px solid $gray600",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "1.5rem 0",
});

export const ContentInfo = styled("div", {
  width: "13.6875rem",
  display: "flex",
  alignItems: "center",

  svg: {
    width: "1.5rem",
    height: "1.5rem",
    color: "$green100",
    marginRight: "1rem",
  },

  article: {
    p: {
      color: "$gray400",
      fontSize: "0.875rem",
    },

    strong: {
      color: "$gray200",
      fontSize: "1rem",
    },
  },
});

export const Divide = styled("div", {
  border: "1px solid red",
});
