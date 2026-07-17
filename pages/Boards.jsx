import React from "react";
import desktopImage from "../assets/desktop.jpg";
import "../css/pages/boards.css";

const objectives = [
  {
    number: "01",
    title: "Document the software development process to analyze a problem and to design, build, and test software solutions",
    projects: [
      {
        name: "RadconApp / Radiation Survey Tablet System",
        tags: ["Requirements", "Architecture", "Testing"],
        evidence:
          "This project shows a complete development path from operational problem analysis to documented requirements, architecture, implementation, and verification. The supporting traceability, storage, hardware integration, delivery, and test strategy documents connect design inputs directly to implementation targets and validation steps."
      },
      {
        name: "Moro Maintenance & Asset Management System",
        tags: ["Planning", "Database Design", "Iteration"],
        evidence:
          "Moro demonstrates iterative software development through a clearly scoped maintenance problem, a deterministic data model, permission rules, task scheduling behavior, and documented design principles. Its structure shows how requirements were translated into controllers, services, repositories, authentication, and database workflows."
      },
      {
        name: "Personal Finance Tracker / CSC262 SRS",
        tags: ["SRS", "Use Cases", "Quality Goals"],
        evidence:
          "The finance tracker requirements document captures functional requirements, non-functional requirements, scope limits, security expectations, reporting needs, and user workflows. It is evidence of planning and implementating a solution."
      }
    ]
  },
  {
    number: "02",
    title: "Demonstrate software development skills using more than one programming language and development environment",
    projects: [
      {
        name: "RadconApp / Radiation Survey Tablet System",
        tags: ["Kotlin", "Android Studio", "Room"],
        evidence:
          "This project demonstrates Android development in Kotlin using Jetpack Compose, Room persistence, Gradle, ViewModels, repositories, and device-oriented workflows. It also connects to embedded and hardware-facing concepts through detector parsing and planned wired data ingestion."
      },
      {
        name: "Moro Maintenance & Asset Management System",
        tags: ["PHP", "MySQL", "Web"],
        evidence:
          "Moro shows web application development across PHP, SQL, HTML, CSS, and JavaScript. The project uses server-side sessions, PDO database access, environment configuration, backend authorization, and browser-based interface patterns."
      },
      {
        name: "Jibby JSON Library",
        tags: ["C++", "CMake", "Testing"],
        evidence:
          "Jibby demonstrates C++ library development with headers, implementation files, CMake builds, and regression tests. It shows competence working outside web/mobile environments in a compiled systems-language workflow."
      },
      {
        name: "ML_Project",
        tags: ["Python", "pandas", "scikit-learn"],
        evidence:
          "The machine-learning projects demonstrate Python data workflows using pandas, scikit-learn pipelines, preprocessing, train/test splits, model evaluation, and generated visual outputs. This demonstrates competence in analytical programming."
      }
    ]
  },
  {
    number: "03",
    title: "Implement data-driven solutions",
    projects: [
      {

        name: "Moro Maintenance & Asset Management System",
        tags: ["Relational Data", "History", "Scheduling"],
        evidence:
          "Moro is built around persistent data: homes, items, tasks, schedules, permissions, and maintenance history. The application uses stored records to calculate next due dates, show urgency, preserve service history, and support user decisions from organized data."
      },
      {
        name: "RadconApp / Radiation Survey Tablet System",
        tags: ["SQLite", "Survey Records", "Export"],
        evidence:
          "RadconApp stores maps, surveys, survey points, notes, contamination rows, airborne rows, and reviewer signatures in local Room tables. The data model supports offline survey capture, save/reload integrity, record review, and export workflows."
      },
      {
        name: "ML_Project",
        tags: ["Modeling", "Metrics", "Prediction"],
        evidence:
          "The ML projects transform structured datasets into predictive models by cleaning features, encoding categories, training estimators, and evaluating results with metrics such as accuracy, MAE, MSE, and R-squared. The solution depends on data preparation and evidence-based model performance."
      }
    ]
  },
  {
    number: "04",
    title: "Design and implement software solutions for multiple platforms, including mobile devices",
    projects: [
      {
        name: "RadconApp / Radiation Survey Tablet System",
        tags: ["Android", "Tablet", "Offline"],
        evidence:
          "RadconApp is designed specifically for mobile field use on an Android tablet. Its offline-first workflow, touch-based map interaction, local storage, and detector-reading integration address the constraints of mobile use in controlled environments."
      },
      {
        name: "Moro Maintenance & Asset Management System",
        tags: ["Web", "Responsive", "Server"],
        evidence:
          "Moro provides the same maintenance workflow through a browser-based application that can support desktops, laptops, tablets, and phones. Its web architecture separates server logic from the interface while keeping records accessible across device types."
      },
      {
        name: "AI_Music / Dust & Echo",
        tags: ["HTML", "CSS", "JavaScript"],
        evidence:
          "The Dust & Echo music-library site demonstrates a lightweight, browser-native presentation layer with organized audio, image, lyric, and description assets. It shows the ability to build a usable media interface without a heavyweight framework."
      }
    ]
  },
  {
    number: "05",
    title: "Design, develop, and maintain object-oriented software solutions utilizing inheritance, encapsulation, polymorphism, and abstraction",
    projects: [
      {
        name: "CSCS / Containment Safety Control System",
        tags: ["Interfaces", "Event Bus", "Factory"],
        evidence:
          "CSCS is a strong object-oriented example because it separates alarms, doors, ventilation, logging, data sources, announcements, UI, and core orchestration behind dedicated classes and interfaces. The factory and event bus designs reduce coupling and make subsystems easier to replace or extend."
      },
      {
        name: "RadconApp / Radiation Survey Tablet System",
        tags: ["MVVM", "Commands", "Repositories"],
        evidence:
          "RadconApp uses object-oriented and architectural patterns through ViewModels, repositories, DAOs, command classes, authentication managers, role guards, parsers, and export services. These boundaries encapsulate responsibilities and keep UI behavior separate from persistence and domain actions."
      },
      {
        name: "Jibby JSON Library",
        tags: ["Abstraction", "Iterators", "Types"],
        evidence:
          "Jibby models JSON values through a `Json` class, type checks, mutable and constant accessors, overloaded operators, iterators, parser/tokenizer components, serializer behavior, and custom exceptions. The API hides parsing and storage details behind a cleaner abstraction."
      },
      {
        name: "Payroll System",
        tags: ["Classes", "Encapsulation", "Search"],
        evidence:
          "The payroll project demonstrates class-based design through employee records, payroll management, private data members, controlled getters and setters, unique IDs, search behavior, raises, evaluations, and payroll totals."
      }
    ]
  },
  {
    number: "06",
    title: "Within software solutions, describe, implement, and analyze data-structure techniques",
    projects: [
      {
        name: "CSC382 Data Structures",
        tags: ["Lists", "Stacks", "Queues", "Trees"],
        evidence:
          "The CSC382 projects directly implement and analyze linked lists, stacks, queues, heap sort, hashing, and binary trees. They show how different structures affect traversal, insertion, removal, ordering, memory use, and access patterns."
      },
      {
        name: "Jibby JSON Library",
        tags: ["Objects", "Arrays", "Variant"],
        evidence:
          "Jibby uses structured representations for JSON objects, arrays, primitive values, iterators, and token streams. The project demonstrates choosing data structures based on whether information needs key-based lookup, ordered traversal, nested storage, or type-safe value handling."
      },
      {
        name: "CSCS / Containment Safety Control System",
        tags: ["Events", "Collections", "State"],
        evidence:
          "CSCS uses event objects, published message flow, plant state models, zone collections, and log records to coordinate simulated safety behavior. The event structure acts as both data representation and communication mechanism between decoupled subsystems."
      },
      {
        name: "RadconApp / Radiation Survey Tablet System",
        tags: ["Entities", "Draft State", "Tables"],
        evidence:
          "RadconApp uses Room entities, DAOs, draft survey state, map templates, survey records, point collections, and survey-specific tables. Its data structures support editable map interaction, persistence, save/reload equivalence, and record-specific review."
      }
    ]
  }
];

function Boards() {
  return (
    <main className="page-shell image-page boards-page" style={{ backgroundImage: `url(${desktopImage})` }}>
      <header className="page-hero boards-hero">
        <h1 className="page-title">B.S. Advancing Computer Science</h1>
        <p className="page-subtitle">
          Degree objectives connected to project evidence across mobile, web, data, systems, and software architecture work.
        </p>
      </header>

      <div className="boards-objectives">
        {objectives.map((objective) => (
          <section className="content-panel objective-panel" key={objective.number}>
            <div className="objective-heading">
              <span className="objective-number">{objective.number}</span>
              <h2>{objective.title}</h2>
            </div>

            <div className="evidence-grid">
              {objective.projects.map((project) => (
                <article className="evidence-card" key={`${objective.number}-${project.name}`}>
                  <h3>{project.name}</h3>
                  <div className="evidence-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p>{project.evidence}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default Boards;
