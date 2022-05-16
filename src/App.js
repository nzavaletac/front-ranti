import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarProfile } from "./components/NavBar/NavBarProfile";
import { DetailPage } from "./pages/DetailPage";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<NavBarProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products/:productId" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
