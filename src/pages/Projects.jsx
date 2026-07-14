import React, { useState } from "react";
import "../css/pages/projects.css";
import mapsPages from "../assets/maps_pages.jpg";
import recordsPage from "../assets/records_page.jpg";
import homePage from "../assets/home_page.jpg";
import mapImage from "../assets/map.jpg";
import topLevelDesign from "../assets/top_level_design.jpg";
import dataSciencePdf from "../assets/projects/Data_science.pdf";
import djPartyAppVideo from "../assets/projects/DJ_party_app.mp4";
import dbSchema from "../assets/projects/db_schema.png";
import sqlView from "../assets/projects/sql_view.png";
import sqlUpdate from "../assets/projects/sql_update.png";
import habitTrackerOne from "../assets/projects/habit_tracker_1.jpg";
import habitTrackerTwo from "../assets/projects/habit_tracker_2.jpg";
import habitTrackerThree from "../assets/projects/habit_tracker_3.jpg";
import babyHabitTrackerVideo from "../assets/projects/Baby_habit_tracker.mp4";
import budgetVideo from "../assets/projects/Budget.mp4";
import conquestVideo from "../assets/projects/Conquest.mp4";

const projects = [
  {
    name: "Radiation Detector & Mobile App",
    description: "A portable radiation detection tool.",
    tags: ["Embedded", "Android", "SQLite"],
    mediaLinks: [
      { type: "image", src: mapsPages },
      { type: "image", src: recordsPage },
      { type: "image", src: homePage },
      { type: "image", src: mapImage },
      { type: "image", src: topLevelDesign }
    ]
  },
  {
    name: "WonderTales: Educational Web App for Kids",
    description: "Inspired by my first born, I wanted to create a website that fosters hands-on learning with parent engagement that is both fun and stimulates critical thinking.",
    link: "https://github.com/ehartman11/Dust-Echo",
    linkText: "View related repository",
    tags: ["Web App", "Education", "Family"],
    mediaLinks: []
  },
  {
    name: "AI-Driven Financial Market Analysis",
    description: "As my introduction into data science I utilized the power of Pythons Numpy, Pandas, Seaborn, Matplotlib, and Sklearn to clean, normalize, analyze, and visualize Bank Loan data",
    tags: ["Python", "Data Science", "Analytics"],
    mediaLinks: [{ type: "pdf", src: dataSciencePdf }]
  },
  {
    name: "DJ Party App",
    description: "React Native and Google Maps based music vote app.",
    tags: ["React Native", "Google Maps", "Mobile"],
    mediaLinks: [{ type: "video", src: djPartyAppVideo }]
  },
  {
    name: "DB Management of Business Financial Statements",
    description: "SQL DB design, views, joins, and aggregation.",
    link: "https://youtu.be/4PeZ3Ih4iPo",
    linkText: "View live demonstration",
    tags: ["SQL", "Database Design", "Reporting"],
    mediaLinks: [
      { type: "image", src: dbSchema },
      { type: "image", src: sqlView },
      { type: "image", src: sqlUpdate }
    ]
  },
  {
    name: "Baby Habit Tracker",
    description: "Uses M5 StickC Plus 2 and Firebase to monitor a newborn.",
    link: "https://github.com/ehartman11/Baby_habit_app",
    linkText: "View repository",
    tags: ["Firebase", "IoT", "Embedded"],
    mediaLinks: [
      { type: "image", src: habitTrackerTwo },
      { type: "image", src: habitTrackerOne },
      { type: "image", src: habitTrackerThree },
      { type: "video", src: babyHabitTrackerVideo }
    ]
  },
  {
    name: "Budget Tool",
    description: "A personal budget tool using VBA for Excel.",
    tags: ["VBA", "Excel", "Finance"],
    mediaLinks: [{ type: "video", src: budgetVideo }]
  },
  {
    name: "Conquest",
    description: "My first game, a tabletop-style PC game in Python.",
    tags: ["Python", "Game", "Desktop"],
    mediaLinks: [{ type: "video", src: conquestVideo }]
  },
  {
    name: "Webscraping Stock Market and Financial Data",
    description: "Two Python scripts using Pandas, Requests, and BeautifulSoup for pulling and exporting financial data.",
    link: "https://github.com/ehartman11/CSC318_Final_Project",
    linkText: "View repository",
    tags: ["Python", "Pandas", "BeautifulSoup"],
    mediaLinks: []
  },
  {
    name: "Moro Maintenance & Asset Management System",
    description: "Backend-driven maintenance workflow and asset tracking system utilizing relational database architecture and Azure-based deployment infrastructure.",
    link: "https://github.com/ehartman11/Moro",
    linkText: "View repository",
    tags: ["PHP", "Azure", "Database"],
    mediaLinks: []
  },
  {
    name: "Command-Line Workflow Automation Tool",
    description: "A configurable command-line utility built to automate repetitive workflows and improve operational efficiency.",
    link: "https://github.com/ehartman11/Quick_Launch",
    linkText: "View repository",
    tags: ["Automation", "CLI", "Workflow"],
    mediaLinks: []
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <main className="page-shell projects-page">
      <header className="page-hero">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A focused collection of software, data, mobile, and embedded projects.
        </p>
      </header>

      <div className="projects-layout">
      <aside className="project-list" aria-label="Project list">
        {projects.map((proj) => (
          <button
            className={`project-list-item ${selectedProject.name === proj.name ? "active" : ""}`}
            key={proj.name}
            onClick={() => setSelectedProject(proj)}
          >
            <span>{proj.name}</span>
            <small>{proj.tags.join(" / ")}</small>
          </button>
        ))}
      </aside>

      <section className="project-display">
        {selectedProject && (
          <article>
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <div className="tag-row">
              {selectedProject.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            {selectedProject.link && (
              <a className="project-link" href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                {selectedProject.linkText}
              </a>
            )}
            <div className="project-media-grid">
              {selectedProject.mediaLinks.length > 0 ? (
                selectedProject.mediaLinks.map((media, idx) => {
                  switch (media.type) {
                    case "image":
                      return <img key={idx} src={media.src} alt={`${selectedProject.name} media ${idx + 1}`} className="project-media" />;
                    case "video":
                      return (
                        <video key={idx} controls className="project-media">
                          <source src={media.src} type="video/mp4" />
                        </video>
                      );
                    case "pdf":
                      return (
                        <iframe
                          key={idx}
                          src={media.src}
                          title={`${selectedProject.name} document`}
                          className="project-document"
                        />
                      );
                    default:
                      return <p key={idx}>Unsupported media type: {media.type}</p>;
                  }
                })
              ) : (
                <p className="empty-note"><em>No media available for this project.</em></p>
              )}
            </div>
          </article>
        )}
      </section>
      </div>
    </main>
  );
}

export default Projects;
