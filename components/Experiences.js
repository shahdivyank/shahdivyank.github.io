import React from "react";
import { Row, Col } from "react-bootstrap";

const experiences = [
  {
    company: "Comcast",
    role: "Software Engineering Intern",
    time: "June 2022 - Present",
    location: "Remote California",
    points: [
      "Construct Concourse CI pipelines to check linting, formatting, whitesourcing, & testing",
      "Optimize remediation scripts for performance & redundancy benefits by switching to APIs",
      "Implement feature to provide precise time for event durations and display on React app",
      "Migrate & mock unit-test workflow tasks to fit AWS Lambda requirements",
    ],
  },
  {
    company: "UCR IEEE Solar Car",
    role: "Software Engineering Lead",
    time: "October 2021 - Present",
    location: "Riverside, California",
    points: [
      "Manage 6+ developer team to develop driver interface with QT C++",
      "Design wireless telemetry architecture to display analytics through InfluxDB & Grafana",
      "Install Raspberry Pi & Arduino CAN bus communications system to interface with driver dashboard",
      "Establish React website with Firebase backend to implement Adopt a Cell feature with protected login",
    ],
  },
  {
    company: "UCR Association for Computing Machinery ",
    role: "Project Manager",
    time: "October 2021 - Present",
    location: "Riverside, California",
    points: [
      "Host 16+ web development workshops covering React, Next.js, CSS, Tailwind",
      "Organize 8+ career readiness workshops covering resume guidelines, technical & behavioral interviews, research, graduate studies, course planning, internships",
      "Coordinate 10+ developers to construct website using Next.js & Tailwind",
    ],
  },
  {
    company: "Code Ninjas Central Fremont",
    role: "Code Sensei",
    time: "June 2021 - September 2021",
    location: "Fremont, California",
    points: [
      "Moderate summer camps including Roblox Studio, Minecraft Modifications, Python/Scratch programming",
      "Lead CREATE, JR, ASP programs, tours for over 30+ students",
      "Improve corporate curriculum by creating 50+ supplementary JS practice sets with solutions",
      "Initiate & direct Tik Tok account to spread business awareness while increasing follower count to 200+",
      "Encourage inclusion of various resources & teaching practices to instructor team to enhance student learning environment",
    ],
  },
];

const Experiences = () => {
  return (
    <section className="font-lexend pb-20 flex justify-center items-center flex-col bg-gradient-to-b from-purple-300 to-orange-300">
      <p className="text-6xl">Experiences</p>
      <Row className="w-11/12">
        {experiences.map((experience, index) => (
          <Col xl={12} key={index} className="flex justify-between flex-col">
            <div className="flex justify-between w-full">
              <p className="text-xl">
                <p className="text-3xl">{experience.company}</p>
                {experience.role}
              </p>
              <p className="text-xl">
                {experience.time}
                <br />
                {experience.location}
              </p>
            </div>
            <ul className="list-disc">
              {experience.points.map((point, index) => (
                <li className="text-xl" key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Experiences;
