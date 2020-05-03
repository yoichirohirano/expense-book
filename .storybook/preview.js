import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { muiTheme } from "storybook-addon-material-ui";
import theme from "../src/materialUI/theme.js";

addDecorator(muiTheme(theme));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone6",
  },
});
