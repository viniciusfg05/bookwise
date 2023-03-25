import { styled } from "../../../../../styles/stitches.config";

export const ContentStart = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 57.48% 1fr",
  height: "100%",

  "@media (max-width: 768px)": {
    all: "unset",
  },
});

export const ContainerContent = styled("div", {
  width: "100%",
  position: "relative",
});

export const ContentContent = styled("div", {
  "> header": {
    marginTop: "4.56rem",
    marginBottom: "1rem",
    display: "flex",
    fontSize: "1.125rem",
    alignItems: "center",

    svg: {
      marginRight: "1rem",
    },
  },

  "@media(max-width: 768px)": {
    "> header": {
      marginTop: "2.50rem",
      paddingLeft: "0.5rem",
    },
  },
});

export const AssessmentManis = styled("div", {
  header: {
    marginBottom: "1rem",
  },

  section: {
    background: "$gray700",
    padding: "1.5rem",
    borderRadius: "$md",
    height: "100%",
  },

  "@media(max-width: 768px)": {
    paddingLeft: "0.5rem",
    marginBottom: "2.5rem",

    "> header": {
      marginTop: "1rem",
    },

    main: {
      header: {
        // marginBottom: "0",
      },

      section: {
        padding: "1rem",
        height: "100%",
      },
    },
  },
});

export const YourReadingsConteiner = styled("div", {
  marginBottom: "2.5rem",

  header: {
    marginBottom: "1rem",
  },

  section: {
    background: "$gray700",
    padding: "1.5rem",
    borderRadius: "$md",
    height: "100%",
  },

  "@media(max-width: 768px)": {
    height: "100%",
    paddingLeft: "0.5rem",

    "> header": {
      marginTop: "1rem",
    },

    main: {
      header: {
        // marginBottom: "0",
      },

      section: {
        padding: "1rem",
        height: "100%",
      },
    },
  },
});

export const YourReadingsMain = styled("div", {
  "> header": {
    marginBottom: "1rem",

    p: {
      fontSize: "0.875rem",
      color: "$gray300",
    },
  },

  "> cite": {
    lineHeight: "1.5rem",

    span: {
      fontSize: "0.875rem",
      color: "$gray300",
      display: "flex",
      flexDirection: "column",
      marginBottom: "1.5rem",
    },
  },

  "> p": {
    lineHeight: "1.5rem",
  },
});
