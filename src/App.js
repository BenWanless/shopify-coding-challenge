import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NasaPhoto from "./pages/Feed";
import Favorites from "./pages/Favorites";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF69B4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/feed" component={NasaPhoto} />
          <Route path="/favorites" component={Favorites} />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
