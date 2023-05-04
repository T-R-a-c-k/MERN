import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import SignUp from "./pages/signUpPage";
import Home from "./pages/homePage";
import Foundation from "./pages/foundation";
import Careers from "./pages/careers";
import Volunteer from "./pages/volunteer";
import Research from "./pages/research";
import Learning from "./pages/learning";
import PatientPortal from "./pages/patientPortal";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/research" element={<Research />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/patient_portal" element={<PatientPortal />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
