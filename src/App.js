import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarHome } from "./components/NavBar/NavBarHome";
import { NavBarProfile } from "./components/NavBar/NavBarProfile";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBarHome />} />
        <Route path="/profile" element={<NavBarProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
