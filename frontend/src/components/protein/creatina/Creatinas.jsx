
import { Link } from "react-router-dom";
import './Creatinas.css';

function Creatinas() {
  return (
    <div>
     <h2 className="proteinPage">Creatina</h2>
      <div className="productsCreatinaContainer">
        <div className="productProtein">
          <div className="productItem1">
            <Link to="/creatinamonohidrato/">
              <img src="/src/assets/71iTMePRR6L._AC_SY879_.jpg"
               alt="Proteina"
               className="creatinaImg" />

            </Link>
            <p className="message">Creatina monohidrato</p>
          </div>
          <div className="productDescription">
            <p className="price">19.99€</p> 
          </div>
        </div>
        <div className="product0">
          <div className="productItem1">
            <Link to="/creatineBoom/">
              <img src="/src/assets/151jmaV40ugL._AC_SX679_1.jpg"
               alt="Proteina"
               className="creatinaImg" /> 
            </Link>
            <p className="message">Creatina BOOM</p>
          </div>
          <div className="productDescription">
            <p className="price">29.99€</p> 
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Creatinas;

