import { styled } from "../../../../styles/stitches.config";

export const BooksContent = styled("div", {
  variants: {
    typeFor: {
      page: {
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
        },
      },
      modal: {
        borderRadius: "$md",
        display: "flex",
        gap: "2rem",
        height: "100%",
        alignItems: "flex-start",
        // padding: "1rem",
        background: "$gray700",
        marginBottom: "2.5rem",
        width: "calc((100% - 3rem)",

        img: {
          height: "15.125rem",
          width: "10.7rem",
        },

        "@media(max-width: 768px)": {
          gap: "0.5rem",
          marginBottom: "0",
        },
      },
    },
  },
});

export const BooksMainConteiner = styled("div", {
  variants: {
    typeFor: {
      page: {
        display: "flex",
        height: "100%",
        width: "70%",
        justifyContent: "space-between",
        flexDirection: "column",

        strong: {
          fontSize: "1rem",
          color: "$gray100",
          display: "flex",
        },
        span: {
          fontSize: "0.875rem",
          color: "$gray400",
        },

        "@media(max-width: 768px)": {},
      },
      modal: {
        display: "flex",
        height: "100%",
        width: "70%",
        justifyContent: "space-between",
        flexDirection: "column",

        strong: {
          display: "flex",
          fontSize: "1.125rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          // fontFamily: "nunito",
          color: "$gray100",
        },
        span: {
          fontSize: "1rem",
          color: "$gray400",
        },

        "@media(max-width: 768px)": {},
      },
    },
  },
});
