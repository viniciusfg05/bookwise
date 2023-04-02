import { styled } from "../../../../styles/stitches.config";

export const MyBooksContainer = styled("div", {
  
  "@media(max-width: 768px)": {
    overflow: "auto",
    width: "100%",
  }
})

const contentCount = 3

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
  },

  // Margin exceto na primeira
  "section:not(:first-of-type)": {
    marginTop: "1rem",
  },
  
  "@media(max-width: 768px)": {
      display: "flex",
      // maxWidth: "9000px",
      width: `calc((100%) * ${contentCount})`,
      overflow: "auto",


      section: {
        // display: "flex",
        width: "calc(100vw - 2rem)",
        height: "100%",

        header: {
          flexDirection: "column",
          height: "4rem",
        }
      },

      "section:not(:first-of-type)": {
        marginTop: "0rem",
        marginLeft: "1rem",
      },
    }
})

export const MainContainer = styled("div", {
  width: "100%",
  height: "100%",
})


export const MainContent = styled("div", {
  display: "flex",
  gap: "0.5rem",
  width: "100%",
  height: "100%",

  "@media(max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  }
})

export const AssessmentContent = styled("div", {


  button: {
    all: "unset",
    cursor: "pointer",
    // backgroundColor: "red",
    width: "1.5rem",
    height: "1.5rem",

    svg: {
      color: "$purple100",
    }
  },

  "@media(max-width: 768px)": {
    marginleft: "auto",
    display: "flex",
    justifyContent: "center",
    width: "inherit",
    height: "100%",
  }
})

export const YourReadingsMain = styled("div", {

  "> header": {
    marginBottom: "1rem",

    p: {
      fontSize: "0.875rem",
      color: "$gray300",
    }
  },

  "> cite": {
      
    lineHeight: "1.5rem",

    span: {
      fontSize: "0.875rem",
      color: "$gray300",
      display: "flex",
      flexDirection: "column",
      marginBottom: "1.5rem",
      
      
    }
  },

  "> p": {
    lineHeight: "1.5rem",
  }
})