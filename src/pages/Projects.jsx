import React from "react";

function Projects() {
  return (
    <div style={styles.container}>
      <h1>Projects</h1>
      <section style={styles.section}>
                <h2> Featured Projects </h2> 
                <ul>
                    <li> Radiation Monitoring Device & Mobile App </li>
                    <li> WonderTales: Educational Web App for Kids </li>
                    <li> Various multiplayer dice and card games </li>
                    <li> AI-Driven Financial Market Analysis </li>
                    <li> React Native Party Playlist App </li>
                </ul>
        </section>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  section: {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "600px",
    textAlign: "left",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px"
}
};

export default Projects;