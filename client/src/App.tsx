import React from "react";
import "sanitize.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { configureStore } from "./redux/store";
import { GlobalStyles } from "./theme/global";
import { theme } from "./theme/theme";

import { Home } from "./modules/home/Home";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Home />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
