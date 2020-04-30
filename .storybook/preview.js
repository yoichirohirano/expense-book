import { addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../src/materialUI/theme.js';

addDecorator(muiTheme(theme));
