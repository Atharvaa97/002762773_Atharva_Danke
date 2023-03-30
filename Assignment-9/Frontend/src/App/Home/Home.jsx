import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import MovieImage from "../images/Movie.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <img src={MovieImage} alt="NUFlix logo" />

      <Card
        header={"NUFlix: The ultimate procrastination destination"}
        cardContent={
          "Because sometimes you just need to take a break from adulting"
        }
      />
    </div>
  );
};

export default Home;
