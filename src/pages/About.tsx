import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import Sule from "../assets/Sule.jpg";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiNestjs,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <h2 data-aos="fade-up">About Me</h2>
      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
          <div>
            <p>
              I'm <strong>Sulemana Iddrisu</strong>, a frontend developer
              passionate about building beautiful, fast, and responsive user
              interfaces with React, TypeScript, HTML, and CSS.
            </p>
            <p>
              I love turning complex problems into clean, simple, and intuitive
              designs. I’m always learning new technologies to improve my craft.
            </p>
          </div>
          <img src={Sule} alt="sule" className="sule" />
        </div>

        <div className="about-skills" data-aos="fade-left">
          <h3>Tech Stack</h3>
          <div className="about-skills" data-aos="fade-left">
            <div className="skill">
              <span>
                <SiHtml5 className="icon" /> HTML5
              </span>
              <div className="bar">
                <div className="progress html"></div>
              </div>
            </div>
            <div className="skill">
              <span>
                <SiCss3 className="icon" /> CSS3
              </span>
              <div className="bar">
                <div className="progress css"></div>
              </div>
            </div>
            <div className="skill">
              <span>
                <SiTailwindcss className="icon" /> Tailwind CSS
              </span>
              <div className="bar">
                <div className="progress tailwind"></div>
              </div>
            </div>
            <div className="skill">
              <span>
                <SiTypescript className="icon" /> TypeScript
              </span>
              <div className="bar">
                <div className="progress ts"></div>
              </div>
            </div>

            <div className="skill">
              <span>
                <SiJavascript className="icon" /> JavaScript
              </span>
              <div className="bar">
                <div className="progress javascript"></div>
              </div>
            </div>
            <div className="skill">
              <span>
                <SiReact className="icon" /> React.js
              </span>
              <div className="bar">
                <div className="progress react"></div>
              </div>
            </div>

            <div className="skill">
              <span>
                <SiNestjs className="icon" /> NextJS
              </span>
              <div className="bar">
                <div className="progress nextjs"></div>
              </div>
            </div>
            <div className="skill">
              <span>
                <SiMysql className="icon" /> MySQL
              </span>
              <div className="bar">
                <div className="progress mysql"></div>
              </div>
            </div>

            <div className="skill">
              <span>
                <SiGithub className="icon" /> Git & GitHub
              </span>
              <div className="bar">
                <div className="progress git"></div>
              </div>
            </div>
            <div className="skill">
              <span>
                <MdDevices className="icon" /> Responsive Design
              </span>
              <div className="bar">
                <div className="progress responsive"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
