import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from "./Project";
import { SiCplusplus } from "react-icons/si";

const projects = [
  {
    title: "Wizard Chess",
    description:
      "Wizard Chess brings to life J.K Rowling's invention. Players move pieces using voice commands and the chess board automatically moves the pieces.",
    github: "https://github.com/shahdivyank/WizardChess",
    deployed: "https://www.instructables.com/Wizard-Chess/",
    built: "C++, Arduino",
  },
  {
    title: "E-Portfolio Website",
    description:
      "A minimalist website, taking inspiration from Apple's colors, displaying information regarding past experiences, projects, and methods to contact me.",
    github: "https://github.com/shahdivyank/Website-Portfolio-V1/",
    deployed: "https://shahdivyank.github.io/Website-Portfolio-V1/",
    built: "HTML, CSS, Javascript",
  },
  {
    title: "Solar Car Dashboard",
    description:
      "Wizard Chess brings to life J.K Rowling's invention. Players move pieces using voice commands and the chess board automatically moves the pieces.",
    github: "https://github.com/UCR-Solar-Car/DriverInterface",
    deployed: "",
    built: "C++, QT Creator",
  },
  {
    title: "ACM @ UCR Website",
    description:
      "Wizard Chess brings to life J.K Rowling's invention. Players move pieces using voice commands and the chess board automatically moves the pieces.",
    github: "https://github.com/acm-ucr/acm-dev",
    deployed: "",
    built: "Next.js, Tailwind",
  },
  {
    title: "Rose Hack Website",
    description:
      "Wizard Chess brings to life J.K Rowling's invention. Players move pieces using voice commands and the chess board automatically moves the pieces.",
    github: "https://github.com/Rose-Hacks/rosehack2023",
    deployed: "",
    built: "Next.js, Typescript, Tailwind, AWS DynamoDB",
  },
  {
    title: "Arduino Robot Car",
    description:
      "An Arduino based car utilizing DC motors controlled by an H-bridge and an IR sensor to be controlled remotely through an IR remote.",
    github: "https://github.com/shahdivyank/Remote-Control-Arduino-Car",
    deployed: "https://www.instructables.com/Remote-Control-Arduino-Car/",
    built: "C++, Arduino",
  },
  {
    title: "L293D Motor Library",
    description:
      "A beginner friendly and acessible Arduino library to use with L298N/L293D motor drivers. Control motors in an easier and more intutitve manner.",
    github: "https://github.com/shahdivyank/Arduino_L298N_Library",
    deployed: "",
    built: "C++, Arduino",
  },
  {
    title: "UCR Highlander Frisbee",
    description:
      "Website to display information about recruitment, practices Google Calender integration to easily post announcements",
    github: "https://github.com/shahdivyank/ucr-ultimate",
    deployed: "https://shahdivyank.github.io/ucr-ultimate/",
    built: "React, CSS",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="font-lexend pb-20 relative flex justify-center items-center flex-col bg-gradient-to-b z-20 bg-gradient-to-b  from-orange-300 to-amber-300 "
    >
      <p className="text-6xl">Projects</p>
      <Row className="w-11/12">
        {projects.map((project, index) => (
          <Col
            key={index}
            xl={3}
            lg={4}
            sm={6}
            className=" p-3 border-x border-black"
          >
            <Project
              title={project.title}
              description={project.description}
              github={project.github}
              deployed={project.deployed}
              built={project.built}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
