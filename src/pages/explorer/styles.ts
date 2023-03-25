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
  display: "grid",
  gridTemplateColumns: "22.78% 1fr",
  height: "100%",
  width: "100%",

  "@media (max-width: 768px)": {
    all: "unset"
  }
})

export const ExplorerConteiner = styled("div", {
  maxWidth: "65.84rem",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",

  "> header": {
    marginTop: "4.56rem",
    marginBottom: "3.375rem",
    gap: "1rem",
    display: "flex",
    fontSize: "1.125rem",
    alignItems: "center",
  },
  

  nav: {
    overflowX: "auto",
    width: "100%",

    ul: {
      cursor: "pointer",
      display: "flex",
      listStyleType: "none",
      gap: "1rem",
      // maxWidth: "9000px",
      width: `calc((100%) * ${1})`,
      overflowX: "auto",
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
    
    "> header": {
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
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
      // maxWidth: "9000px",
      gap: "1.25rem",
      width: `calc((100%) * ${4})`,
      marginTop: "2rem",
      overflow: "auto",
    },
  }
})

export const BooksContent = styled("div", {
  borderRadius: "$md",
  display: "flex",
  gap: "1rem",
  height: "100%",
  alignItems: "flex-start",
  padding: "1rem",
  background: "$gray700",
  marginBottom: "1rem",
  width: "calc((100% - 3rem)",  


  img: {
    height: "100%",
    // width: "30%",
  },

  "@media(max-width: 768px)": {
    gap: "0.5rem",
    marginBottom: "0",

  }
})

export const BooksMainConteiner = styled("div", {
  display: "flex",
  height: "100%",
  width: "70%",
  justifyContent: "space-between",
  flexDirection: "column",
  
  p: {
    fontSize: "1rem",
    color: "$gray100"
  },
  span: {
    fontSize: "0.875rem",
    color: "$gray400"
  },

  "@media(max-width: 768px)": {

  }
})


export const DialogOverlay = styled(Dialog.Overlay, {})
export const DialogContent = styled(Dialog.Content, {})
export const DialogTitle = styled(Dialog.Title, {})
export const DialogDescription = styled(Dialog.Description, {})