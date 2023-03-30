import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import MovieImage from "../../images/Movie.jpg";

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
