import { Link } from "react-router-dom";
import "./Proteinas.css";


function Proteinas() {
  return (
    <div>
     <h2 className="proteinPage">Proteínas</h2>
      <div className="productsContainer">
        <div className="productProtein">
          <div className="productItem">
            <Link to="/proteinaAa/">
              <img src="/src/assets/1176-optimum-nutrition-100-whey-gold-standard-908g-v3.webp"
               alt="Proteina"
               className="productPtroteinImg" />
            </Link>
            <p className="message">Sabor cereal milk.</p>
          </div>
          <div className="productDescription">
            <p className="price">24.99€</p> 
          </div>
        </div>
        <div className="product0">
          <div className="productItem">
            <Link to="/Proteina2/">
              <img src="/src/assets/250-optimum-nutrition-100-whey-gold-standard-4-54kg-v4.webp" 
                alt="Proteina"
                className="productPtroteinImg"/>
            </Link>
            <p className="message">Sabor rich chocolate.</p>
          </div>
          <div className="productDescription">
            <p className="price2">19.99€</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proteinas;

