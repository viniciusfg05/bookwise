
import { styled } from "../../../styles/stitches.config"

export const ContainerHome = styled("div", {
  maxWidth: "90rem",
  height: "100vh",
  margin: "0 auto",
  color: "white",

  "@media (max-width: 768px)": {
    // padding: "0"
  },
})

export const ContentStart = styled("div", {
  display: "grid",
  gridTemplateColumns: "22.78% 47.22% 25.3472%",
  height: "100%",
  width: "100%",

  "@media (max-width: 768px)": {
    all: "unset"
  }
})

export const ConteinerFavoviteBooks = styled("div", {
  // background: "red",
  marginTop: "7.81rem",
  marginLeft: "4.1875rem",
  width: "100%",

  "> header": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "1rem",

    a: {
      color: "$purple100",
      textDecoration:"none",
    }
  },

  "@media(max-width: 768px)": {
    marginTop: "2rem",
    marginLeft: "0",
    paddingLeft: "0.5rem",

    "> header": {
      width: "calc(100% - 2rem)",

    }
  }

})

export const FavoritesConteiner = styled("div", {
  "@media(max-width: 768px)": {
    overflow: "auto",
    width: "100%",
    paddingBottom: "2.5rem",

  }

})

export const FavoritesContent = styled("div", {
  "@media(max-width: 768px)": {
    // maxWidth: "9000px",
    width: `calc((100% - 1rem)* ${2})`,
    overflow: "auto",

    section: {
      display: "flex",
      gap: "1rem",
      width: "100%",
      
    }
  }
})



export const ContentFavoviteBooks = styled("div", {
  display: 'flex',
  height: '12.436875rem',
  justifyContent: 'space-between',
  flexDirection: 'column',
  
  "@media(max-width: 768px)": {
    height: '11.436875rem',

  }
})

export const FavoviteBooksContent = styled("div", {
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

export const FavoviteBooks = styled("div", {
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

export const AssessmentContent = styled("div", {


  button: {
    all: "unset",
    cursor: "pointer",
    width: "1rem",
    height: "1rem",

    svg: {
      color: "$purple100",
    }
  },

  "@media(max-width: 768px)": {
    marginleft: "auto",
    display: "flex",
    width: "inherit",
  }
})
