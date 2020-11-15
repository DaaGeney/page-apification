import "./App.css";
import React from "react";
import theme from "./theme/theme";
import Routes from "./components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
