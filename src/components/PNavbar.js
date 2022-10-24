import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  AiOutlineContacts,
  AiOutlineDownload,
  AiOutlineProject,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import logo from "../images/logo.png";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../file/Russell_Banares.pdf";

const PNavbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  //Hamburger Toggle
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  //Navbar onScroll
  const handleChangeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBg);
  }, []);

  return (
    <>
      <Navbar expand="lg" className={navbar ? "nav active" : "nav"} fixed="top">
        <Container>
          <Navbar.Brand>
            <Image src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleToggle}
            style={{ border: "none", color: navbar ? "#EDF5E1" : "#5CDB95" }}
            aria-controls="basic-navbar-nav"
          >
            {isToggle ? (
              <IoClose
                size={40}
                className="close_navbar"
                style={{ color: "#05386B " }}
              />
            ) : (
              <IoMenu
                size={40}
                className="open_navbar"
                style={{ color: "#05386B " }}
              />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="d-flex justify-content-center">
                <Link to="#project" smooth className="link_nav a">
                  <AiOutlineProject className="mx-1 mb-1" />
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-center">
                <Link to="#about" smooth className="link_nav a">
                  <AiOutlineQuestionCircle className="mx-1 mb-1" />
                  About
                </Link>
              </Nav.Link>

              <Nav.Link className="d-flex justify-content-center">
                <Link to="#contact" smooth className="link_nav a">
                  <AiOutlineContacts className="mx-1 mb-1" />
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <a
                className="text-center"
                href={resume}
                download
                style={{ listStyle: "none" }}
              >
                <Button
                  className="px-3"
                  style={{
                    backgroundColor: "#05386B",
                    border: "none",
                  }}
                >
                  Resume
                  <AiOutlineDownload className="mx-1 mb-1" size={20} />
                </Button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PNavbar;
