import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Admin } from "./admin/pages/Admin";
import { DetailPage } from "./pages/DetailPage";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";


function App() {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    return !token ? <Navigate to="/login" /> : children;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products/:productId" element={<DetailPage />} />
        <Route
          path="/account/*"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
