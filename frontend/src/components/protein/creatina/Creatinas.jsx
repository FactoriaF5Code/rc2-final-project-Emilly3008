
import { Link } from "react-router-dom";
import './Creatinas.css';

function Creatinas() {
  return (
    <div>
     <h2 className="creatinaPage">Creatina</h2>
      <div className="productsCreatinaContainer">
        <div className="productCreatina">
          <div className="productItem1">
            <Link to="/creatinamonohidrato/">
              <img src="/src/assets/71iTMePRR6L._AC_SY879_.jpg"
               alt="Creatina"
               className="creatinaImg" />

            </Link>
            <p className="message">Creatina monohidrato</p>
          </div>
          <div className="productDescriptionCreatina">
            <p className="priceCreatina">19.99€</p> 
          </div>
        </div>
        <div className="product0">
          <div className="productItem1">
            <Link to="/creatineBoom/">
              <img src="/src/assets/151jmaV40ugL._AC_SX679_1.jpg"
               alt="Creatina"
               className="creatinaImg" /> 
            </Link>
            <p className="message">Creatina BOOM de sabores</p>
          </div>
          <div className="productDescriptionCreatina">
            <p className="priceCreatina2">29.99€</p> 
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Creatinas;

