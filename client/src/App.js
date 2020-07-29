import React from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#999",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </ThemeProvider>
  </>
);

export default App;
