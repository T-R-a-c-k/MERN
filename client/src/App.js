import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Foundation from "./pages/Foundation";
import Careers from "./pages/Careers";
import Volunteer from "./pages/Volunteer";
import Research from "./pages/Research";
import Learning from "./pages/Learning";
import StaffPortal from "./pages/staffPortal";
import Footer from "./components/Footer";
import About from "./pages/About";
import CarePrograms from "./pages/CarePrograms";
import Contact from "./pages/Contact";
import Covid from "./pages/Covid";
import FAQ from "./pages/FAQ";
import PreparingCare from "./pages/PreparingCare";
import Staff from "./pages/Staff";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/research" element={<Research />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/staff_portal" element={<StaffPortal />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/care_programs" element={<CarePrograms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/preparing_care" element={<PreparingCare />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
