import { useRouter } from "next/router"
import {styled} from "../../../styles/stitches.config"
export const ConteinerSideBar = styled("div", {
  padding: "1rem",
  
  "@media (max-width: 768px)": {
    padding: "0.5rem",
  },
  
  variants: {
    ifNotLoggedInHide: {
      true: {
        display: "none",
      }
    }
  }
})

export const ContentSidebar = styled("div", {
  padding: "2rem",
  width: "14.5rem",
  height: "calc(100vh)",
  
  "> img": {
    width: "8rem",
    display: "flex",
    margin: "0.5rem auto 4rem auto"
  },

  ul: {
    listStyleType: "none",
    alignItems: "flex-start",
    
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "7.7rem",
    margin: "0 auto",
  },

  footer: {
    height: "37rem",
    display: "flex",
    alignItems: "end",
  },

  "@media (max-width: 768px)": {
    padding: "1rem",
    width: "100%",
    height: "8rem",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",

    "> img": {
      width: "8rem",
      height: "2rem",
      display: "flex",
      margin: "0.5rem 0",
    },

    ul: {

      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      width: "100%",
      marginTop: "1.5rem",

      li: {
        
        a: {

          svg: {
            width: "20px",
          },
        }
      }
    }
  },

  "@media (max-width: 328px)": {
    ul: {
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "0.5rem"
    }
  }

})

export const LiContent = styled("li", {
  alignItems: "end",
  display: "flex",
  paddingLeft: "1rem",
  height: "100%",


  a: {
    textDecoration: "none",
    alignItems: "end",
    display: "flex",
    alignContent: "end",
    color: "$gray400",
    transition: "0.3s",

    svg: {
      marginRight: "0.5rem",
    },

    "&:hover": {
      color: "$white"
    },
  },

  "@media (max-width: 768px)": {
    paddingLeft: "0.5rem",
    display: "flex",
    alignItems: "center",
  },

  "@media (max-width: 328px)": {
    padding: "0",

  },

  variants: {
    activeUrl: {
      true: {
        position: "relative",
        alignItems: "center",
        borderRadius: "$full",

        "&::after": {
          position: "absolute",
          alignItems: "center",
          content: "",
          borderLeft: "4px solid",
          height: "1rem",
          borderImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)  1",
          left: 0,
        },

        a: {
          color: "$white",
        },
        
        "@media (max-width: 768px)":{
          "&::after": {
            position: "absolute",
            alignItems: "center",
            content: "",
            borderLeft: "4px solid",
            heght: "1px",
            width: "1rem",
            borderImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)  1",
            left: 0,
          },

          "@media (max-width: 328px)":{
            "&::after": {
              border: "0"
            },
          }
        },

      },
    },
    mobile: {
      true: {

      }
    }
  }
})