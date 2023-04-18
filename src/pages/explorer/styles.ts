import {styled} from "../../styles/stitches.config" 
import * as Dialog from '@radix-ui/react-dialog';
export const ContainerExplorer = styled("div", {
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  color: "white",

  "@media (max-width: 768px)": {
    // padding: "0"
  },
})

export const ContentExplorer = styled("div", {
  display: "flex",
  height: "100%",
  width: "100%",

  "@media (max-width: 768px)": {
    all: "unset",
  }
})

export const ExplorerConteiner = styled("div", {
  maxWidth: "65.84rem",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",

  "section": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    // marginBottom: "1.5rem",
  },

  "> header": {
    marginTop: "4.56rem",
    justifyContent: "space-between",
    marginBottom: "1rem",
    gap: "1rem",
    display: "flex",
    fontSize: "1.125rem",
    alignItems: "center",

    svg: {
      width: "1.5rem",
      height: "1.5rem",
    },

    h2: {
      fontSize: "1.5rem",
    }
  },
  

  nav: {
    // overflow: "auto",
    width: "100%",

    ul: {
      cursor: "pointer",
      display: "flex",
      listStyleType: "none",
      gap: "1rem",
      // maxWidth: "9000px",
      width: `calc((100%) * ${1})`,
      overflow: "auto",
      padding: "0.2rem",

      "&::-webkit-scrollbar": {
        width: "7px",
        height: "2px",
      },
      
      "&::-webkit-scrollbar-track": {
        background: "$gray800",
    
      },
    
      "&::-webkit-scrollbar-thumb": {
        background: "$gray500",
        transition: "0.3s",
    
      },
    
      "&::-webkit-scrollbar-thumb:hover": {
        background: "$gray600",
      },
    }
  },

  "@media (max-width: 768px)": {
    paddingLeft: "0.5rem",
    width: "100vw",

    section: {
      marginBottom: "1rem",
    },
    
    "> header": {
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
      flexDirection: "column",
      alignItems: "flex-start",
    },

    nav: {
      
      ul: {
        gap: "0.5rem",
        fontSize: "0.875rem",
      }
    }
  }
})

export const LiContent = styled("li", {
  padding: "0.5rem 1rem",
  display: "flex",
  backgroundColor: "$purple200",
  borderRadius: "$full",
  transition: "0.3s",

  "&:hover": {
    background: "$purple200"
  },

  a: {
    color: "white",
    textDecoration: "none",
    display: "flex",

  },

  variants: {
    variantsStyle: {
      true: {
      },

      false: {
        backgroundColor: "transparent",
        border: "1px solid $purple200"
      }
    }
  },

  "@media(max-width: 768px)": {
    padding: "0.25rem 0.5rem",

  }
})

export const BooksContainer = styled("div", {
  display: "flex",
  width: "100%",

  "> section": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    // maxWidth: "9000px",
    gap: "1.25rem",
    marginTop: "3rem",
  },

  "@media (max-width: 768px)": {
    overflow: "auto",
    width: "100%",

    "> section": {
      display: "flex",
      flexDirection: "column",
      // maxWidth: "9000px",
      gap: "1.25rem",
      width: `calc(100% - 0.5rem)`,
      marginTop: "2rem",
      overflow: "auto",
    },
  }
})

export const BooksContent = styled("div", {
  border: "2px solid $gray700",
  
  variants: {
    typeFor: {
      page: {
        cursor: "pointer",
        borderRadius: "$md",
        display: "flex",
        gap: "1rem",
        alignItems: "flex-start",
        padding: "1rem",
        background: "$gray700",
        marginBottom: "1rem",
        width: "calc((100% - 3rem)",
        transition: "0.3s",


        "&:hover": {
          border: "2px solid $gray600",
                
        },


        img: {
          height: "9.5rem",
          // width: "30%",
        },

        "@media(max-width: 768px)": {
          gap: "0.5rem",
          width: "100%",
          marginBottom: "0",
        },
      },
      modal: {
        borderRadius: "$md",
        display: "flex",
        gap: "2rem",
        height: "100%",
        alignItems: "flex-start",
        // padding: "1rem",
        background: "$gray700",
        marginBottom: "2.5rem",
        width: "calc((100% - 3rem)",

        img: {
          height: "15.125rem",
          width: "10.7rem",
        },

        "@media(max-width: 768px)": {
          gap: "0.5rem",
          marginBottom: "0",
        },
      },
    },
  },
})

export const AssessmentContent = styled("div", {
  button: {
    all: "unset",
    cursor: "pointer",
    lineHeight: 0,

    svg: {
      color: "$purple100",
    },
  },

  p: {
    color: "$gray400",
    fontSize: "0.875rem",
    fontWeight: "normal",
    marginTop: "0.3rem",
  },

  "@media(max-width: 768px)": {},
});

export const BooksMainConteiner = styled("div", {
  variants: {
    typeFor: {
      page: {
        display: "flex",
        height: "100%",
        width: "70%",
        justifyContent: "space-between",
        flexDirection: "column",

        strong: {
          fontSize: "1rem",
          color: "$gray100",
          display: "flex",
        },
        span: {
          fontSize: "0.875rem",
          color: "$gray400",
        },

        "@media(max-width: 768px)": {},
      },
      modal: {
        display: "flex",
        height: "100%",
        width: "70%",
        justifyContent: "space-between",
        flexDirection: "column",

        strong: {
          display: "flex",
          fontSize: "1.125rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          // fontFamily: "nunito",
          color: "$gray100",
        },
        span: {
          fontSize: "1rem",
          color: "$gray400",
        },

        "@media(max-width: 768px)": {},
      },
    },
  },
});


export const DialogTrigger = styled(Dialog.Trigger, {
})

export const ButtonContent = styled("button", {
    all: "unset",
    backgroundColor: "$gray700",
    width: "100%",
    height: "100%",
    borderRadius: "$md"
})

export const DialogContent = styled(Dialog.Content, {})
export const DialogTitle = styled(Dialog.Title, {})
export const DialogDescription = styled(Dialog.Description, {})




