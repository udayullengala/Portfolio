const Experience = () => {
  const experiences = [
    {
      company: "redchillies.vfx",
      role: "Software Developer",
      period: "Nov 2024 – Present",
      description: "Currently developing and maintaining web apps in collaboration with a cross-functional team.",
    },
    {
      company: "ALTISSADVANCE TECH PVT LTD",
      role: "Full Stack Developer",
      period: "Aug 2022 – Nov 2024",
      description: "Led web app development, managed deployments, handled APIs and backend integrations.",
    },
    {
      company: "ALTISSADVANCE TECH PVT LTD",
      role: "Frontend Developer",
      period: "Apr 2022 – Aug 2022",
      description: "Specialized in building responsive UI and collaborating with designers.",
    },
  ]

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title font-mono text-center mb-5">Experience</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content cursor-pointer">
                    <h3 className="h5 font-mono fw-semibold mb-2">{exp.company}</h3>
                    <h4 className="h6 text-muted mb-2">{exp.role}</h4>
                    <p className="small font-mono text-muted mb-3">{exp.period}</p>
                    <p className="text-dark mb-0">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
