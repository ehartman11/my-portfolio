import React, { useState } from "react";
import "../css/pages/projects.css";
import mapsPages from "../assets/maps_pages.jpg";
import recordsPage from "../assets/records_page.jpg";
import homePage from "../assets/home_page.jpg";
import mapImage from "../assets/map.jpg";
import topLevelDesign from "../assets/top_level_design.jpg";
import dataSciencePdf from "../assets/projects/Data_science.pdf";
import dbSchema from "../assets/projects/db_schema.png";
import sqlView from "../assets/projects/sql_view.png";
import sqlUpdate from "../assets/projects/sql_update.png";
import budgetVideo from "../assets/projects/Budget.mp4";
import conquestVideo from "../assets/projects/Conquest.mp4";

const projects = [
  {
    name: "RadconApp / Radiation Survey Tablet System",
    summary:
      "Offline-first Android survey software for radiation and contamination workflows, built around map templates, local records, role-aware review, and detector-reading integration.",
    tags: ["Kotlin", "Android", "Room", "MVVM", "Hardware"],
    evidence: [
      "Software architecture docs define MVVM, repository boundaries, Room persistence, authentication/session layers, and future hardware ingestion.",
      "Requirements traceability maps offline operation, role-gated workflows, map interaction, records, export, and hardware integration to verification targets.",
      "Source includes DAOs, entities, repositories, command objects, survey draft state, map creation tools, parser classes, export services, and role guards."
    ],
    mediaLinks: [
      { type: "image", src: topLevelDesign },
      { type: "image", src: homePage },
      { type: "image", src: mapsPages },
      { type: "image", src: mapImage },
      { type: "image", src: recordsPage }
    ]
  },
  {
    name: "Moro Maintenance & Asset Management System",
    summary:
      "A PHP/MySQL maintenance platform that organizes homes, assets, recurring tasks, schedules, service history, permissions, and owner-only actions.",
    link: "https://github.com/ehartman11/Moro",
    linkText: "View repository",
    tags: ["PHP", "MySQL", "Security", "Architecture"],
    evidence: [
      "README documents home-scoped data ownership, item/task/history relationships, task schedule advancement, and append-only maintenance history.",
      "Authorization is enforced through session state, active-home permissions, owner/viewer roles, POST-only mutations, and backend role checks.",
      "The design favors deterministic data behavior, explicit error handling, foreign-key integrity, and maintainable controller/service/repository boundaries."
    ],
    mediaLinks: []
  },
  {
    name: "Conquest / Reign Strategy Game Engine",
    summary:
      "A strategy-game system that evolved from the Reign playable prototype into Conquest, an engine-first rebuild with explicit rules, state modeling, tests, and future multiplayer architecture.",
    tags: ["Python", "Pygame", "Game Engine", "Architecture"],
    evidence: [
      "Reign demonstrates the original playable concept with hex-board interaction, unit purchasing, turn flow, combat resolution, card effects, and Pygame GUI menus.",
      "Conquest separates the rules engine from the client layer so rendering, input handling, networking, and AI can reuse the same action and validation model.",
      "Technical foundation docs define long-term direction for local play, AI, online multiplayer, configurable maps, server authority, persistence, and public-release planning."
    ],
    mediaLinks: [{ type: "video", src: conquestVideo }]
  },
  {
    name: "BlackJack Room-Based Card Game",
    summary:
      "A Tkinter card-game prototype with visual card assets, room selection, password-protected sessions, player/dealer areas, and SQLite-backed room state.",
    tags: ["Python", "Tkinter", "SQLite", "Game State"],
    evidence: [
      "The UI supports login, room selection, room creation, password verification, player/dealer display areas, and card rendering from local assets.",
      "The database layer models rooms, players, cards, card ownership, room seats, turn position, and deck state with SQLite tables.",
      "Controller and polling components show an attempt to coordinate interactive game state across room membership and card dealing actions."
    ],
    mediaLinks: []
  },
  {
    name: "CSCS / Containment Safety Control System",
    summary:
      "A modular C++ simulation of plant safety controls with alarms, doors, ventilation, event logging, operator commands, and a split terminal dashboard.",
    tags: ["C++", "OOP", "Threads", "Event Bus"],
    evidence: [
      "Architecture documentation describes simulation, display, and input threads coordinated by a core loop.",
      "Interfaces such as data source, alarm manager, ventilation controller, logger, dashboard, and announcement service decouple subsystems.",
      "Factory wiring and publish/subscribe events allow simulated data sources, logging, ventilation responses, and UI updates to evolve independently."
    ],
    mediaLinks: []
  },
  {
    name: "Jibby JSON Library",
    summary:
      "A dependency-free C++ JSON library built from scratch for parsing, inspecting, modifying, iterating, serializing, loading, and saving JSON.",
    tags: ["C++", "Parser", "Data Structures", "CMake"],
    evidence: [
      "README documents a small public API for loading, iterating, modifying, pretty-printing, and saving JSON data.",
      "Source includes tokenizer, parser, serializer, iterator, exception, file I/O, and a variant-backed Json value model.",
      "Tests cover parsing, serialization, escaping, Unicode handling, and invalid input cases."
    ],
    mediaLinks: []
  },
  {
    name: "ML_Project Predictive Modeling Suite",
    summary:
      "A collection of Python machine-learning projects for salary prediction, car classification, energy-cost analysis, and development-indicator prediction.",
    tags: ["Python", "pandas", "scikit-learn", "Modeling"],
    evidence: [
      "Projects use pandas data loading, feature encoding, train/test splits, scikit-learn pipelines, and supervised estimators.",
      "The salary predictor evaluates model quality with MAE, MSE, R-squared, and a tolerance-based accuracy calculation.",
      "Generated plots document prediction outputs and support model interpretation."
    ],
    mediaLinks: [{ type: "pdf", src: dataSciencePdf }]
  },
  {
    name: "Stock & Financial Statement Scraping Tools",
    summary:
      "A Python automation project that scrapes financial data, structures stock and statement tables, exports results to Excel, and validates export behavior with tests.",
    tags: ["Python", "Selenium", "pandas", "Excel"],
    evidence: [
      "Scraping scripts use Selenium to retrieve stock and financial statement data from web pages and transform the captured rows into structured tables.",
      "Excel exports use pandas and openpyxl to create workbook artifacts for income statement, balance sheet, and cash-flow data.",
      "Pytest coverage checks table initialization, categorized data import, Excel output creation, export ordering, and empty-data handling."
    ],
    mediaLinks: []
  },
  {
    name: "CSC115 Credit Risk Data Analysis",
    summary:
      "A data-analysis project using pandas, seaborn, scikit-learn, generated figures, and a final presentation to explore and model German credit-risk data.",
    tags: ["Python", "Data Analysis", "scikit-learn", "Visualization"],
    evidence: [
      "The final script performs data cleaning, categorical mapping, exploratory visualization, missing-data handling, and relationship analysis across borrower and loan features.",
      "The modeling workflow uses train/test splitting, scaling, logistic regression, classification reporting, confusion matrices, ROC/AUC, and visual interpretation.",
      "Supporting artifacts include the final notebook, generated figures, source datasets, and a final project presentation."
    ],
    mediaLinks: []
  },
  {
    name: "CSC382 Data Structures Portfolio",
    summary:
      "A focused C++ data-structures collection covering linked lists, stack/queue behavior, heap sort, hashing, frequency counting, and binary trees.",
    tags: ["C++", "Linked List", "Hashing", "Trees"],
    evidence: [
      "The linked-list project implements a template-based doubly linked list with insertion, removal, traversal, search, and memory cleanup.",
      "The stack/queue writeup compares LIFO and FIFO retrieval using the same conversation data to show behavioral differences.",
      "Heap sort, hashing, and binary-tree work demonstrate algorithm analysis, collision handling, ordering, traversal, and performance tradeoffs."
    ],
    mediaLinks: []
  },
  {
    name: "Payroll System",
    summary:
      "A C++ payroll CLI demonstrating employee records, unique IDs, searching, raises, evaluations, payroll totals, and class-based data ownership.",
    tags: ["C++", "Classes", "Search", "CLI"],
    evidence: [
      "The README identifies clean class design, pointer ownership, unique ID assignment, search, evaluation, and payroll calculations as project goals.",
      "The Employee class uses private state, typed initialization arguments, getters, setters, evaluation enums, and formatted stream output.",
      "The project uses CMake and a separated include/src structure for a small but maintainable compiled application."
    ],
    mediaLinks: []
  },
  {
    name: "Database Management of Business Financial Statements",
    summary:
      "A database project using schema design, SQL views, joins, and aggregation to organize and report business financial statement data.",
    link: "https://youtu.be/4PeZ3Ih4iPo",
    linkText: "View demonstration",
    tags: ["SQL", "Database Design", "Reporting"],
    evidence: [
      "The schema artifact shows structured relational modeling for business financial data.",
      "SQL screenshots demonstrate view creation, retrieval, and update operations.",
      "The project supports Objective 3 evidence by turning stored financial records into queryable reporting structures."
    ],
    mediaLinks: [
      { type: "image", src: dbSchema },
      { type: "image", src: sqlView },
      { type: "image", src: sqlUpdate }
    ]
  },
  {
    name: "Budget Tool",
    summary:
      "A finance-focused automation project that applies spreadsheet programming to organize budget data and reduce manual tracking work.",
    tags: ["VBA", "Excel", "Finance", "Automation"],
    evidence: [
      "The demo asset shows a practical automation workflow rather than a static spreadsheet.",
      "The project demonstrates applied scripting in a business-productivity environment outside traditional web or mobile stacks.",
      "It remains a useful supporting example for automation and data-driven personal finance workflows."
    ],
    mediaLinks: [{ type: "video", src: budgetVideo }]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <main className="page-shell projects-page">
      <header className="page-hero">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          Technical project evidence across mobile software, data systems, C++ architecture, machine learning, and automation.
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
              <p className="project-summary">{selectedProject.summary}</p>
              <div className="tag-row">
                {selectedProject.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>

              <section className="project-evidence" aria-label="Project evidence">
                <h3>Evidence Reviewed</h3>
                <ul>
                  {selectedProject.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

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
                  <p className="empty-note"><em>Evidence is based on reviewed source files, project documentation, and local artifacts.</em></p>
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
