import React, {useState} from "react";
import PrototypeImage from "../assets/sip-protoype.jpeg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import PrototypeImage1 from "../assets/maps_pages.jpg";
import PrototypeImage2 from "../assets/records_page.jpg";
import PrototypeImage3 from "../assets/home_page.jpg";
import PrototypeImage4 from "../assets/map.jpg";
import PrototypeImage5 from "../assets/top_level_design.jpg";
import PowerPlantImage from "../assets/power-plant.jpg";
import InnovationBrief from "../assets/SIP311_Innovation_Brief.pdf";
import TechnicalDesignDocument from "../assets/Technical_Design_Document.pdf";

function SIP() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    PrototypeImage1,
    PrototypeImage2,
    PrototypeImage3,
    PrototypeImage4,
    PrototypeImage5,
  ];

  return (
    <main className="page-shell sip-page">
        <header className="page-hero">
          <h1 className="page-title">Radiation Detector Integration with Real-Time Data Recorder</h1>
        </header>
        <figure>
            <img src={PrototypeImage} alt="Prototype of the Radiation Detector" style={styles.image} />
            <figcaption style={styles.caption}>Prototype of the Radiation Detector (Image provided by Microsoft Image Creator)</figcaption>
        </figure>

      <div style={{ ...styles.info, backgroundImage: `url(${PowerPlantImage})` }}>
        <section className="content-panel">
          <h2>Project Description</h2>
          <p>
            This project focuses on creating a handheld radiation detection system for nuclear propulsion technicians 
            and private-sector radiological technicians who often work in confined spaces requiring accurate, 
            real-time measurements.
          </p>
          <p>How it works:</p>
          <ul style={styles.list}>
            <li> A Geiger-Müller tube and Matrix Portal S3 microcontroller (programmed in C/C++) capture and log radiation data. </li>   
            <li>Data is transferred via wired connection to a Kotlin-based Android tablet.</li>  
            <li>Users interact with a secure, offline mapping interface, store readings in a local SQLite database, 
                and view real-time markers for immediate feedback.</li>   
          </ul> 
        </section>

        <section className="content-panel">
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
        
        {/* Image Gallery */}
        <div style={styles.gallery}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Prototype ${index + 1}`}
              style={styles.thumbnail}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}

        {/* SIP Brief Document Embedding */}
        <section className="content-panel document-panel">
          <h2>Project Documents</h2>
          <div style={styles.documentLinks}>
            <a className="button-link" href={InnovationBrief} target="_blank" rel="noopener noreferrer">
              View Innovation Brief
            </a>
            <a className="button-link" href={TechnicalDesignDocument} target="_blank" rel="noopener noreferrer">
              View Technical Design Document
            </a>
          </div>
          <embed 
            src={InnovationBrief} 
            type="application/pdf" 
            width="100%" 
            height="520px" 
            style={styles.document}
          />

          <embed 
            src={TechnicalDesignDocument} 
            type="application/pdf" 
            width="100%" 
            height="520px" 
            style={styles.document}
          />
        </section>

      </div>
    </main>
  );
}

const styles = {
  info: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
    marginTop: "24px",
    padding: "24px 0",
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
  caption: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
    fontStyle: "italic",
  },
  document: {
    border: "1px solid rgba(31, 41, 51, 0.12)",
    borderRadius: "8px",
    marginTop: "16px",
  },
  documentLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "10px",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
  },
  thumbnail: {
    width: "150px",
    height: "auto",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "transform 0.2s ease-in-out",
  },
};

export default SIP;
