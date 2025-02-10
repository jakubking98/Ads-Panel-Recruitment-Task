import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdvertisementPage from "./pages/AdvertisementPage";
import NewAdvertisementPage from "./pages/NewAdvertisementPage";
import Login from "./pages/Login";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/advertisements"
          element={
            <ProtectedRoute>
              <AdvertisementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/advertisements/new"
          element={
            <ProtectedRoute>
              <NewAdvertisementPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
