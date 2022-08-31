import React from "react";
import workshops from "./data.js";
import Workshop from "./Workshop.js";
import { Row } from "react-bootstrap";

const Workshops = () => {
  return (
    <section
      id="workshops"
      className="font-lexend pb-20 relative flex justify-center items-center flex-col bg-gradient-to-b to-orange-500 from-amber-300 "
    >
      <p className="text-6xl">Workshops</p>

      <p className="text-center text-xl mb-5 w-11/12">
        This is just a short preview of the various workshops I have hosted as
        well as workshops I will be hosting for various hackathons, student
        organizations and personally! I always look for various opporunties to
        spread technical education and learn along the process!
      </p>
      <Row className="flex justify-center items-center w-11/12">
        {workshops.map((workshop, index) => (
          <Workshop
            key={index}
            name={workshop.name}
            subtitle={workshop.subtitle}
            sponsor={workshop.sponsor}
            date={workshop.date}
          />
        ))}
      </Row>
    </section>
  );
};

export default Workshops;
