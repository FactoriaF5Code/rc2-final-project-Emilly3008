import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import DetailsProduct from "./components/details/DetailsProduct";
import "./login/LoginButton.css";
import logo from  "./assets/pesa 1.png";

function App() {
  return (
    <Router>
      <div>
        {/* Barra de menú */}
        <nav className="menu">
          <div className="leftSection">
            <Link to="/">
              <span className="siteName">GymElite</span>
            </Link>
            <div className="logoContainer">
              <Link to="/">
                <img src={logo} alt="Logo del Gimnasio" className="logo" />
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:productId" element={<DetailsProduct />} />
        </Routes>

        {/* Botón para ir a otra página */}
        <Link to="/otra-pagina">
          <button className="loginButton">Crear cuenta</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;




