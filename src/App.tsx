import "./App.css";
import React from "react";
import theme from "./theme/theme";
import LogIn from "./components/LogIn"
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LogIn/>
    </ThemeProvider>
  );
};

export default App;
