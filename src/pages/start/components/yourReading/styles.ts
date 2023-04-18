import { styled } from "../../../../styles/stitches.config";

export const MyBooksContainer = styled("div", {
  "@media(max-width: 768px)": {},
});

const contentCount = 3;

export const MyBooksContent = styled("div", {
  marginBottom: "0.75rem",

  header: {
    margin: "0",
    marginBottom: "2.5rem",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },

  section: {
    height: "100%",
    background: "$gray600",
  },

  // Margin exceto na primeira
  "section:not(:first-of-type)": {
    marginTop: "1rem",
  },

  "@media(max-width: 768px)": {
    display: "flex",

    section: {
      // display: "flex",
      width: "calc(100vw - 1rem)",
      height: "100%",

      header: {
        marginBottom: "0.5rem",
        flexDirection: "row",
        alignItems: "center",
        height: "4rem",
      },
    },

    "section:not(:first-of-type)": {
      marginTop: "0rem",
      marginLeft: "1rem",
    },
  },
});

export const MainContainer = styled("div", {
  width: "100%",
  height: "100%",
});

export const MainContent = styled("div", {
  display: "flex",
  gap: "1.5rem",
  width: "100%",
  height: "100%",

  img: {
    height: "100%",
  },

  "@media(max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const AssessmentContent = styled("div", {
  button: {
    all: "unset",

    svg: {
      color: "$purple100",
    },
  },

  "@media(max-width: 768px)": {
    marginleft: "auto",
    display: "flex",
    width: "6rem",
    justifyContent: "center",
    height: "100%",
  },
});

export const YourReadingsMain = styled("div", {
  width: "100%",

  "> header": {
    marginBottom: "1rem",

    p: {
      fontSize: "0.875rem",
      color: "$gray300",
    },
  },

  "> cite": {
    fontStyle: "normal",
    lineHeight: "1.5rem",

    strong: {},

    span: {
      fontSize: "0.875rem",
      color: "$gray300",
      display: "flex",
      flexDirection: "column",
      marginBottom: "1.5rem",
    },
  },

  "> p": {
    lineHeight: "1.5rem",
    color: "$gray300",
    fontSize: "0.875rem",
  },
});
