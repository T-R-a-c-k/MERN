import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import Foundation from "../pages/Foundation";
import Careers from "../pages/Careers";
import Volunteer from "../pages/Volunteer";
import Research from "../pages/Research";
import Learning from "../pages/Learning";
import StaffPortal from "../pages/StaffPortal";
import Footer from "../components/Footer";
import About from "../pages/About";
import CarePrograms from "../pages/CarePrograms";
import Contact from "../pages/Contact";
import Covid from "../pages/Covid";
import FAQ from "../pages/FAQ";
import PreparingCare from "../pages/PreparingCare";
import Staff from "../pages/Staff";
import MyPortal from "../pages/MyPortal";
import AdminDashboard from "../pages/AdminDashboard";
import { UserContext } from "../context/UserProvider";
import AdminPrescriptionPage from "../pages/AdminPrescriptionPage";
import AdminDepartmentPage from "../pages/AdminDepartmentPage";
import AdminPatientPage from "../pages/AdminPatientPage";
import AdminVisitationPage from "../pages/AdminVisitationPage";
import AdminStaffPage from "../pages/AdminStaffPage";
import SelectedItem from "../pages/SelectedItemPage";
import DepartmentCreate from "../pages/DeparmentCreate";
import DepartmentUpdate from "../pages/DepartmentUpdate";

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
            <Route path="prescription">
              <Route index element={<AdminPrescriptionPage />} />
              <Route path=":id">
                <Route index element={<SelectedItem />} />
                <Route path="create" element={<Staff />} />
                <Route path="delete" element={<FAQ />} />
                <Route path="update" element={<Contact />} />
              </Route>
            </Route>
            <Route path="department">
              <Route index element={<AdminDepartmentPage />} />
              <Route path=":id">
                <Route index element={<SelectedItem />} />
                <Route path="create" element={<DepartmentCreate />} />
                <Route path="delete" element={<FAQ />} />
                <Route path="update" element={<DepartmentUpdate />} />
              </Route>
            </Route>
            <Route path="visitation">
              <Route index element={<AdminVisitationPage />} />
              <Route path=":id">
                <Route index element={<SelectedItem />} />
                <Route path="create" element={<Staff />} />
                <Route path="delete" element={<FAQ />} />
                <Route path="update" element={<Contact />} />
              </Route>
            </Route>
            <Route path="patient">
              <Route index element={<AdminPatientPage />} />
              <Route path=":id">
                <Route index element={<SelectedItem />} />
                <Route path="create" element={<Staff />} />
                <Route path="delete" element={<FAQ />} />
                <Route path="update" element={<Contact />} />
              </Route>
            </Route>
            <Route path="staff">
              <Route index element={<AdminStaffPage />} />
              <Route path=":id">
                <Route index element={<SelectedItem />} />
                <Route path="create" element={<Staff />} />
                <Route path="delete" element={<FAQ />} />
                <Route path="update" element={<Contact />} />
              </Route>
            </Route>
          </Route>
        )}
      </Routes>

      <Footer />
    </Router>
  );
}

export default AppRoutes;
