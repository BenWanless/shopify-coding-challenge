import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";


export default function Favorites() {
//   const [PODData, setPODData] = useState([]);

//   useEffect(() => {
//     const api_root = "https://api.nasa.gov/planetary/apod?api_key=";
//     const api_key = process.env.REACT_APP_NASA_KEY;
  
//     axios
//       .get(`${api_root}${api_key}`)
//       .then((res) => setPODData(res.data));
//   }, []);


  return (
   <Container>
     <Typography variant="h2">
       Favorites
     </Typography>
   </Container>
  );
}