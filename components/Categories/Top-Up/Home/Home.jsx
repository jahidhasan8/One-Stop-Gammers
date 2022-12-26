import React from "react";
import "./Home.css";
import image from "./../../../../assets/sticker.png";
import GameCards from './../GameCards/GameCards';
import Header from './../Header/Header'

const Home = () => {
  return (
    <div className="top_up">
      <Header />
      <div className="sticker container mx-auto">
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
      </div>
      <GameCards/>
      {/* <DollarCards/> */}
    </div>
  );
};

export default Home;
