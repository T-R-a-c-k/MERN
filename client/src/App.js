import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/signUpPage";
import Home from "./pages/homePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
