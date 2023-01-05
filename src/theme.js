import { Platform } from "react-native";

const theme = {
  appBar: {
    primary: "#24292e",
    textSecondary: "#999",
    textPrimary: "white"
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "#fefefe"
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: "400",
    bold: "700"
  }
};

export default theme;