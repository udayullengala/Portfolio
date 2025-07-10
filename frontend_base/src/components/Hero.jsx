import { ArrowDown, Download } from "lucide-react"
import resume from '../assets/images/Uday_FullStack_Developer_Resume.pdf'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero-section px-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <div className="mb-4">
              <h1 className="hero-title font-mono mb-3">Uday Ullengala</h1>
              <h2 className="hero-subtitle mb-4">Full Stack Developer</h2>
            </div>

            <p className="hero-tagline mb-5 mx-auto" style={{ maxWidth: "42rem" }}>
              Crafting reliable, modern web experiences from frontend to backend.
            </p>

            <div className="pt-3">
              <a download href={resume} className="btn btn-primary btn-lg d-inline-flex align-items-center">
                <Download className="me-2" size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="position-absolute bottom-0 start-50 mb-4 btn btn-link text-dark bounce-animation"
        style={{ border: "none", background: "none" }}
        aria-label="Scroll to next section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}

export default Hero
