import React from "react";
import type { Preview } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "../src/state/history";
import theme from "../src/materialUI/theme.js";
import store from "../src/state/store";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
    (Story) => (
      <ConnectedRouter history={history}>
        <Story />
      </ConnectedRouter>
    ),
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
  initialGlobals: {
    viewport: { value: "iphone6", isRotated: false },
  },
};

export default preview;
