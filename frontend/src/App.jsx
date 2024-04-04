import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import DetailsProduct from './components/details/DetailsProduct';
import './login/LoginButton.css';
import logo from './assets/GymElite (1).png';

function App() {
  const [showModal, setShowModal] = useState(false);

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
                <img src={logo} alt="Logo del Gimnasio" className="logo" />
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:productId" element={<DetailsProduct />} />
        </Routes>

        <button className="loginButton" onClick={() => setShowModal(true)}>Crear cuenta</button>
        {showModal && (
          <div className="modal">
            <div className="modalContent">
              <span className="closeButton" onClick={() => setShowModal(false)}>&times;</span>
              <h2>Iniciar Sesión</h2>
              <form>
                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Registrarse</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
