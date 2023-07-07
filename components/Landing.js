import React, {
  // useEffect,
  // useState,
  useMemo,
} from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
// import ShootingStar from "./ShootingStar";

const createStars = (starsToCreate) => {
  const array = Array(starsToCreate);
  for (let i = 0; i < starsToCreate; i++) {
    array[i] = {
      top: `${Math.floor(Math.random() * 100).toString()}%`,
      left: `${Math.floor(Math.random() * 100).toString()}%`,
    };
  }
  return array;
};

const Landing = () => {
  // const [shootingStars, setShootingStars] = useState([]);

  const largeStars = useMemo(() => createStars(250), []);
  const smallStars = useMemo(() => createStars(250), []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShootingStars(Array(Math.floor(Math.random() * 4 + 1)).fill(0));
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="relative h-[100vh] w-full pb-20 flex justify-center items-center bg-gradient-to-b from-sky-900 to-purple-500 ">
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
        {/* {shootingStars.map((star, index) => (
          <ShootingStar key={index} />
        ))} */}
        <Row className="flex justify-center items-center">
          <Col lg={12} className="flex justify-center items-center flex-col">
            <div className="font-lexend text-5xl md:text-8xl  text-center text-white">
              Divyank Shah
              <br />
              <p className="text-2xl md:text-3xl mt-3">
                Aspiring Software Engineer
              </p>
            </div>
            <div className="w-full flex justify-evenly items-center text-5xl">
              <a
                href="https://github.com/shahdivyank"
                target="_blank"
                className="text-white hover:!text-gray-300 cursor-pointer"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/divyank.shah/"
                target="_blank"
                className="text-white hover:!text-gray-300 cursor-pointer"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/divyank-shah/"
                target="_blank"
                className="text-white hover:!text-gray-300 cursor-pointer"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:shahdivyank25@gmail.com"
                target="_blank"
                className="text-white hover:!text-gray-300 cursor-pointer"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="Divyank_Shah_Resume.pdf"
                target="_blank"
                className="text-white hover:!text-gray-300 cursor-pointer"
                rel="noreferrer"
              >
                <FaFileAlt />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Landing;
