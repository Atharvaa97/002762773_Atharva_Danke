import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import AboutImage from "../../images/About.jpg";

const Home = () => {
  return (
    <div className="about-container">
      <Navbar />
      <img src={AboutImage} alt="NUFlix logo" />
      <Card
        header={"About Us?"}
        cardContent={
          "We’re more than just a company, we’re a binge-worthy experience."
        }
      />
      
      <div className="text-content">
        <h2 class="Heading_text">What is NUFlix?</h2>
        <br></br>
        <p>
        NUFlix is a streaming service that brings you endless hours of entertainment at your fingertips. From the latest blockbusters to your favorite TV shows, we've got it all. With a vast library of movies and TV series, you'll never run out of things to watch. Whether you're looking for action, romance, comedy, or drama, NUFlix has something for everyone.
        </p>
        <br></br>
        <br></br>
        <h2 class="Heading_text">Why choose NUFlix Careers?</h2>
        <br></br>
        <p>
        NUFlix is a well-known and respected brand in the entertainment industry, and working for NUFlix can provide excellent opportunities for career growth and development. We offer a dynamic and fast-paced work environment, where employees can work on cutting-edge projects and collaborate with some of the brightest minds in the industry.
        </p>
      </div>
    </div>
  );
};

export default Home;
