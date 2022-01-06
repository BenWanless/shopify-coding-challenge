import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import NasaPhotoCard from "../NasaPhotoCard";
import Masonry from "react-masonry-css";

const api_key = process.env.REACT_APP_NASA_KEY;
const start_date = "2021-12-29"

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${start_date}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log("the photo data",data);
    }
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  if (!photoData) return <div />;

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photoData.map((photo) =>(
          <div item key={photo.date}>
            <NasaPhotoCard photoData={photo}/>
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
