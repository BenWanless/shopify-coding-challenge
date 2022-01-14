import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import FeedCard from "../components/FeedCard";
import Masonry from "react-masonry-css";
import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress"
import InfiniteScroll from "react-infinite-scroll-component";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchPhoto();
  }, []);

  useEffect(async () => {
    let savedFavorite = await JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorite) {
      setFavorites(savedFavorite);
    }
  }, []);

  const fetchPhoto = () => {
    const api_root = "https://api.nasa.gov/planetary/apod?api_key=";
    const api_key = "NfK8RKlU8uOle200Qi3hMgORFffnSdyPwWtbgJ3U";

    axios
      .get(`${api_root}${api_key}&count=10&thumbs`)
      .then((res) => setPhotoData([...photoData, ...res.data]));
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const FavoriteHandler = (val) => {
    const newFavorites = [val, ...favorites];
    const alreadyFavorite = favorites.filter(
      (photo) => photo.date === val.date
    );
    if (alreadyFavorite.length !== 0) {
      const removedFavorite = favorites.filter(
        (photo) => photo.date != val.date
      );
      setFavorites(removedFavorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
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
              <FeedCard photoData={photo} handler={FavoriteHandler} />
            </div>
          ))}
        </Masonry>
      </InfiniteScroll>
    </Container>
  );
}
