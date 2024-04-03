import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import DetailsProduct from "./components/details/DetailsProduct";
import "./login/LoginButton.css";

function App() {
  return (
    <Router>
      <div>
        {/* Barra de menú */}
        <nav className="menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Proteinas</Link></li>
            <li><Link to="/services"></Link></li>
            <li><Link to="/contact"></Link></li>
          </ul>
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



