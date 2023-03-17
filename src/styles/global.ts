import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    overflow: "hidden !important",
    boxSizing: 'border-box',
  },

  body: {
    background: "$gray800"
  }

})