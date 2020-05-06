import { createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import indigo from "@material-ui/core/colors/indigo";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: yellow,
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
