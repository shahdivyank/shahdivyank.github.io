import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      className="font-lexend top-0 left-0 w-full bg-sky-900"
      expand="lg"
    >
      <Navbar.Brand>
        <Link href="/" passHref>
          <p className=" text-white inline m-0 px-2 text-3xl hover:text-gray-700 hover:cursor-pointer">
            Divyank Shah
          </p>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse
        id="navbar-nav"
        className=" flex justify-end items-center"
      >
        <Nav className="no-underline ">
          <Link href="#about" passHref>
            <p className=" text-white inline m-0 px-2 text-2xl hover:text-gray-700 hover:cursor-pointer">
              about
            </p>
          </Link>
          <Link href="#experiences" passHref>
            <p className=" text-white inline m-0 px-2 text-2xl hover:text-gray-700 hover:cursor-pointer">
              experiences
            </p>
          </Link>
          <Link href="#projects" passHref>
            <p className=" text-white inline m-0 px-2 text-2xl hover:text-gray-700 hover:cursor-pointer">
              projects
            </p>
          </Link>
          <Link href="#workshops" passHref>
            <p className=" text-white inline m-0 px-2 text-2xl hover:text-gray-700 hover:cursor-pointer">
              workshops
            </p>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
