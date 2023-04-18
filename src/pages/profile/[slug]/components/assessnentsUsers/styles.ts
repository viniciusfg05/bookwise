import { styled } from "../../../../../styles/stitches.config";

export const AssessmentsTheUsersContainer = styled("div", {
  display: "flex",
  width: "100%",

  "@media(max-width: 768px)": {
    padding: "0.5rem",
    order: "2"
  },
});

export const AssessmentsTheUsersContent = styled("div", {
  width: "100%",

  "@media(max-width: 768px)": {
    width: "100%",
    display: "flex",
    overflow: "auto",
  },
  
});

export const MainContainer = styled("div", {
  
  "@media(max-width: 768px)": {
    width: "100%",
    display: "flex",
    flexDirection: 'column',
    marginRight: "1rem",
    padding: "0",
  },
});

export const MainContent = styled("div", {

  time: {
    fontSize: "0.875rem",
    color: "$gray300",
  },

  section: {
    padding: "1.5rem",
    background: "$gray700",
    borderRadius: "$md",
    marginTop: "0.5rem",
    marginBottom: "1.5rem",

    header: {
      marginBottom: "1.5rem",
      display: "flex",
      width: "100%",

      img: {
        width: "6.125rem",
        height: "8.375rem",
      },

      cite: {
        display: "flex",
        flexDirection: "column",
      },
    },

    main: {
      color: "$gray300",
      fontSize: "0.875rem",
      lineHeight: "$base",
    },
  },

  "@media(max-width: 768px)": {
    width: "calc(100vw - 1rem)",

    section: {
      marginBottom: "0.5rem",
    }
  },
});

export const ContentCite = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  cite: {
    fontStyle: "normal",

    strong: {
      fontSize: "1.125rem",
    },

    span: {
      color: "$gray400",
      fontSize: "0.875rem",
    },
  },

  svg: {
    color: "$purple100",
  },
});