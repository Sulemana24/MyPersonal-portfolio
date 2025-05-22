import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Frontend Mentor",
    company: "EliteWeb Community",
    duration: "May 2025 - Present",
    description:
      "As a Frontend Mentor at EliteWeb Community, I guide and support aspiring developers in their learning journey by providing feedback on their projects, sharing best practices, and fostering a collaborative environment for skill development.",
    technologies: [
      "Git & Github",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Figma",
      "JavaScript",
      "Effective Communication",
      "Peer Mentorship",
    ],
  },
  {
    role: "Welfare Chairman",
    company: "Green Africa Youth Organization-AAMUSTED Chapter",
    duration: "Jan 2025 - Present",
    description:
      "As Welfare Chairman of Green Africa Youth Organization – AAMUSTED, I led initiatives that supported students' well-being, managed welfare funds, coordinated health and support programs, and collaborated with stakeholders to promote inclusion, sustainability, and youth empowerment.",
    technologies: [
      "Problem Solving",
      "Team Collaboration",
      "Leadership",
      "Empathy",
      "Time Management",
      "Communication",
      "Event Planning",
      "Project Management",
    ],
  },

  {
    role: "Frontend Developer Intern",
    company: "CodeAlpha",
    duration: "May 2025 - Aug 2025",
    description:
      "Designed and maintained community engagement platform that connects individuals and organizations through projects, jobs, and courses.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"],
  },
  {
    role: "IT Support Intern",
    company: "Yendi Government Hospital",
    duration: "Sep 2024 - Dec 2024",
    description:
      "Completed hands-on training in troubleshooting, networking, and systems administration as part of the Google IT Support certificate program.",
    technologies: [
      "Linux",
      "Networking",
      "Helpdesk",
      "Windows OS",
      "Troubleshooting",
    ],
  },
];

const Experience: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="experience-section" id="experiences">
      <div className="container">
        <h2 className="section-title">
          <span className="title-underline">Experience</span>
        </h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index} data-aos="fade-up">
              <h3>{exp.role}</h3>
              <span className="company">
                {exp.company} | {exp.duration}
              </span>
              <p className="description">{exp.description}</p>
              <div className="tech-stack">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
