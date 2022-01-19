import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import FeedCard from "../components/FeedCard";
import Masonry from "react-masonry-css";


export default function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites'));

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
   <Container>
     <Typography variant="h2">
       Favorites
     </Typography>
     <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
          {favorites.map((photo) => (
            <div item key={photo.date}>
              <FeedCard photoData={photo}/>
            </div>
          ))}
          </Masonry>
   </Container>
  );
}