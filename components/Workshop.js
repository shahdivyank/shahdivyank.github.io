import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Workshop = ({ name, subtitle, sponsor, date }) => {
  return (
    <Col lg={3} md={4} xs={6} className="font-lexend p-1">
      <div
        className={`rounded ${
          date > new Date() ? "text-black" : "text-gray-600"
        } ${date > new Date() ? "border-black" : "border-gray-600"}`}
      >
        <p className="text-2xl text-center">
          {name}
          <br />
          <div className="text-base">
            {subtitle}
            <br />
            {sponsor} - {date.toLocaleDateString()}
          </div>
        </p>
      </div>
    </Col>
  );
};

Workshop.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  sponsor: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export default Workshop;
