import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import NasaPhotoCard from "../NasaPhotoCard";
import Masonry from "react-masonry-css";
import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress"
import InfiniteScroll from "react-infinite-scroll-component";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    fetchPhoto();
  }, []);

  const fetchPhoto = () => {
    const api_root = "https://api.nasa.gov/planetary/apod?api_key=";
    const api_key = process.env.REACT_APP_NASA_KEY;

    axios
      .get(`${api_root}${api_key}&count=10&thumbs`)
      .then((res) => setPhotoData([...photoData, ...res.data]));
    console.log(photoData);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  if (!photoData) return <div />;

  return (
    <Container>
      
        <InfiniteScroll
          dataLength={photoData.length}
          next={fetchPhoto}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
          {photoData.map((photo) => (
            <div item key={photo.date}>
              <NasaPhotoCard photoData={photo} />
            </div>
          ))}
          </Masonry>
        </InfiniteScroll>
      
    </Container>
  );
}
