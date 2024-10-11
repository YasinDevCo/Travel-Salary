import { Navigate, Route, Routes } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import SearchTravelPage from "../pages/SearchTravelPage";
import TravelsPage from "../pages/TravelsPage";
import ServicesPage from "../pages/ServicesPage";

function Router({ showLoginPage, setShowLoginPage }) {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />
      <Route
        index
        path="/home"
        element={
          <HomePage
            showLoginPage={showLoginPage}
            setShowLoginPage={setShowLoginPage}
          />
        }
      />
      <Route path="/home/admin" element={<AdminPage />} />
      <Route path="/home/travels" element={<TravelsPage />} />
      <Route path="/home/services" element={<ServicesPage />} />
      <Route path="/home/dashboard" element={<DashboardPage />} />
      <Route path="/home/searchTravel" element={<SearchTravelPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
