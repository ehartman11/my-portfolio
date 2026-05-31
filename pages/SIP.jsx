import React, {useState} from "react";
import "../css/pages/sip.css";
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
            <img src={PrototypeImage} alt="Prototype of the Radiation Detector" className="sip-image" />
            <figcaption className="sip-caption">Prototype of the Radiation Detector (Image provided by Microsoft Image Creator)</figcaption>
        </figure>

      <div className="sip-info" style={{ backgroundImage: `url(${PowerPlantImage})` }}>
        <section className="content-panel">
          <h2>Project Description</h2>
          <p>
            This project focuses on creating a handheld radiation detection system for nuclear propulsion technicians 
            and private-sector radiological technicians who often work in confined spaces requiring accurate, 
            real-time measurements.
          </p>
          <p>How it works:</p>
          <ul className="sip-list">
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
          <ul className="sip-list">
            <li>A portable, cost-effective alternative to proprietary systems</li>
            <li>Integrated real-time visualization and logging</li>
            <li>Increased accuracy in manual radiation surveys</li>
          </ul>
        </section>
        
        {/* Image Gallery */}
        <div className="sip-gallery">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Prototype ${index + 1}`}
              className="sip-thumbnail"
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
          <div className="sip-document-links">
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
            className="sip-document"
          />

          <embed 
            src={TechnicalDesignDocument} 
            type="application/pdf" 
            width="100%" 
            height="520px" 
            className="sip-document"
          />
        </section>

      </div>
    </main>
  );
}

export default SIP;
