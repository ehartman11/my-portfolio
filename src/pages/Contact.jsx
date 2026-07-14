import React, { useState } from "react";
import LinkedInLogo from "../assets/LI-Logo.png";
import "../css/pages/contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name) {
            alert("Please fill in your name before submitting.");
            return;
        }
            
        if (!formData.message) {
            alert("Please fill the message box before submitting.");
            return;
        }
        const subject = encodeURIComponent(`Message from ${formData.name}`);
        const body = encodeURIComponent(formData.message);
        window.location.href = `mailto:ephartman1@gmail.com?subject=${subject}&body=${body}`;
        alert(`Thank you, ${formData.name}! Your email client should open with the message ready to send.`);
        setFormData({ name: "", message: "" });
    };

  return (
    <main className="page-shell">
      <header className="page-hero">
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">
          Send a message or connect with me on LinkedIn.
        </p>
      </header>
      <section className="content-panel contact-panel">
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
            />
        <textarea  
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
            />
        <button type="submit" className="button-primary">Send</button>
      </form>

        <div className="contact-linkedin">
          <a 
          href="https://www.linkedin.com/in/ethan-hartman-899b9174/" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          > 
            <img src={LinkedInLogo} alt="LinkedIn" className="contact-logo"/> 
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
