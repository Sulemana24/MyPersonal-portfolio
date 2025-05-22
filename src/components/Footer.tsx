import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/iddrisu-sulemana/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/233551333780"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/Sulemana24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:iddrisusulemana665@gmail.com" aria-label="Send email">
          <FaEnvelope />
        </a>
      </div>

      <ul className="list">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="copyright">
        © {new Date().getFullYear()} Iddrisu Sulemana. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
