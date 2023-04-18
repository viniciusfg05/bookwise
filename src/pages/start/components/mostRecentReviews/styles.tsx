import { useContext } from "react";
import { styled } from "../../../../styles/stitches.config";

export const MainContainer = styled("div", {
  width: "100%",
  height: "100%",
})


export const MainContent = styled("div", {
  display: "flex",
  gap: "1.5rem",
  width: "100%",
  height: "100%",

  "@media(max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  }
})

export const MyBooksContainer = styled("div", {
  overflow: "hidden",
  
  "@media(max-width: 768px)": {

  }
})

const contentCount = 150

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
    width: "38rem",
    height: "100%",
  },

  // Margin exceto na primeira
  "section:not(:first-of-type)": {
    marginTop: "1rem",
  },
  
  "@media(max-width: 768px)": {


      section: {
        width: "calc(100vw - 1rem)",

        header: {
          flexDirection: "column",
        }
      },

      "section:not(:first-of-type)": {

      },
    }
})

export const AssessmentContent = styled("div", {


  button: {
    all: "unset",
    cursor: "pointer",

    svg: {
      color: "$purple100",
    }
  },

  "@media(max-width: 768px)": {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "flex-start",
    width: "inherit",
    height: "100%",
  }
})

export const AssessmentBook = styled("div", {
  width: "100%",
  height: "100%",
  lineHeight: "1.5rem",
  
  cite: {
    all: "unset",
    lineHeight: "1.5rem",
    fontStyle: "normal",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",

    strong: {
      fontWeight: "700",
      fontSize: "1rem",
    },

    span: {
      color: "$gray400",
      fontSize: "0.875rem",
    }
  },

  p: {
    fontSize: "0.875rem",
    color: "$gray300",

    a: {
      textDecoration: "none",
      fontSize: "0.875rem",
      color: "$purple100",
      fontWeight: "700",
    }
  },

})

export const ProfileContent = styled("div", {
  display: "flex",
  gap: "1rem",
  height: "3rem",
  alignItems: "flex-start",

  "@media(max-width: 768px)": {
    gap: "0.5rem",
  }
})

export const NameEInfos = styled("div", {

  a: {
    textDecoration: "none",
  },

  p: {
    fontSize: "1rem",
    color: "$gray100"
  },
  span: {
    fontSize: "0.875rem",
    color: "$gray400"
  }
})
