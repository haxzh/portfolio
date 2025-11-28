import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import event from "../../Assets/Projects/event.png";
import task from "../../Assets/Projects/task.png";
import Digitalclock from "../../Assets/Projects/digital_clock.png";
import ems from "../../Assets/Projects/ems.png";
// import suicide from "../../Assets/Projects/suicide.png";
import chat from "../../Assets/Projects/chat-app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="Employee Management System"
              description=" Designed and developed a full-stack Employee Management System using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS to handle employee data, authentication, and task management seamlessly."
              // </br>
              ghLink="https://github.com/haxzh/Employee-management-system"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-App"
              description="Real-Time Chat Application built with MERN stack and Socket.IO enables instant one-to-one and group messaging with secure JWT authentication. Features include typing indicators, online status, and persistent MongoDB storage. Responsive React.js frontend with Tailwind CSS ensures seamless user experience across devices. Scalable backend supports future enhancements."
              ghLink="https://github.com/haxzh/chat-app"
              demoLink="https://chat-app-frontend-one-flax.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Digitalclock}
              isBlog={false}
              title="Digital Clock"
              description="Digital Clock Application developed with Django displays real-time date and time using dynamic rendering. Features include responsive design, automatic updates without page reload, and customizable time formats. Built with HTML, CSS, and JavaScript on the frontend, and Django backend for smooth performance and easy deployment."
              ghLink="https://github.com/haxzh/Digitalclock"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="EventSphere"
              description="EventSphere is a full-stack event management system built with React and Node.js. It enables organizers to create events, manage tickets, and track registrations. Users can browse events, buy tickets, and receive confirmations. Secure APIs, real-time updates, and a clean UI ensure smooth, efficient event handling."
              ghLink="https://github.com/haxzh/EventSphere"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Smart-Task-Analyzer"
              description="The Smart Task Analyzer is a Django-based task prioritization system that scores tasks using urgency, importance, effort, and dependencies.The frontend enables easy task input and displays ranked results, delivering an intelligent and user-friendly productivity tool."
              ghLink="https://github.com/haxzh/smart-task-analyzer"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
