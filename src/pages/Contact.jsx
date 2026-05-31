import React, { useState } from "react";
import LinkedInLogo from "../assets/LI-Logo.png";

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
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            />
        <textarea  
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
            />
        <button type="submit" className="button-primary">Send</button>
      </form>

        <div style={styles.linkedin}>
          <a 
          href="https://www.linkedin.com/in/ethan-hartman-899b9174/" 
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          > 
            <img src={LinkedInLogo} alt="LinkedIn" style={styles.image}/> 
          </a>
        </div>
      </section>
    </main>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    maxWidth: "400px",
    margin: "auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  link: {
    display: "inline-block",
    fontSize: "18px",
    margin: "10px 0",
    color: "#0077b5",
    textDecoration: "none",
  },
  linkedin: {
    marginTop: "24px",
    textAlign: "center",
  },
  image: {
    width: "150px",
    height: "auto"
  }
};

export default Contact;
