import { styled } from "../../../../styles/stitches.config";


export const NavbarCotainer = styled("nav", {
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
  },

  "@media (max-width: 768px)": {
    nav: {
      ul: {
        gap: "0.5rem",
        fontSize: "0.875rem",
      },
    },
  },
});

export const LiContent = styled("li", {
  padding: "0.5rem 1rem",
  display: "flex",
  backgroundColor: "$purple200",
  borderRadius: "$full",
  transition: "0.3s",
  width: "100%",

  "&:hover": {
    background: "$purple200",
    color: "$gray100",
  },

  p: {
    width: "100%",
    color: "white",
    textDecoration: "none",
    display: "flex",
    whiteSpace: "nowrap",
    transition: "0.3s",

    "&:hover": {
      color: "$gray100",
    },
  },

  variants: {
    variantsStyle: {
      true: {
        p: {
          color: "$gray100",
        }
      },

      false: {
        backgroundColor: "transparent",
        border: "1px solid $purple200",

        p: {
          color: "$purple100"
        }
      }
    }
  },

  "@media(max-width: 768px)": {
    padding: "0.25rem 0.5rem",

  }
})
