// src/components/Hero.tsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Hero.css';
import Picture from '../assets/Sulemana.jpg';
import CV from '../assets/Sulemana-CV.pdf';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const typed = new Typed(typedRef.current!, {
      strings: ['Graphic Designer', 'Tech Educator', 'Frontend Developer'],
      typeSpeed: 50,
      backSpeed: 40,
      loop: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home1">
      <div className="home-content" data-aos="fade-right">
        <h3 className="fade-in">Hi</h3>
        <h1 className="fade-in">
          I'm <span>Sulemana Iddrisu</span>
          <br />
          <span ref={typedRef} className="typed-text"></span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="600">
          I craft clean and responsive web interfaces using React, TypeScript, HTML, and CSS. Let’s build something amazing together.
        </p>

        <div className="btn-box" data-aos="zoom-in" data-aos-delay="800">
          <a href={CV} download>
            <button className="btn-1">Download CV</button>
          </a>
          <a href="#contact1">
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
