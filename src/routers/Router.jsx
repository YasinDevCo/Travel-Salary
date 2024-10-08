import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import SearchTravelPage from "../pages/SearchTravelPage";

function Router({ showLoginPage, setShowLoginPage }) {
  return (
    <Routes>
      {/* <Route index element={<Navigate to="/" replace />} /> */}
      <Route
        path="/"
        element={
          <HomePage
            showLoginPage={showLoginPage}
            setShowLoginPage={setShowLoginPage}
          />
        }
      />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/searchTravel" element={<SearchTravelPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
