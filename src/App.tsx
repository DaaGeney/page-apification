import "./App.css";
import React from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import Login from "./components/login/Login";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
