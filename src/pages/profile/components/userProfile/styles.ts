import { styled } from "../../../../styles/stitches.config";

export const UserProfileContainer = styled("div", {
  marginTop: "9.125rem",
  marginLeft: "auto",
  marginRight: "auto",
  width: "19.25rem",

  "@media(max-width: 768px)": {
    marginTop: "3rem",
  }
})

export const UserProfileContent = styled("div", {
  borderLeft: "1px solid $gray600",


  ul: {
    padding: "1.5rem",
    display: "flex",
    width: "calc(12.25rem + 3rem)",
    flexDirection: "column",
    margin: "0 auto",

    li: {
      display: "flex",
      gap: "1.5rem",

      svg: {
        width: "2rem",
        height: "2rem",
        color: "$green100",
      },

      "&:not(:first-of-type)": {
        marginTop: "2.5rem",
      },

      header: {
        display: "flex",
        flexDirection: "column",
        // width: "100%",


        span: {
          fontSize: "0.875rem",
          color: "$gray300"
        }
      }
    },

  },

  "@media(max-width: 768px)": {
    borderLeft: "0",
    borderTop: "1px solid $gray600",
  }
})

export const ProfileStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",


  cite: {
    marginTop: "1.5rem",
    fontStyle: "normal",
    textAlign: "center",

    strong: {
      fontSize: "1.5rem",
    },

    p: {
      fontSize: "0.875rem",
      color: "$gray400",
    }
  },

  "@media(max-width: 768px)": {
    marginTop: "3rem"
  }
})

export const Divider = styled("div", {
  width: "2rem",
  height: "0.25rem",
  background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
  borderRadius: "$full",
  display: "flex",
  margin: "2rem auto",
  justifyContent: "center"
})