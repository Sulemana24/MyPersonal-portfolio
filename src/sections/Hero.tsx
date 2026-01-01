import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hero.css";
import Picture from "../assets/sul.png";
import CV from "../assets/Sulemana-CV.pdf";

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const typed = new Typed(typedRef.current!, {
      strings: [
        "Frontend Developer building modern web apps",
        "React and Next.js Developer for scalable products",
        "Frontend Developer for e-commerce & dashboards",
      ],
      typeSpeed: 50,
      backSpeed: 35,
      backDelay: 1800,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content" data-aos="fade-right">
        <h3 className="fade-in">Hi</h3>
        <h1 className="fade-in">
          I'm <span>Sulemana Iddrisu</span>
          <br />
          <span ref={typedRef} className="typed-text"></span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="600">
          I build fast, modern, and scalable web applications using React &
          Next.js, delivering clean UI, smooth UX, and production-ready features
          that help businesses grow and users love.
        </p>

        <div className="btn-box" data-aos="zoom-in" data-aos-delay="800">
          <a href={CV} download>
            <button className="btn-1">Download CV</button>
          </a>
          <a
            href="mailto:iddrisusulemana665@gmail.com?subject=Hire%20Me&body=Hi%20Sulemana,%20I%27m%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-2">Hire Me</button>
          </a>
        </div>
      </div>

      <div className="img-box" data-aos="fade-left" data-aos-delay="1000">
        <img src={Picture} alt="Sulemana Iddrisu" />
      </div>
    </section>
  );
};

export default Hero;
