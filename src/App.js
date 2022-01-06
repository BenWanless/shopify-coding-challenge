import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createTheme,} from "@mui/material";
import { ThemeProvider,} from "@mui/styles";
import Layout from "./components/Layout";
import Home from "./components/Home/home";
import NasaPhoto from "./components/NasaPhoto/NasaPhoto";

const theme = createTheme({
  palette:{
    primary:{
      main: "#FF69B4"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/nasaphoto" component={NasaPhoto} />
      </Layout>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
