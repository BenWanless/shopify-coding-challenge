import React from "react";
import { Link } from "react-router-dom";
import Video from "../../assets/video/Earth - 4788.mp4";
import "./home.scss";

export default function Home() {
  return (
    <div>
      <video playsinline autoplay muted loop id="myVideo" className="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div>
        <Link to="/nasaphoto">See into the stars</Link>
      </div>
    </div>
  );
}
