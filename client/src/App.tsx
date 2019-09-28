import React from "react";
import "sanitize.css";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./theme/global";
import { theme } from "./theme/theme";

import { Home } from "./modules/home/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
