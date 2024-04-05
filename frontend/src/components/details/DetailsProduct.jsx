import "./DetailsProduct.css";
import { useFetch } from "../catalogue/useFetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailsProduct() {
  const { productId } = useParams(); 
  const { data } = useFetch(`http://localhost:8080/product/${productId}`);
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(data);
  }, [data]);

  if (!product) return null;

  return (
    <div className="containerBg">
      <div className="bodyContainer">
        <div className="searchContainer">
          <input
            className="searchInput"
            type="search"
            placeholder="Buscar..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        
        </div>
        <div className="catalogueContainer">
          <section className="bannerContainer">
            <div className="banner">
              <div className="bannerBg">
                <h2>¡Empieza tu entrenamiento hoy mismo!</h2>
              </div>
            </div>
            <div key={product.id} className="details">
              <div className="detailsImg">
                <img src={product.img} alt={product.name} />
              </div>
          
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;

