import ReactPlayer from "react-player";
import Property_Management_System from "../components/projectVids/Property_Management_System.mp4";
import CryptoTracker from "../components/projectVids/Crypto-App.mp4";
import BudgetPlanner from "../components/projectVids/budget-planner.mp4";
import TaskManager from "../components/projectVids/taskmanager.mp4";
import FirebaseCrud from "../components/projectVids/firebase-crud.mp4";
import GamesListApp from "../components/projectVids/Games_List_App.mkv";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Container fluid className="text-center project_tab" id="project">
      <h1 className="project_header_text pt-3" data-aos="fade-up">
        PROJECT
      </h1>
      <Container>
        <Row className="d-flex justify-content-center" id="project">
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={FirebaseCrud}
              className="react_player"
              width="100%"
              height="100%"
            />
            <p className="mt-3 project_name">ReactJS Firebase Crud</p>
            <p className="project_details">
              A project that you can create, read, update and delete record. It
              also has an image upload functionality
            </p>
            <p className="project_tool">ReactJS | Firebase</p>
            <a
              href="https://russcrud.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mb-5 button_live">
                Live View <FaRegEye size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
            <a
              href="https://github.com/russellbanares322/Russ-Ecommerce-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                href="https://github.com/russellbanares322/react-firebase-crud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className="mb-5">
                  Source Code
                  <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
                </Button>
              </a>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={GamesListApp}
              className="react_player"
              width="100%"
              height="100%"
            />
            <p className="mt-3 project_name">Games List App</p>
            <p className="project_details">
              Displaying different types of games with pagination, and axios
              library for api fetching.
            </p>
            <p className="project_tool">ReactJS | Axios</p>
            <a
              href=" https://games-list-viewer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mb-5 button_live">
                Live View
                <FaRegEye size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
            <a
              href="https://github.com/russellbanares322/games-list-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-dark" className=" mb-5">
                Source Code
                <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={CryptoTracker}
              className="react_player"
              width="100%"
              height="100%"
            />
            <p className="mt-3 project_name">Crypto Currency Tracker</p>
            <p className="project_details">
              A project that uses an api to fetch data about crypto currency
              prices, with the help of axios library
            </p>
            <p className="project_tool">ReactJS | Axios</p>
            <a
              href="https://cryptotrackerapp-orpin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mb-5 button_live">
                Live View <FaRegEye size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
            <a
              href="https://github.com/russellbanares322/Russ-Ecommerce-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                href="https://github.com/russellbanares322/cryptotrackerapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className=" mb-5">
                  Source Code
                  <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
                </Button>
              </a>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={BudgetPlanner}
              width="100%"
              height="100%"
              className="react_player"
            />
            <p className="mt-3 project_name">Budget Tracker</p>
            <p className="project_details">
              Static web application that function a simple computation in
              increasing and decreasing of an expense value
            </p>
            <p className="project_tool">ReactJS</p>
            <a
              href="https://russellbanares322.github.io/budget-tracker-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="button_live mb-5">
                Live View <FaRegEye size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
            <a
              href="https://github.com/russellbanares322/budget-tracker-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-dark" className="mb-5">
                Source Code
                <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={TaskManager}
              width="100%"
              height="100%"
              className="react_player"
            />
            <p className="mt-3 project_name">Task Manager</p>
            <p className="project_details">
              Crud project with the use of Laravel
            </p>
            <p className="project_tool">Laravel | Javascript</p>
            <Button className="mb-5 button_live disabled">
              Live View{" "}
              <FaRegEyeSlash size={20} style={{ marginLeft: "2px" }} />
            </Button>
            <a
              href="https://github.com/russellbanares322/laraveltaskmanager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-dark" className="mb-5">
                Source Code
                <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={Property_Management_System}
              width="100%"
              height="100%"
              className="react_player"
              muted={true}
            />
            <p className="mt-3 project_name">Property Management System</p>
            <p className="project_details">
              Our capstone project which displays different kinds of property,
              and allowing the user to set an appointment.
            </p>
            <p className="project_tool">
              ReactJS | Firebase | EmailJS | Tawk.to Live Chat
            </p>
            <Button className="mb-5 button_live disabled">
              Live View
              <FaRegEyeSlash size={20} style={{ marginLeft: "2px" }} />
            </Button>
            <a
              href="https://github.com/russellbanares322/propertyfinder-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-dark" className="mb-5">
                Source Code
                <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
