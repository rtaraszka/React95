/* eslint-disable import/no-unresolved */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from 'src/components/common/themes';

const theme = themes.default;

// eslint-disable-next-line react/prop-types
export default function UXPinWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
