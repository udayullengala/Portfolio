const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        // "jQuery",
        "React JS",
        // "TypeScript",
        "Next.js",
        "Bootstrap",
        // "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "Node JS", "RESTful APIs"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"],
    },
  ]

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title font-mono text-center mb-5">Skills</h2>
          </div>
        </div>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="mb-4">
                <h3 className="h4 font-mono fw-semibold border-bottom border-dark border-2 pb-2 mb-4">
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-card">
                      <span className="text-dark">{skill}</span>
                    </div>
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

export default Skills
