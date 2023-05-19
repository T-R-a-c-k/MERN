import React, { useContext } from "react";
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
import StaffPortal from "./pages/StaffPortal";
import Footer from "./components/Footer";
import About from "./pages/About";
import CarePrograms from "./pages/CarePrograms";
import Contact from "./pages/Contact";
import Covid from "./pages/Covid";
import FAQ from "./pages/FAQ";
import PreparingCare from "./pages/PreparingCare";
import Staff from "./pages/Staff";
import MyPortal from "./pages/MyPortal";
import AdminDashboard from "./pages/AdminDashboard";
import { UserContext } from "./context/UserProvider";
import AdminPrescriptionPage from "./pages/AdminPrescriptionPage";
import AdminDepartmentPage from "./pages/AdminDepartmentPage";
import AdminPatientPage from "./pages/AdminPatientPage";
import AdminVisitationPage from "./pages/AdminVisitationPage";
import AdminStaffPage from "./pages/AdminStaffPage";

function AppRoutes() {
  const { userInstance, tokenInstance } = useContext(UserContext);
  return (
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
        {userInstance && tokenInstance && userInstance.role !== "admin" && (
          <Route path="/my_portal" element={<MyPortal />} />
        )}
        {userInstance && tokenInstance && userInstance.role === "admin" && (
          <Route path="admin">
            <Route index element={<AdminDashboard />} />
            <Route path="prescription" element={<AdminPrescriptionPage />} />
            <Route path="department" element={<AdminDepartmentPage />} />
            <Route path="visitation" element={<AdminVisitationPage />} />
            <Route path="patient" element={<AdminPatientPage />} />
            <Route path="staff" element={<AdminStaffPage />} />
          </Route>
        )}
      </Routes>

      <Footer />
    </Router>
  );
}

export default AppRoutes;
