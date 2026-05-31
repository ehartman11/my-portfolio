import React from "react";
import PrototypeImage from "../assets/sip-protoype.jpeg";

function SIP() {
  return (
    <div style={styles.container}>
        <h1 style={styles.header}>Radiation Detector Integration with Real-Time Data Recorder</h1>
        <figure style={styles.figure}>
            <img src={PrototypeImage} alt="Prototype of the Radiation Detector" style={styles.image} />
            <figcaption style={styles.caption}>Prototype of the Radiation Detector (Image provided by Microsoft Image Creator)</figcaption>
        </figure>

      <section style={styles.section}>
        <h2>Project Description</h2>
        <p>
          This project focuses on creating a handheld radiation detection system for nuclear propulsion technicians 
          and private-sector radiological technicians who often work in confined spaces requiring accurate, 
          real-time measurements.
        </p>
        <p>
          How it works: <br/> 
            <ul>
                <li> A Geiger-Müller tube and Matrix Portal S3 microcontroller (programmed in C/C++) capture and log radiation data. </li>   
                <li>Data is transferred via wired connection to a Kotlin-based Android tablet.</li>  
                <li>Users interact with a secure, offline mapping interface, store readings in a local SQLite database, 
                    and view real-time markers for immediate feedback.</li>   
            </ul> 
        </p>
      </section>

      {/* Innovation Claim */}
      <section style={styles.section}>
        <h2>Innovation Claim</h2>
        <p>
          This system enhances mobility, usability, and efficiency compared to existing radiation monitoring solutions.  
          Unlike traditional bulky survey equipment, this project provides:
        </p>
        <ul style={styles.list}>
          <li>A portable, cost-effective alternative to proprietary systems</li>
          <li>Integrated real-time visualization and logging</li>
          <li>Increased accuracy in manual radiation surveys</li>
        </ul>
      </section>

      {/* Project Resources */}
      <section style={styles.section}>
        <h2>Project Resources</h2>
        <ul style={styles.list}>
          <li>
            <a href="/assets/SIP-Brief.docx" download target="_blank" rel="noopener noreferrer" style={styles.link}>
              Download SIP Brief (.docx)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  subHeader: {
    fontSize: "1.2rem",
    color: "#555",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    textAlign: "left",
    maxWidth: "800px",
    margin: "auto",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
  },
  image: {
    width: "80%",
    maxWidth: "600px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  link: {
    color: "#0077b5",
    textDecoration: "none",
    fontSize: "18px",
  },
  caption: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
    fontStyle: "italic",
  },
};

export default SIP;
