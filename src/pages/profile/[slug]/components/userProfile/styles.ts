import { styled } from "../../../../../styles/stitches.config";

export const UserProfileContainer = styled("div", {
  marginTop: "9.125rem",
  marginLeft: "auto",
  marginRight: "auto",
  width: "19.25rem",

  "@media(max-width: 768px)": {
    order: "1",
    marginTop: "1rem",
    width: "100vw",
    marginLeft: "0",
    marginRight: "0",
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
    width: "100vw",
    borderLeft: "0",
    height: "15rem",
    padding: "0.5rem",
    borderBottom: "1px solid $gray600",

    ul: {
      all: "unset",
      display: "flex",
      alignItems: "center",
      width: "100vw",

      li: {
        all: "unset",
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",


        "&:not(:first-of-type)": {
          marginTop: "0",
        },
      }
    }
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
    marginTop: "1rem",
    flexDirection: "row",
    alignItems: "center",

    cite: {
      marginTop: "0",
      marginLeft: "0.5rem",
      textAlign: "start",

      strong: {
        fontSize: "1.125rem",
      },

      p: {
        fontSize: "0.75rem",
      }
    }
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

export const HeaderProfile = styled("header", {
  display: "flex",
  gap: "0.5rem",
  marginTop: "1rem",
  padding: "0 0.5rem",

  "@media(min-width: 768px)": {
    display: "none"
  }
})