import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaRocket } from "react-icons/fa";

const Project = ({ title, description, github, deployed, built }) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <p className="text-2xl text-center m-0 p-0">{title}</p>
      <p className="text-center text-md">{built}</p>
      <p className="text-xl text-center">{description}</p>
      <div className="w-1/2 flex justify-evenly items-center">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit"
        >
          <FaGithub className="text-4xl text-inherit hover:text-gray-700 " />
        </a>

        {deployed === "" ? (
          <></>
        ) : (
          <a
            href={deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit"
          >
            <FaRocket className=" text-4xl text-inherit hover:text-gray-700" />
          </a>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
  deployed: PropTypes.string,
  built: PropTypes.string,
};

export default Project;
