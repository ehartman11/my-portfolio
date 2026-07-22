import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/pages/projects.css";
import mapsPages from "../assets/maps_pages.jpg";
import recordsPage from "../assets/records_page.jpg";
import homePage from "../assets/home_page.jpg";
import mapImage from "../assets/map.jpg";
import topLevelDesign from "../assets/top_level_design.jpg";
import innovationBrief from "../assets/SIP311_Innovation_Brief.pdf";
import dataSciencePdf from "../assets/projects/Data_science.pdf";
import dbSchema from "../assets/projects/db_schema.png";
import sqlView from "../assets/projects/sql_view.png";
import sqlUpdate from "../assets/projects/sql_update.png";
import financeTrackerPdf from "../assets/projects/finance_tracker/Finance Tracker Application.pdf";
import budgetVideo from "../assets/projects/Budget.mp4";
import conquestVideo from "../assets/projects/Conquest.mp4";
import babyHabitVideo from "../assets/projects/Baby_habit_tracker.mp4";
import cscsDemoVideo from "../assets/projects/CSCS/CSCS Demo.mp4";
import habitTrackerOne from "../assets/projects/habit_tracker_1.jpg";
import habitTrackerTwo from "../assets/projects/habit_tracker_2.jpg";
import habitTrackerThree from "../assets/projects/habit_tracker_3.jpg";

const projects = [
  {
    id: "radconapp-radiation-survey-tablet-system",
    name: "RadconApp / Radiation Survey Tablet System",
    objectives: ["01", "02", "03", "04", "05", "06"],
    summary:
      "Offline-first Android survey software for radiation and contamination workflows, built around reusable map templates, local survey records, role-aware review, and detector-reading integration.",
    description:
      "RadconApp is the central SIP project: a Kotlin Android tablet application designed for radiation survey work in controlled environments where wireless connectivity may be unavailable or undesirable. The project replaces paper-first survey recording with an offline map-based workflow. Users can create or import facility map templates, open a fresh survey session from a template, place survey points directly onto the map, save survey records, reopen records later, and preserve review data such as notes and signatures at the record level.",
    howItWorks:
      "The application uses Jetpack Compose for the tablet interface, ViewModels and repositories for state and business logic, and Room/SQLite for local persistence. Map templates are separated from survey records so a template can be reused without accidentally modifying prior survey data. Draft survey information stays in memory until Save Job is invoked, then the application persists survey points, metadata, tables, notes, signatures, and generated preview images. Recent work also aligned the Home, Stored Maps, and Records pages with the planned multi-panel layouts and added visible scroll rails for tablet usability.",
    tags: ["Kotlin", "Android", "Room", "MVVM", "Hardware"],
    evidence: [
      "The innovation brief documents the problem, audience, project goals, evaluation criteria, prototype design, and completion timeline.",
      "Architecture and traceability documents connect requirements to Room entities, repositories, ViewModels, map workflows, record persistence, export strategy, and hardware ingestion.",
      "Implementation evidence includes map creation tools, template/record separation, draft-first saving, survey-specific tables, reviewer signatures, generated preview images, and successful Kotlin compilation checks."
    ],
    link: "/sip",
    linkText: "View SIP page",
    mediaLinks: [
      { type: "pdf", src: innovationBrief, label: "Innovation brief" },
      { type: "image", src: topLevelDesign, label: "Top-level design" },
      { type: "image", src: homePage, label: "Home page" },
      { type: "image", src: mapsPages, label: "Maps page" },
      { type: "image", src: mapImage, label: "Survey map" },
      { type: "image", src: recordsPage, label: "Records page" }
    ]
  },
  {
    id: "moro-maintenance-asset-management-system",
    name: "Moro Maintenance & Asset Management System",
    objectives: ["01", "02", "03", "04"],
    summary:
      "A PHP/MySQL maintenance platform that organizes homes, assets, recurring tasks, schedules, service history, permissions, and owner-only actions.",
    description:
      "Moro is a web application for tracking maintenance work across homes and assets. It models the practical problem of keeping long-term service records organized: users need to know what belongs to a home, what work is due, what has already been completed, and who is allowed to view or modify that information.",
    howItWorks:
      "The system uses PHP controllers and service/repository boundaries over a MySQL data model. Homes, items, tasks, task schedules, and maintenance history are represented as related records. Server-side session state and role checks protect owner-only actions, while append-style history keeps completed work reviewable over time. The project shows how requirements become a persistent web workflow rather than a static database exercise.",
    tags: ["PHP", "MySQL", "Security", "Architecture"],
    evidence: [
      "The README documents home-scoped data ownership, item/task/history relationships, task schedule advancement, and append-only maintenance history.",
      "Authorization is enforced through session state, active-home permissions, owner/viewer roles, POST-only mutations, and backend role checks.",
      "The implementation favors deterministic data behavior, explicit error handling, foreign-key integrity, and maintainable controller/service/repository boundaries."
    ],
    link: "https://github.com/ehartman11/Moro",
    linkText: "View repository",
    mediaLinks: [
      { type: "external", href: "https://youtu.be/dHOCRgZMayM", label: "Watch demonstration" }
    ]
  },
  {
    id: "budget-tool",
    name: "Personal Finance Tracker / Budget Tool",
    objectives: ["01"],
    summary:
      "A finance-focused automation project supported by requirements documentation and a demo workflow for organizing budget data and reducing manual tracking work.",
    description:
      "The budget project is useful evidence for software planning because it is paired with requirements work: scope, user workflows, functional needs, quality expectations, reporting concerns, and security considerations. Its value on the Boards page is less about being a large system and more about showing that the problem was analyzed before implementation choices were made.",
    howItWorks:
      "The project applies spreadsheet automation to a personal finance workflow. Instead of treating the spreadsheet as a static table, the solution uses scripted behavior to organize records and reduce repetitive manual work. The demo asset supports the written planning evidence by showing the workflow in motion.",
    tags: ["SRS", "VBA", "Excel", "Finance"],
    evidence: [
      "The requirements material captures use cases, functional requirements, non-functional requirements, reporting needs, and boundaries.",
      "The demo asset shows a practical automation workflow rather than a static spreadsheet.",
      "The project supports Objective 01 by showing planning, implementation intent, and validation through a working finance task."
    ],
    mediaLinks: [
      { type: "pdf", src: financeTrackerPdf, label: "Finance tracker requirements" },
      { type: "video", src: budgetVideo, label: "Budget demo" }
    ]
  },
  {
    id: "cscs-containment-safety-control-system",
    name: "CSCS / Containment Safety Control System",
    objectives: ["05", "06"],
    summary:
      "A modular C++ simulation of plant safety controls with alarms, doors, ventilation, event logging, operator commands, and a split terminal dashboard.",
    description:
      "CSCS models a containment safety control environment as a coordinated C++ simulation. It is one of the strongest object-oriented examples because the domain naturally requires separate responsibilities: sensor input, alarm state, door state, ventilation behavior, event logging, operator commands, and dashboard display.",
    howItWorks:
      "The system is organized around interfaces, concrete subsystem classes, event messages, factory wiring, and concurrent control/display/input behavior. Rather than letting one procedure control the simulation, the project uses publish/subscribe-style events and subsystem boundaries so simulated data sources, alarm responses, ventilation actions, logs, and UI output can evolve independently.",
    tags: ["C++", "OOP", "Threads", "Event Bus"],
    evidence: [
      "Architecture documentation describes simulation, display, and input threads coordinated by a core loop.",
      "Interfaces such as data source, alarm manager, ventilation controller, logger, dashboard, and announcement service decouple subsystems.",
      "Factory wiring and publish/subscribe events demonstrate abstraction, encapsulation, and data-structure use through event objects, zone collections, state models, and log records."
    ],
    mediaLinks: [{ type: "video", src: cscsDemoVideo, label: "CSCS demo" }]
  },
  {
    id: "jibby-json-library",
    name: "Jibby JSON Library",
    objectives: ["02", "05", "06"],
    summary:
      "A dependency-free C++ JSON library built from scratch for parsing, inspecting, modifying, iterating, serializing, loading, and saving JSON.",
    description:
      "Jibby is a systems-language project that implements a JSON handling library without relying on an external JSON package. It is valuable because it moves below application-level UI work and demonstrates parser design, type modeling, iteration, error handling, and serialization in C++.",
    howItWorks:
      "The library breaks JSON handling into tokenizer, parser, serializer, iterator, exception, and file I/O components. A variant-backed Json value abstraction represents objects, arrays, strings, numbers, booleans, and null values. Public accessors and iterators hide storage details while still allowing users to inspect, mutate, print, load, and save JSON data.",
    tags: ["C++", "Parser", "Data Structures", "CMake"],
    evidence: [
      "The README documents a small public API for loading, iterating, modifying, pretty-printing, and saving JSON data.",
      "Source includes tokenizer, parser, serializer, iterator, exception, file I/O, and a variant-backed Json value model.",
      "Tests cover parsing, serialization, escaping, Unicode handling, and invalid input cases."
    ],
    mediaLinks: [
      { type: "external", href: "https://youtu.be/rtr3noH1p34", label: "Watch demonstration" }
    ]
  },
  {
    id: "ml-project-predictive-modeling-suite",
    name: "ML_Project Predictive Modeling Suite",
    objectives: ["02", "03"],
    summary:
      "A collection of Python machine-learning projects for salary prediction, car classification, energy-cost analysis, and development-indicator prediction.",
    description:
      "The ML project collection demonstrates analytical programming rather than traditional application development. It shows the ability to turn structured datasets into trained models, visual outputs, and performance measurements that can support evidence-based decisions.",
    howItWorks:
      "The projects use pandas for data loading and transformation, scikit-learn for preprocessing and modeling, and evaluation metrics to compare prediction quality. The workflow includes feature preparation, categorical encoding, train/test splitting, estimator training, and interpretation through generated charts and scoring outputs.",
    tags: ["Python", "pandas", "scikit-learn", "Modeling"],
    evidence: [
      "Projects use pandas data loading, feature encoding, train/test splits, scikit-learn pipelines, and supervised estimators.",
      "The salary predictor evaluates model quality with MAE, MSE, R-squared, and a tolerance-based accuracy calculation.",
      "Generated plots and the data science PDF document prediction outputs and support model interpretation."
    ],
    mediaLinks: [
      { type: "external", href: "https://youtu.be/MkFm1I2xLb4", label: "Watch demonstration" },
      { type: "pdf", src: dataSciencePdf, label: "Data science evidence" }
    ]
  },
  {
    id: "database-management-business-financial-statements",
    name: "Database Management of Business Financial Statements",
    objectives: ["03"],
    summary:
      "A database project using schema design, SQL views, joins, and aggregation to organize and report business financial statement data.",
    description:
      "This project focuses on relational database design and SQL reporting for business financial statements. It is strong Objective 03 evidence because the solution depends on structured data, query design, and repeatable reporting rather than manual spreadsheet inspection.",
    howItWorks:
      "The project uses a relational schema to store financial records, then applies SQL views, retrieval queries, joins, and update operations to turn stored information into usable reporting structures. The supporting images document schema layout and SQL interaction, while the external demonstration provides a walkthrough of the database behavior.",
    tags: ["SQL", "Database Design", "Reporting"],
    evidence: [
      "The schema artifact shows structured relational modeling for business financial data.",
      "SQL screenshots demonstrate view creation, retrieval, and update operations.",
      "The project supports Objective 03 by turning stored financial records into queryable reporting structures."
    ],
    link: "https://youtu.be/4PeZ3Ih4iPo",
    linkText: "View demonstration",
    mediaLinks: [
      { type: "image", src: dbSchema, label: "Database schema" },
      { type: "image", src: sqlView, label: "SQL view" },
      { type: "image", src: sqlUpdate, label: "SQL update" }
    ]
  },
  {
    id: "ai-music-dust-echo",
    name: "AI_Music / Dust & Echo",
    objectives: ["04"],
    summary:
      "A browser-native media library that organizes audio, imagery, lyrics, and descriptions into a lightweight HTML/CSS/JavaScript experience.",
    description:
      "Dust & Echo is useful as a multi-platform/browser project because it shows an interface built without a large framework. It presents media assets in a web environment and demonstrates front-end organization around content, audio playback, visuals, and text.",
    howItWorks:
      "The project uses standard web technologies to structure media content, style the presentation, and handle the interactive parts of the user experience. It satisfies the objective by showing a browser-based platform alongside mobile, desktop, C++, and Python work.",
    tags: ["HTML", "CSS", "JavaScript", "Media"],
    evidence: [
      "The media app demo shows the interface and interaction pattern.",
      "The project organizes audio, image, lyric, and description assets into a usable browser presentation.",
      "It demonstrates a lightweight cross-platform web delivery model distinct from Android and desktop applications."
    ],
    link: "https://ehartman11.github.io/Dust-Echo/",
    linkText: "Open Dust & Echo",
    mediaLinks: [{ type: "external", href: "https://ehartman11.github.io/Dust-Echo/", label: "Open live project" }]
  },
  {
    id: "baby-habit-tracker",
    name: "Baby Habit Tracker",
    objectives: ["04"],
    summary:
      "A Python/Tkinter desktop application for logging, viewing, filtering, editing, and deleting baby habit records stored in SQLite.",
    description:
      "The Baby Habit Tracker is a practical desktop GUI project. It is a good platform-diversity example because it is not web, mobile, or command-line only: it uses native desktop windows, form controls, quick action buttons, record display, and local database persistence.",
    howItWorks:
      "The application uses Tkinter for the interface and SQLite for persisted habit records. Users can log actions such as sleep, eating, awake time, crying, or potty events with dates, times, and notes. A separate log window retrieves records from the database and supports selection-based deletion and note viewing behavior.",
    tags: ["Python", "Tkinter", "SQLite", "Desktop"],
    evidence: [
      "The demo video shows the desktop workflow.",
      "The database manager creates and queries a habits table with date, time, action, and notes fields.",
      "The UI includes quick-fill actions, log viewing, scrolling display behavior, note handling, and deletion controls."
    ],
    mediaLinks: [
      { type: "video", src: babyHabitVideo, label: "Tracker demo" },
      { type: "image", src: habitTrackerOne, label: "Tracker screen one" },
      { type: "image", src: habitTrackerTwo, label: "Tracker screen two" },
      { type: "image", src: habitTrackerThree, label: "Tracker screen three" }
    ]
  },
  {
    id: "conquest-reign-strategy-game-engine",
    name: "Conquest / Reign Strategy Game Engine",
    objectives: ["05"],
    summary:
      "A strategy-game system that evolved from the Reign playable prototype into Conquest, an engine-first rebuild with explicit rules, state modeling, tests, and future multiplayer architecture.",
    description:
      "Conquest represents the later, more serious iteration of the Reign strategy-game concept. Reign proves the original playable idea with a Pygame interface, hex board, units, combat, card behavior, and turn flow. Conquest turns that prototype into a more maintainable engine-first architecture that can support local play, AI, online multiplayer, configurable maps, and future clients.",
    howItWorks:
      "The Conquest technical foundation separates core game rules from rendering and input. The engine owns state, action validation, rules resolution, map geometry, players, cards, upgrades, combat, movement, and victory behavior. Client adapters can use the engine without redefining the rules, and the documentation lays out persistence, server authority, security, and distribution plans for future multiplayer growth.",
    tags: ["Python", "Pygame", "Game Engine", "Architecture"],
    evidence: [
      "Reign demonstrates the original playable concept with hex-board interaction, unit purchasing, turn flow, combat resolution, card effects, and Pygame GUI menus.",
      "Conquest separates the rules engine from the client layer so rendering, input handling, networking, and AI can reuse the same action and validation model.",
      "Technical foundation docs define long-term direction for local play, AI, online multiplayer, configurable maps, server authority, persistence, and public-release planning."
    ],
    mediaLinks: [{ type: "video", src: conquestVideo, label: "Conquest demo" }]
  },
  {
    id: "csc382-data-structures-portfolio",
    name: "CSC382 Data Structures Portfolio",
    objectives: ["06"],
    summary:
      "A focused C++ data-structures collection covering linked lists, stack/queue behavior, heap sort, hashing, frequency counting, and binary trees.",
    description:
      "The CSC382 work is direct evidence for data-structure analysis because the projects center on implementing and comparing structures rather than only using library collections. It shows how different storage and retrieval strategies affect behavior and performance.",
    howItWorks:
      "The projects include linked-list operations, stack and queue comparisons, heap sort, hashing, frequency counting, and binary-tree traversal or ordering behavior. Each structure supports a different access pattern, making the collection useful for explaining when insertion, removal, search, ordering, or traversal requirements should shape implementation choices.",
    tags: ["C++", "Linked List", "Hashing", "Trees"],
    evidence: [
      "The linked-list project implements a template-based doubly linked list with insertion, removal, traversal, search, and memory cleanup.",
      "The stack/queue writeup compares LIFO and FIFO retrieval using the same conversation data to show behavioral differences.",
      "Heap sort, hashing, and binary-tree work demonstrate algorithm analysis, collision handling, ordering, traversal, and performance tradeoffs."
    ],
    mediaLinks: []
  },
  {
    id: "payroll-system",
    name: "Payroll System",
    objectives: ["05"],
    summary:
      "A C++ payroll CLI demonstrating employee records, unique IDs, searching, raises, evaluations, payroll totals, and class-based data ownership.",
    description:
      "The payroll system is a compact but useful object-oriented C++ example. It models employees and payroll operations as program objects with private state, controlled access, and methods that represent payroll-related behavior.",
    howItWorks:
      "The project separates employee data from payroll management behavior. Employee objects expose getters, setters, formatted output, and evaluation-related data while preserving internal ownership of their fields. The payroll layer manages collections of employees, unique IDs, searching, raises, and total payroll calculations.",
    tags: ["C++", "Classes", "Search", "CLI"],
    evidence: [
      "The README identifies clean class design, pointer ownership, unique ID assignment, search, evaluation, and payroll calculations as project goals.",
      "The Employee class uses private state, typed initialization arguments, getters, setters, evaluation enums, and formatted stream output.",
      "The project uses CMake and a separated include/src structure for a small but maintainable compiled application."
    ],
    mediaLinks: [
      { type: "external", href: "https://youtu.be/RgVz5Bow5ZA", label: "Watch demonstration" }
    ]
  }
];

function getHashId(hash) {
  return hash ? hash.replace("#", "") : "";
}

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(() => {
    const hashProject = projects.find((project) => project.id === getHashId(window.location.hash));
    return hashProject || projects[0];
  });

  useEffect(() => {
    const hashProject = projects.find((project) => project.id === getHashId(location.hash));
    if (hashProject) {
      setSelectedProject(hashProject);
    }
  }, [location.hash]);

  const selectProject = (project) => {
    setSelectedProject(project);
    navigate(`#${project.id}`, { replace: false });
  };

  return (
    <main className="page-shell projects-page">
      <header className="page-hero">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          Detailed project evidence across software process, platforms, data systems, object-oriented architecture, and data structures.
        </p>
      </header>

      <div className="projects-layout">
        <aside className="project-list" aria-label="Project list">
          {projects.map((proj) => (
            <button
              className={`project-list-item ${selectedProject.id === proj.id ? "active" : ""}`}
              key={proj.id}
              onClick={() => selectProject(proj)}
              type="button"
            >
              <span>{proj.name}</span>
              <small>{proj.tags.join(" / ")}</small>
            </button>
          ))}
        </aside>

        <section className="project-display">
          <article id={selectedProject.id}>
            <div className="objective-chip-row" aria-label="Objectives satisfied">
              {selectedProject.objectives.map((objective) => (
                <span className="objective-chip" key={objective}>Objective {objective}</span>
              ))}
            </div>

            <h2>{selectedProject.name}</h2>
            <p className="project-summary">{selectedProject.summary}</p>
            <div className="tag-row">
              {selectedProject.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>

            <section className="project-section" aria-label="Project description">
              <h3>What It Is</h3>
              <p>{selectedProject.description}</p>
            </section>

            <section className="project-section" aria-label="How the project works">
              <h3>How It Works</h3>
              <p>{selectedProject.howItWorks}</p>
            </section>

            <section className="project-evidence" aria-label="Project evidence">
              <h3>Supporting Evidence</h3>
              <ul>
                {selectedProject.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {selectedProject.link && (
              <a className="project-link" href={selectedProject.link} target={selectedProject.link.startsWith("http") ? "_blank" : undefined} rel={selectedProject.link.startsWith("http") ? "noopener noreferrer" : undefined}>
                {selectedProject.linkText}
              </a>
            )}

            <div className="project-media-grid">
              {selectedProject.mediaLinks.length > 0 ? (
                selectedProject.mediaLinks.map((media) => {
                  switch (media.type) {
                    case "image":
                      return <img key={media.label} src={media.src} alt={media.label} className="project-media" />;
                    case "video":
                      return (
                        <video key={media.label} controls className="project-media">
                          <source src={media.src} type="video/mp4" />
                        </video>
                      );
                    case "pdf":
                      return (
                        <iframe
                          key={media.label}
                          src={media.src}
                          title={media.label}
                          className="project-document"
                        />
                      );
                    case "external":
                      return (
                        <a
                          key={media.label}
                          className="project-external-evidence"
                          href={media.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{media.label}</span>
                          <small>{media.href}</small>
                        </a>
                      );
                    default:
                      return <p key={media.label}>Unsupported media type: {media.type}</p>;
                  }
                })
              ) : (
                <p className="empty-note"><em>Evidence is based on reviewed source files, project documentation, and local artifacts.</em></p>
              )}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Projects;
