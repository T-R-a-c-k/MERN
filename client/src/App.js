import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Foundation from "./pages/Foundation";
import Careers from "./pages/Careers";
import Volunteer from "./pages/Volunteer";
import Research from "./pages/Research";
import Learning from "./pages/Learning";
import PatientPortal from "./pages/patientPortal";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
