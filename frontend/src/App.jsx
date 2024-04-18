import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import CheckoutForm from "./components/Product/CheckoutForm";
import Proteina2 from "./components/Product/Proteina2";
import ProteinaAa from "../src/components/Product/ProteinaAa";
import Proteinas from "./components/Product/Proteinas";
import logo from "./assets/GymElite (1).png";
import "./login/LoginButton.css";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://tu-api-remota.com/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartTotal(cartTotal + product.price);
  };

  const removeFromCart = (price) => {
    const lastItem = cartItems[cartItems.length - 1];
    if (lastItem) {
      setCartItems(cartItems.slice(0, -1));
      setCartTotal(cartTotal - price);
    }
  };

  const checkout = () => {
    alert(`Total a pagar: ${cartTotal} MXN`);
  };

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
               
              </div>
            </div>
            {!isRegistered && (
               <button type="submit" className="loginButton" onClick={() => setShowModal(true)}>
                Crear cuenta
              </button>
            )}
            <div style={{ marginRight: '10px' }}></div> 
            <Link to="/mi-cesta" className="basketIcon">
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>
        </nav>
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proteinas" element={<Proteinas />} />
          
          
          <Route path="/proteinaAa" element={<ProteinaAa />} />
          <Route path="/proteina2" element={<Proteina2 />} />
          <Route path="/checkoutForm" element={<CheckoutForm />} />
       
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