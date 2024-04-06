import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/home/HomePage";
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
                <img
                  src={logo}
                  alt="./assets/GymElite (1).png"
                  className="logo"
                />
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
              <button
                className="loginButton"
                onClick={() => setShowModal(true)}
              >
                Crear cuenta
              </button>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proteinas" element={<Proteinas />} />
          <Route path="/creatinas" element={<Creatinas />} />
          <Route path="/proteinaAa" element={<ProteinaAa />} />
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

function Proteinas() {
  return (
    <div>
      <h2 className="proteinPage">Proteínas</h2>
      <div className="productsContainer">
        <div className="product0">
          <div className="imageContainer">
            <Link to="/proteinaAa/">
              <img
                src="/src/assets/1176-optimum-nutrition-100-whey-gold-standard-908g-v3.webp"
                alt=""
              />
            </Link>
            <div className="proteina1"></div>
          </div>
          <p>Aqui tienes la mejor proteina natural</p>
        </div>
        {/* Añade más productos con imágenes y descripciones aquí */}
      </div>
    </div>
  );
}

function Creatinas() {
  return <h2>Creatinas</h2>;
}


function ProteinaAa() {
  return (
    <div>
      <h2>Proteina Natural</h2>
      <div className="protein1">
        <button type="submit" className="buttonProtein">
          Añadir a la cesta
        </button>
        <button type="submit" className="buttonProtein">
          Comprar
        </button>
        
      </div>
    </div>
  );
}

export default App;
