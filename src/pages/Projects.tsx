import React from "react";
import "../styles/Projects.css";
import XestFolio from "../assets/xest.jpg";
import EazyCheck from "../assets/eazycheck.jpg";
import HayateCosmetics from "../assets/hayate.png";
import NextStep from "../assets/nextstep.jpg";
import PulseBit from "../assets/pulsebit.jpg";
import Rent from "../assets/rent.png";
import Swift from "../assets/swift.png";
import Learnify from "../assets/Learnify.png";
import Hay1 from "../assets/hay1.png";
import Hay2 from "../assets/hay2.png";
import Hay3 from "../assets/hay3.png";
import Hay4 from "../assets/hay4.png";
import Hay5 from "../assets/hay5.png";
import Hay6 from "../assets/hay6.png";
import Hay7 from "../assets/hay7.png";
import Carousel from "./Carousel";

const projects = [
  {
    title: "Hayate Cosmetics",
    image: HayateCosmetics,
    description:
      "Hayate Cosmetics is a full-featured e-commerce platform that helps beauty brand sell online effortlessly. Customers enjoy a smooth shopping experience with product browsing, cart management, and secure checkout via Paystack. Meanwhile, admins manage products, orders, and staff efficiently through a secure dashboard. Built with Next.js, TypeScript, Tailwind, Firebase, and Uploadthing API, it’s designed for performance, scalability, and driving sales.",
    tech: [
      "NextJs",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Paystack API",
      "Uploadthing API",
    ],
    liveLink: "https://hayate-cosmetics-fb5u.vercel.app/",
    githubLink: "https://github.com/Sulemana24/Hayate-Cosmetics",
    screenshots: [HayateCosmetics, Hay1, Hay2, Hay3, Hay4, Hay5, Hay6, Hay7],
  },
  {
    title: "Learnify",
    image: Learnify,
    description:
      "Learnify is an AI-powered learning platform that transforms static materials into adaptive quizzes for personalized learning. Features include secure Firebase authentication and three dashboards—Admin, Student, Teacher—designed to streamline management and enhance learning outcomes.",
    tech: [
      "NextJs",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Paystack API",
      "Gemini API",
    ],
    liveLink: "https://alx-project-nexus-xi.vercel.app/",
    githubLink: "https://github.com/Sulemana24/alx-project-nexus",
  },
  {
    title: "RentSmart",
    image: Rent,
    description:
      "RentSmart is a responsive property rental platform that simplifies finding and booking verified rentals. Users can browse listings, access detailed property info, and book securely, saving time and avoiding booking hassles.",
    tech: ["NextJs", "TypeScript", "Tailwind", "API"],
    liveLink: "https://rent-smart-five.vercel.app/",
    githubLink: "https://github.com/Sulemana24/RentSmart",
  },
  {
    title: "SwiftBill",
    image: Swift,
    description:
      "SwiftBill is a user-friendly platform for managing internet, SMS bundles, and electricity payments. Its intuitive interface and clear workflows make daily financial tasks fast, simple, and accessible.",
    tech: ["NextJs", "JavaScript", "Tailwind", "Paystack API", "MongoDB"],
    liveLink: "https://swiftbill-ten.vercel.app/",
    githubLink: "https://github.com/Sulemana24/SwiftBill",
  },

  {
    title: "EazyCheck",
    image: EazyCheck,
    description:
      "EazyCheck is a GPA calculator that helps students track performance and calculate academic standing automatically. It empowers students to plan effectively and stay on top of their academic goals.",
    tech: ["HTML", "JavaScript", "CSS", "LocalStorage"],
    liveLink: "https://eazy-check.vercel.app/",
    githubLink: "https://github.com/Sulemana24/EazyCheck",
  },

  {
    title: "NextStep Community",
    image: NextStep,
    description:
      "NextStep Community is an online hub connecting users with jobs, courses, projects, and local events. It helps users discover opportunities, collaborate, and grow within a supportive community.",
    tech: ["React", "HTML", "JavaScript", "CSS", "SwiperJs"],
    liveLink: "https://next-step-psi-henna.vercel.app/",
    githubLink: "https://github.com/Sulemana24/NextStep",
  },
  {
    title: "PulseBit",
    image: PulseBit,
    description:
      "PulseBit is a developer-focused blog where I share tutorials, insights, and best practices in web development. It demonstrates my expertise in frontend technologies and ability to communicate complex concepts clearly to help other developers succeed.",
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
            <div className="project-images">
              {project.screenshots ? (
                <Carousel images={project.screenshots} title={project.title} />
              ) : (
                <img src={project.image} alt={project.title} />
              )}
            </div>
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
