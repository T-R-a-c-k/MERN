import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/signUpPage";
import Home from "./pages/homePage";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foundation" element={<Home />} />
          <Route path="/careers" element={<Home />} />
          <Route path="/volunteer" element={<Home />} />
          <Route path="/research" element={<Home />} />
          <Route path="/learning" element={<Home />} />
          <Route path="/patient_connect" element={<Home />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
