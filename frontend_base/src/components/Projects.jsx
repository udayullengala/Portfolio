const Projects = () => {
  const projects = [
    {
      title: "MadHouse Media",
      description:
        "Influencer marketing platform with user authentication, campaign flow, and TDS/GST-calculated invoices.",
      tech: ["React JS", "Python", "Django", "PostgreSQL"],
    },
    {
      title: "Burdavan Homes",
      description:
        "Real estate listing site where users can rent, buy, or sell property with advanced search and filtering.",
      tech: ["React JS", "Python", "Django", "PostgreSQL"],
    },
  ]

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title font-mono text-center mb-5">Freelance Projects</h2>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="project-card cursor-pointer">
                <h3 className="h4 font-mono fw-semibold mb-3">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>
                <div>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
