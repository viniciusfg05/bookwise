import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    // overflow: "hidden",
    boxSizing: "border-box",
  },

  body: {
    background: "$gray800",
    
    "&::-webkit-scrollbar": {
      width: "7px",
    },
  
    "&::-webkit-scrollbar-track": {
      background: "$gray700",
  
    },
  
    "&::-webkit-scrollbar-thumb": {
      background: "$gray500",
      transition: "0.3s",
  
    },
  
    "&::-webkit-scrollbar-thumb:hover": {
      background: "$gray600",
    }
  },

})
