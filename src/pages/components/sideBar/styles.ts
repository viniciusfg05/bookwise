import {styled} from "../../../styles/stitches.config"

export const ConteinerSideBar = styled("div", {
  padding: "1rem",

  "@media (max-width: 768px)": {
    padding: "0.5rem",
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
      fontSize: "0.875rem",
      flexDirection: "row ",
      width: "100%",
      margin: "0",
      marginTop: "0.9rem",
      gap: "0.5rem",
      justifyContent: "space-between",


      li: {
        
        a: {
          gap: "0.3rem",

          svg: {
            marginRight: "0",
            width: "20px",
          },
        }
      }
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
    paddingBottom: "0.5rem",
    alignItems: "start",

  },

  variants: {
    activeUrl: {
      desktop: {
        alignItems: "center",
        borderRadius: "9999px",
        borderLeft: "4px solid",
        height: "1rem",
        borderImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)  1",
        a: {
          color: "$white",

        }
      },
      mobile: {
        "&::after": {
          content: "",
          height: "0",
          width: "0",
        },
        
        a: {
          borderBottom: "3px solid #7FD1CC",
          paddingBottom: "0.4rem",
          color: "$white",
          borderRadius: "4px",
        }
      }
    },
    mobile: {
      true: {
        "&::after": {
          content: "",
          background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
          height: "0",
          width: "0",

        },
        borderBottom: "4px solid #7FD1CC",
      }
    }
  }
})