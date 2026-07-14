import React from 'react';
import programmingImage from "../assets/programming.jpg";
import "../css/pages/home.css";

function Home() {
    return (
        <main className="page-shell image-page" style={{ backgroundImage: `url(${programmingImage})` }}>
            <header className="page-hero">
                <h1 className="page-title">Ethan Hartman</h1>
                <p className="page-subtitle">
                    Software developer focused on full-stack development, embedded programming, and data analytics.
                </p>
            </header>

            <section className="content-panel">
                <h2> About Me </h2>
                <p> 
                Hi! I'm Ethan Hartman, a passionate software developer in training, 
                specializing in full-stack development, embedded programming, and data analytics.
                <br/><br/>
                Currently serving as an enlisted sailor in the U.S. Navy, I have spent the last 
                12 years operating, maintaining, and training students on submarine nuclear power plants. 
                This experience has given me an in-depth understanding of current and emerging 
                technologies in the field.
                <br/><br/>
                My vision is to merge my expertise in software development with my background 
                in nuclear operations to design and build innovative solutions for chemical and 
                radiological technicians. My goal is to enhance efficiency, improve equipment, 
                and optimize work practices, allowing technicians to focus on more critical 
                aspects of their work and life.  
                </p>
            </section>

            <section className="content-panel">
                <h2>Experience</h2>
                <div className="experience-grid">
                    <article>
                        <h3>U.S. Navy</h3>
                        <p>
                            12 years of experience supporting high-reliability nuclear power generation
                            and engineering systems in regulated operational environments. Experience
                            includes process control, operational testing, troubleshooting, quality
                            assurance, technical instruction, and leading engineering watch teams.
                        </p>
                    </article>
                    <article>
                        <h3>Projects</h3>
                        <p>
                            Hands-on development across embedded systems, mobile apps, database design,
                            data analytics, automation, and backend systems. Project work includes
                            radiation data collection and mapping, maintenance and asset management,
                            command-line workflow automation, and finance tracking tools.
                        </p>
                    </article>
                    <article>
                        <h3>School</h3>
                        <p>
                            Completing a Bachelor of Science in Computer Science, expected July 2026.
                            Academic work includes software development, object-oriented programming,
                            data structures, SQL, C++, C#, Python, data-driven solutions, and
                            multi-platform application design.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Home;
