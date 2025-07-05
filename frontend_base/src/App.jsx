import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Chatbot from "./components/ChatBot"

function App() {
  return (
    <div className="min-vh-100 bg-white text-black">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
