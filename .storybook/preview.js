import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { muiTheme } from "storybook-addon-material-ui";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "../src/state/history";
import theme from "../src/materialUI/theme.js";
import store from "../src/state/store";

addDecorator(muiTheme(theme));
addDecorator(story => <ConnectedRouter history={history}>{story()}</ConnectedRouter>);
addDecorator(story => <Provider store={store}>{story()}</Provider>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone6",
  },
});
