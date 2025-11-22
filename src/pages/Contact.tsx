import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com"; // <-- Import EmailJS
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_87pqca9",
        "template_5wn6bko",
        form.current,
        "PHKeh0Qh9w8oDuuTm"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <p className="contact-description">
              Feel free to reach out via Email, WhatsApp, or connect with me on
              GitHub and LinkedIn.
            </p>

            <div className="info-block">
              <strong>Address:</strong>
              <p>Kumasi, A/R, Ghana</p>
            </div>
            <div className="info-block">
              <strong>Phone:</strong>
              <p>+233 551 333 780</p>
              <p>+233 508 211 181</p>
            </div>
            <div className="info-block">
              <strong>Email:</strong>
              <p>iddrisusulemana665@gmail.com</p>
            </div>
          </div>
          <div className="contact-form" data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="send-button">
                Send Message
              </button>
              {status && (
                <p style={{ marginTop: "10px", color: "orangered" }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
