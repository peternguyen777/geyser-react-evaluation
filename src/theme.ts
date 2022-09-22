import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      background: "#FCFCFC",
    },
    h1: {
      fontWeight: "bold",
      fontFamily: "Inter",
      fontSize: "35px",
      lineHeight: "140%",
      letterSpacing: "0.75%",
      color: "#212529",
      opacity: "80%",
    },
    h2: {
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: "semibold",
      lineHeight: "140%",
      color: "#212529",
    },
    h3: {
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: "semibold",
      lineHeight: "140%",
      color: "#212529",
      opacity: "80%",
    },
    h4: {
      fontWeight: "bold",
      fontFamily: "Inter",
      fontSize: "10px",
      lineHeight: "140%",
      letterSpacing: "0.4px",
      color: "#6C757D",
    },
    h5: {
      fontWeight: "medium",
      fontFamily: "Inter",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#212529",
    },
    h6: {
      fontWeight: "normal",
      fontFamily: "Inter",
      fontSize: "10px",
      lineHeight: "14px",
      letterSpacing: "0.4px",
      color: "#212529",
    },
    p: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "160%",
      color: "#212529",
      opacity: "80%",
    },
    input: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "160%",
      color: "#212529",
      opacity: "80%",
    },
    textarea: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "160%",
      color: "#212529",
      opacity: "80%",
    },
    ul: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "160%",
      color: "#212529",
      opacity: "80%",
    },
  },
};

const theme = extendTheme({
  styles,
});

export default theme;
