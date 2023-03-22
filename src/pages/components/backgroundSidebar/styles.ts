import { styled } from "../../../styles/stitches.config"

export const BackgroundSidebarStyles = styled("div", {
  height: "calc(57.5rem)",
  background: "$gray700",
  position: "absolute",
  width: "14.5rem",
  borderRadius: "$lg",
  zIndex: "-999",

  img: {
    position: "absolute",
    object: "cover",
    // overflow: "hidden",
    borderRadius: "$lg",

    "&:nth-child(1)": {
      // position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "$lg",
    },

    "&:nth-child(2)": {
      top: 0,
      object: "cover",
      overflow: "hidden",
      borderRadius: "$lg",
      

      position: "absolute",
      width: "100%",
      height: "13.8125rem",
    },

    "&:nth-child(3)": {
      top: 0,
      object: "cover",
      overflow: "hidden",
      borderRadius: "$lg",
      

      position: "absolute",
      width: "100%",
      height: "221px",
    },

    "&:nth-child(4)": {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "100%",
      borderRadius: "$lg",
    },

  },

  "@media (max-width: 768px)": {
    width: "calc(100% - 1rem)",
    height: "8rem",
  },
})
