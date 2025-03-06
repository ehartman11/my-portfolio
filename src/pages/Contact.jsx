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
        window.location.href = `mailto:ephartman1@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
        alert(`Thank you, ${formData.name}! Your message was received.`);
        setFormData({ name: "", message: "" });
    };

  return (
    <div style={styles.container}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            />
        <textarea  
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
            />
        <button type="submit" style={styles.button}> Send </button>
      </form>

        <div>
          <a 
          href="https://www.linkedin.com/in/ethan-hartman-899b9174/" 
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          > 
            <img src={LinkedInLogo} alt="LinkedIn" style={styles.image}/> 
          </a>
        </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px"
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
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#333",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  links: {
    marginTop: "20px",
  },
  link: {
    display: "block",
    fontSize: "18px",
    margin: "10px 0",
    color: "#0077b5",
    textDecoration: "none",
  },
  image: {
    width: "150px",
    height: "auto"
  }
};

export default Contact;