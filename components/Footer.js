import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <div className="w-full flex pt-40 relative justify-center items-center flex-col bg-orange-500">
      <div className="bg-white h-60 w-60 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-3/4 rounded-full"></div>

      <Wave
        fill=""
        className="fill-sky-900"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.25,
          points: 3,
        }}
      />
      <div className="w-full -m-0.5 h-40 bg-sky-900 flex justify-center items-center">
        <div className="w-1/2 text-white flex justify-evenly items-center text-5xl p-5">
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
            href="shahdivyank_resume_2022.pdf"
            target="_blank"
            className="text-white hover:!text-gray-300 cursor-pointer"
            rel="noreferrer"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
