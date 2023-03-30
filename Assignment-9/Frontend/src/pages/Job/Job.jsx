import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import JobsImage from "../../images/Jobs.jpg";
import "./job.css";
const Job = () => {
  const jobs = [
    {
      id: 1,
      title: "PR/Marketing Intern",
      description: "Summer 2023 (Hybrid)",
    },
    {
      id: 2,
      title: "Analytics Intern",
      description: "Summer 2023 (Boston)",
    },
    {
      id: 3,
      title: "Social Media Intern",
      description: "Summer 2023 (Remote)",
    },
    {
      id: 4,
      title: "Multimedia Intern",
      description: "Fall 2023 (Hybrid)",
    },
  ];
  return (
    <div className="jobs-container">
      <Navbar />
      <img src={JobsImage} alt="NUFlix logo" />
      <div className="jobs_container">
        {jobs.map((job) => (
          <Card
            key={job.id}
            header={job.title}
            cardContent={job.description}
            isShowButton
          />
        ))}
      </div>
    </div>
  );
};

export default Job;
