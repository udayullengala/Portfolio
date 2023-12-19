import Home from "@src/views/Home"
import "./scss/index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import About from "./views/About";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App dark-section">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
