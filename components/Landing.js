import React, { useEffect, useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const createStars = (starsToCreate) => {
  const array = Array(250);
  for (let i = 0; i < starsToCreate; i++) {
    array[i] = {
      top: `${Math.floor(Math.random() * 100).toString()}%`,
      left: `${Math.floor(Math.random() * 100).toString()}%`,
    };
  }
  return array;
};

const Landing = () => {
  const [shootingStars, setShootingStars] = useState([]);

  const largeStars = useMemo(() => createStars(250), []);
  const smallStars = useMemo(() => createStars(250), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShootingStars(Array(Math.floor(Math.random() * 4 + 1)).fill(0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ height: "100vh" }}
      className="relative pb-20 flex justify-center items-center bg-gradient-to-b from-sky-900 to-purple-500 "
    >
      {largeStars.map((star, index) => (
        <span
          style={{ top: star.top, left: star.left }}
          key={index}
          className="absolute animate-pulse bg-white h-[2px] w-[2px] rounded-full"
        ></span>
      ))}
      {smallStars.map((star, index) => (
        <span
          style={{ top: star.top, left: star.left }}
          key={index}
          className="absolute animate-twinkling-star bg-white h-1 w-1 rounded-full"
        ></span>
      ))}
      {shootingStars.map((star, index) => (
        <div
          key={index}
          className="absolute"
          style={{ top: 0, left: (Math.random() * 75).toString() + "%" }}
        >
          <span className="animate-shooting-star shadow-shooting-star absolute h-1 w-1 bg-white top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 origin-top-left"></span>
          <span className="animate-shooting-star trail bg-gradient-to-r from-white to-transparent content-none absolute origin-top-left -top-0.5 left-0 -translate-y-1/2 w-80 h-0.5"></span>
        </div>
      ))}
      <Row className="flex justify-center items-center">
        <Col lg={6} className="flex justify-center items-center flex-col">
          <p className="font-lexend text-6xl text-center text-white">
            Divyank Shah
            <br />
            <p className="text-3xl mt-3">Aspiring Software Engineer</p>
          </p>
          <div className="w-full text-white flex justify-evenly items-center text-5xl">
            <FaGithub className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaEnvelope className="hover:text-gray-300 cursor-pointer" />
            <FaFileAlt className="hover:text-gray-300 cursor-pointer" />
          </div>
        </Col>
        <Col lg={6} className="flex justify-center items-center">
          <img className="w-4/6 rounded-lg z-10" src="profile.jpg" />
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
