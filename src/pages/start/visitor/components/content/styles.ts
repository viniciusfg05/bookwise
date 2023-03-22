import {styled} from "../../../../../styles/stitches.config"

export const ContentStart = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 57.48% 1fr",
  height: "100%",

  "@media (max-width: 768px)": {
    all: "unset"
  }
})

export const ContainerContent = styled("div", {
  width: "100%",
  position: "relative",
})

export const ContentContent = styled("div", {

  "> header": {
    marginTop: "4.56rem",
    marginBottom: "1rem",
    display: "flex",
    fontSize: "1.125rem",
    alignItems: "center",

    svg: {
      marginRight: "1rem",
    }
  },

  "@media(max-width: 768px)": {
    
    "> header": {
      marginTop: "2.50rem",
      paddingLeft: "0.5rem",
    }
  }
})

export const AssessmentManis = styled("div", {


  header: {
    marginBottom: "1rem",
  },

  "section": {
    background: "$gray700",
    padding: "1.5rem",
    borderRadius: "$md",
    height: "100%",
  },

  "@media(max-width: 768px)": {
    paddingLeft: "0.5rem",
    marginBottom: "2.5rem",


    "> header": {
      marginTop: "1rem",

    },

    main: {

      header: {
        // marginBottom: "0",

      },
  
      section: {
        padding: "1rem",
        height: "100%"
      }
    },
  }
})


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
  p: {
    fontSize: "1rem",
    color: "$gray100"
  },
  span: {
    fontSize: "0.875rem",
    color: "$gray400"
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

export const AssessmentBook = styled("div", {
  width: "100%",
  height: "100%",
  lineHeight: "1.5rem",

  cite: {
    all: "unset",
    lineHeight: "1.5rem",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  }
})



export const YourReadingsConteiner = styled("div", {
  marginBottom: "2.5rem",

  header: {
    marginBottom: "1rem",
  },

  section: {
    background: "$gray700",
    padding: "1.5rem",
    borderRadius: "$md",
    height: "100%",
  },

  "@media(max-width: 768px)": {
    height: "100%",
    paddingLeft: "0.5rem",

    "> header": {
      marginTop: "1rem",

    },

    main: {

      header: {
        // marginBottom: "0",

      },
  
      section: {
        padding: "1rem",
        height: "100%"
      }
    },
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
  