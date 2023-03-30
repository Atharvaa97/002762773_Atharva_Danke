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
        header={"Don't just watch NUFlix, work for NUFlix!"}
        cardContent={
          "Join our team and become a NUFlix superstar! P.S. Binge-watching is part of few job description!"
        }
      />
      
      <div className="text-content">
        <h2 class="Heading_text">Why choose NUFlix Careers?</h2>
        <br></br>
        <p>
        NUFlix is a well-known and respected brand in the entertainment industry, and working for NUFlix can provide excellent opportunities for career growth and development. We offer a dynamic and fast-paced work environment, where employees can work on cutting-edge projects and collaborate with some of the brightest minds in the industry.
        </p>
        <br></br>
        <br></br>
        <h2 class="Heading_text">Find your dream job today....</h2>
        <br></br>
        <p>
          NUFlix Careers provides students and alumni with access to the best job listings in a variety of industries. Our platform features hundreds of job postings from top employers in the Boston area and beyond, with opportunities ranging from entry-level positions to senior management roles. With our easy-to-use search filters, you can find the right job that matches your qualifications and interests. Additionally, our platform offers a range of career resources, including resume-building tools, interview preparation guides, and networking events, to help you succeed in your job search and career development.
        </p>
      </div>
    </div>
  );
};

export default Home;
