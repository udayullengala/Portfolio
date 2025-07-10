"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-5 bg-light overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title font-mono text-center mb-5">Get In Touch</h2>
          </div>
        </div>
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-control"
                  style={{ resize: "none" }}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
                <Send className="me-2" size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div className="text-center text-md-start mb-4">
              <h3 className="h4 font-mono fw-semibold mb-3">Connect With Me</h3>
              <p className="text-muted mb-4">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>

            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/udayullengala"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/uday-ullengala-bb2aa11b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:u.ullengala@gmail.com" className="social-link" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
