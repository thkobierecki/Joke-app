import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";

import theme from "../src/theme";

export const renderComponent = (component: ReactElement) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
