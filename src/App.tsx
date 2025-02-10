import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdvertisementPage from "./pages/AdvertisementPage";
import NewAdvertisementPage from "./pages/NewAdvertisementPage";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
