import "./scss/index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";

function App() {
  return (
    <div className="App dark-section">
      <Routes>
        <Route path="/Portfolio/" element={<Main />} />
      </Routes>
      
    </div>
  );
}

export default App;
