import { createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import indigo from "@material-ui/core/colors/indigo";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: yellow,
  },
});

export default theme;
