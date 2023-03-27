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
  backgroundColor: "$gray800",
  position: "fixed",
  maxWidth: "41.25rem",
  width: "100%",
  height: "100vh",
  right: "0",
  top: "0",
  padding: "3rem",
  overflow: "auto",
  animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,

    "&::-webkit-scrollbar": {
    width: "7px",
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray700",

  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray500",
    transition: "0.3s",

  },

  "&::-webkit-scrollbar-thumb:hover": {
    background: "$gray600",
  },

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
  background: "$gray700",
  padding: "2rem",
  height: "25.875rem",
  marginBottom: "2.5rem",
  borderRadius: "$md",
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

export const AssessmentsContent = styled("div", {
  width: "100%",

  header: {
    marginBottom: "1.375rem",

    p: {
      color: "$gray200",
      
    }
  }
});

export const Assessments = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  background: "$gray700",
  transition: "0.3s",
  padding: "1.5rem",
  borderRadius: "$md",
  marginBottom: "0.75rem",

  "&:hover": {
    background: "$gray600",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    
    svg: {
      color: "$purple100"
    }
  },

  "> body": {
    background: "transparent",
    width: "100%",
    color: "$gray300",
  }
});

export const Profile = styled("div", {
  display: "flex",

  cite: {
    display: "flex",
    flexDirection: "column",
    fontStyle: "normal",
    marginLeft: "1rem",

    strong: {
      color: "$white"
    },

    time: {
      color: "$gray400"
    }
  }
});



