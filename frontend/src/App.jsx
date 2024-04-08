
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomePage from "./components/home/HomePage";
import Proteinas from "./components/protein/Proteinas";
import Creatinas from "./components/protein/creatina/Creatina";
import ProteinaAa from "./components/protein/ProteinaAa";
import Cesta from "./login/cesta/Cesta";
import "./login/LoginButton.css";
import logo from "./assets/GymElite (1).png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
  };

  return (
    <Router>
      <div>
        <nav className="menu">
          <div className="leftSection">
            <Link to="/">
              <span className="siteName"></span>
            </Link>
            <div className="logoContainer">
              <Link to="/">
                <img src={logo} alt="GymElite" className="logo" />
              </Link>
            </div>
          </div>
  
          <div className="rightSection">
            <div className="dropdown">
              <button className="dropdown-btn">Productos</button>
              <div className="dropdown-content">
                <Link to="/proteinas">Proteínas</Link>
                <Link to="/creatinas">Creatinas</Link>
              </div>
            </div>
            {!isRegistered && (
              <button className="loginButton" onClick={() => setShowModal(true)}>
                Crear cuenta
              </button>
            )}
            <div style={{ marginRight: '10px' }}></div> {/* Espacio entre botones */}
            <Link to="/mi-cesta" className="basketIcon">
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>
        </nav>
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proteinas" element={<Proteinas />} />
          <Route path="/creatinas" element={<Creatinas />} />
          <Route path="/proteinaAa" element={<ProteinaAa />} />
          <Route path="/mi-cesta" element={<Cesta />} />
        </Routes>
  
        {showModal && (
          <div className="modal">
            <div className="modalContent">
              <span className="closeButton" onClick={() => setShowModal(false)}>
                &times;
              </span>
  
              <h2 className="loginTitle">Crear cuenta</h2>
              <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" required />
  
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />
  
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
  
                <button type="submit" className="registerButton">
                  Aceptar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

