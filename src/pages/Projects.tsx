import React from "react";
import "../styles/Projects.css";
import XestFolio from "../assets/xest.jpg";
import EazyCheck from "../assets/eazycheck.jpg";
import HayateCosmetics from "../assets/scrent.jpg";
import NextStep from "../assets/nextstep.jpg";
import PulseBit from "../assets/pulsebit.jpg";
import Rent from "../assets/rent.png";
import Swift from "../assets/swift.png";
import Learnify from "../assets/Learnify.png";

const projects = [
  {
    title: "Learnify",
    image: Learnify,
    description:
      "Developed an intelligent learning platform that converts static educational materials into adaptive, AI-powered quizzes tailored to individual learning styles. Implemented secure authentication using Firebase with full sign-in and sign-out functionality. Designed and developed three dedicated dashboards—Admin, Student, and Teacher—each with tailored user interfaces and workflows to support efficient management and personalized learning experiences.",
    tech: ["NextJs", "TypeScript", "Tailwind", "API", "Firebase"],
    liveLink: "https://alx-project-nexus-xi.vercel.app/",
    githubLink: "https://github.com/Sulemana24/alx-project-nexus",
  },
  {
    title: "RentSmart",
    image: Rent,
    description:
      "RentSmart is a responsive property rental web application designed to simplify the process of finding and booking verified rental properties. The platform provides a clean, intuitive interface that allows users to browse listings, view detailed property information, and make secure bookings — all in one place.",
    tech: ["NextJs", "TypeScript", "Tailwind", "API"],
    liveLink: "https://rent-smart-five.vercel.app/",
    githubLink: "https://github.com/Sulemana24/RentSmart",
  },
  {
    title: "SwiftBill",
    image: Swift,
    description:
      "SwiftBill — A modern, user-friendly internet & SMS bundles and electricity web application built to streamline daily financial tasks, from bill payments to data purchase. Designed with a clean interface, bold gradients, and intuitive interactions to make finances feel simple and accessible.",
    tech: ["NextJs", "JavaScript", "Tailwind", "API", "MongoDB"],
    liveLink: "https://swiftbill-ten.vercel.app/",
    githubLink: "https://github.com/Sulemana24/SwiftBill",
  },
  {
    title: "EazyCheck",
    image: EazyCheck,
    description:
      "Our GPA Calculator makes it easy for students to track their academic performance by entering course details, grades, and credit hours. It automatically calculates GPA and academic class, helping students stay informed and plan for success.",
    tech: ["HTML", "JavaScript", "CSS", "LocalStorage"],
    liveLink: "https://eazy-check.vercel.app/",
    githubLink: "https://github.com/Sulemana24/EazyCheck",
  },
  {
    title: "Hayate Cosmetics",
    image: HayateCosmetics,
    description:
      "A dynamic and intuitive E-commence website that allows users to browse products, add or remove items, and update quantities effortlessly. It supports multiple payment options and captures shipping information to ensure a smooth and secure checkout process. Built with user experience and functionality in mind.",
    tech: ["HTML", "CSS", "JavaScript", "API", "LocalStorage"],
    liveLink: "https://shopping-cart-jet-phi.vercel.app/",
    githubLink: "https://github.com/Sulemana24/Shopping-Cart",
  },
  {
    title: "NextStep Community",
    image: NextStep,
    description:
      "A vibrant online hub connecting users with jobs, courses, projects, and local events. Designed to foster engagement, collaboration, and growth within the community through an easy-to-navigate interface and rich features.",
    tech: ["React", "HTML", "JavaScript", "CSS", "SwiperJs"],
    liveLink: "https://next-step-psi-henna.vercel.app/",
    githubLink: "https://github.com/Sulemana24/NextStep",
  },
  {
    title: "PulseBit",
    image: PulseBit,
    description:
      "A personal blog where I share insights, tutorials, and updates on web development, frontend technologies, and programming best practices. This space allows me to document my learning journey, explore new concepts, and contribute to the developer community by providing clear, practical content that helps others grow.",
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    liveLink: "https://pulse-bit.vercel.app/",
    githubLink: "https://github.com/Sulemana24/PulseBit-",
  },

  {
    title: "Xest Folio",
    image: XestFolio,
    description:
      "A clean and modern portfolio website built for a UI/UX designer to showcase their skills, design process, and creative work. The site features a responsive layout, smooth navigation, interactive sections for projects, and a focus on user experience. It effectively highlights the designer’s ability to conduct user research, create wireframes, and deliver intuitive interfaces—positioning them as a thoughtful and skilled design professional.",
    tech: ["HTML", "TailwindCSS", "JavaScript", "Figma"],
    liveLink: "https://xest-folio-pink.vercel.app/",
    githubLink: "https://github.com/Sulemana24/XestFolio/",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
