import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import DetailsProduct from './components/details/DetailsProduct'; 
import './login/LoginButton.css';
import logo from './assets/GymElite (1).png';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // Estado para verificar si el usuario está registrado

  // Función para manejar el envío del formulario de registro
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para registrar al usuario
    setIsRegistered(true); // Cambia el estado para indicar que el usuario está registrado
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
                <img src={logo} alt="./assets/GymElite (1).png" className="logo" />
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:productId" element={<DetailsProduct />} />
        </Routes>

        {/* Si el usuario no está registrado, muestra el botón para crear una cuenta */}
        {!isRegistered && (
          <div className="buttonContainer">
            <button className="loginButton" onClick={() => setShowModal(true)}>Crear cuenta</button>
            <Link to="/otra-pagina">
              <button className="buttonProducts">Productos</button> {/* Segundo botón */}
            </Link>
          </div>
        )}
        
        {showModal && (
          <div className="modal">
            <div className="modalContent">
              <span className="closeButton" onClick={() => setShowModal(false)}>&times;</span>
              
              <h2 className="loginTitle">Crear cuenta</h2>
              <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit" className="registerButton">Aceptar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;



