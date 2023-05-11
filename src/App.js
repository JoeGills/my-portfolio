import React, { useState } from "react";
import "./App.css";

function Header({ onButtonClick }) {
  return (
    <div className="header">
      <button onClick={() => onButtonClick("home")}>Home</button>
      <button onClick={() => onButtonClick("about")}>About</button>
      <button onClick={() => onButtonClick("projects")}>Projects</button>
      <button onClick={() => onButtonClick("experience")}>
        Experience &amp; Academia
      </button>
      <button onClick={() => onButtonClick("contact")}>Contact</button>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>Copyright © 2023 Joseph Gills</p>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function() {
  let colors = ["red", "blue", "green", "yellow", "violet"];
  let bubbleCount = 100;

  for (let i = 0; i < bubbleCount; i++) {
    // create left bubble
    let leftBubble = document.createElement("div");
    leftBubble.classList.add("bubble", "left");
    leftBubble.style.backgroundColor = colors[i % colors.length];
    leftBubble.style.top = Math.random() * 100 + "%";
    leftBubble.style.left = Math.random() * 30 + "%";
    leftBubble.style.width = Math.random() * 10 + "px";
    leftBubble.style.height = leftBubble.style.width;
    document.body.appendChild(leftBubble);

    // create right bubble
    let rightBubble = document.createElement("div");
    rightBubble.classList.add("bubble", "right");
    rightBubble.style.backgroundColor = colors[i % colors.length];
    rightBubble.style.top = Math.random() * 100 + "%";
    rightBubble.style.right = Math.random() * 30 + "%";
    rightBubble.style.width = Math.random() * 10 + "px";
    rightBubble.style.height = rightBubble.style.width;
    document.body.appendChild(rightBubble);
  }
});

function App() {
  const [page, setPage] = useState("home");
  const [isHome, setIsHome] = useState(true);

  const handleButtonClick = (pageName) => {
    setPage(pageName);
    setIsHome(pageName === "home");
  };

  const renderPage = () => {
    switch (page) {
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "experience":
        return <ExperiencePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onButtonClick={handleButtonClick} />;
    }
  };

  return (
    <div className="app">
      {isHome ? null : (
        <div className="logo-button-container">
          <button onClick={() => handleButtonClick("home")}>Home</button>
        </div>
      )}
      {renderPage()}
    </div>
  );
}

function HomePage({ onButtonClick }) {
  return (
    <div className="home-page">
      <div className="name-container">
        <h1>Joseph Gills</h1>
      </div>
      <img
        src=".\images\My-pic.jpg"
        alt="Picture of Joseph Gills"
        style={{ border: "10px outset goldenrod" }}
      />
      <div className="button-container">
        <button onClick={() => onButtonClick("about")}>About</button>
        <button onClick={() => onButtonClick("projects")}>Projects</button>
        <button onClick={() => onButtonClick("experience")}>
          Experience &amp; Academia
        </button>
        <button onClick={() => onButtonClick("contact")}>Contact</button>
      </div>
      <div className="background-dots"></div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <div className="about-container">
        <p>
          I am Joseph Gills and I am pursuing my studies in Hyper Island as a
          Front end developer. I have been doing projects individually and as a
          team player. I am doing different projects in Html, Css, Javascript,
          React and also designing projects for the client in Figma. I am
          passionate about creating high-quality and efficient software
          solutions.
        </p>
        <p>
          I am a people person, result oriented and an excellent communicator. I
          look for positivity in all things as I feel that when you think
          positive thoughts, positive things will happen.
        </p>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="project-box">
        <h2>Project 1</h2>
        <p>
          <b>ToDo App</b>{" "}
        </p>
        <p>React, Css, PostgreSQL as DB</p>
        <a
          href="https://github.com/orgs/data-interaction-fed24/repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="project-button">GitHub</button>
        </a>
      </div>
      <div className="project-box">
        <h2>Project 2</h2>
        <p>
          <b>Dating App Design for the Client</b>
        </p>
        <p>Figma for designing</p>
        <a
          href="https://www.youtube.com/watch?v=aozqBQvQRMU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="project-button">GitHub</button>
        </a>
      </div>
      <div className="project-box">
        <h2>Project 3</h2>
        <p>
          <b>Employee feedback and questionnaire</b>
        </p>
        <p>React, Css and Html</p>
        <a
          href="https://github.com/fair-square-fed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="project-button">GitHub</button>
        </a>
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="experience-page">
      <div className="experience-box">
        <h2>Experience</h2>
        <p>
          Computer lab Assistant in Computer College - <b> 2002 - 2003</b>
        </p>
        <p>
          Science and Computer Teacher in 10+2 College - <b> 2004 - 2008</b>
        </p>
        <p>
          Senior Transaction Processing Officer - <b> 2008 - 2013</b>
        </p>
        <p>
          Customer Care Co-ordinator - <b> 2013 - 2020</b>
        </p>
      </div>

      <div className="academia-box">
        <h2>Academia</h2>
        <p>
          Mechanical Engineering - <b> 1995 - 1999</b>
        </p>
        <p>
          Post Graduate Diploma in Computer Applications - <b> 2000</b>
        </p>
        <p>
          Business Professional Programmer Certificate from Ministry of
          Information Technology, India - <b> 2001</b>
        </p>
        <p>
          Swedish Courses : SVA - 1, SVA - 2, SVA - 3, SVA - 4 -{" "}
          <b> 2021 -2022</b>
        </p>
        <p>
          Hyper Island - Front end Course - <b> 2022 - still pursuing</b>
        </p>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default App;
