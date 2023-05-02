import Button from "react-bootstrap/Button";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div>Hi</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
