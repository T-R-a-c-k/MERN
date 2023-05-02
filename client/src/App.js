import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/sign_up";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/" element={<div>Something</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
