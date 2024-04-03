import "./Catalogue.css";
import { useFetch } from "./useFetch";
import { useState } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

function Catalogue() {
  const { data } = useFetch("https://localhost:8080/product");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bodyContainer">
      <div className="catalogueContainer">
        <section className="bannerContainer">
          <div className="banner">
            <div className=" banner.b">
                  <h2>¡GymElite: Esculpe tu cuerpo con nuestro enfoque en músculos y definición. Entrenamiento personalizado, clases grupales vibrantes y equipo de vanguardia. Únete hoy para una vida más fuerte y definida!</h2>
            </div>
          </div>
        </section>
      </div>

      <div className="searchContainer">
        <input
          className="searchInput"
          type="search"
          placeholder="Buscar..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="searchIcon">
          <LocalMallOutlinedIcon />
        </span>
      </div>

      <div className="products">
        {filteredData?.map((product) => (
          <div key={product.id}>
            <Link
              to={`/frontend/src/components/catalogue/Catalogue.jsx/&product.id}`}
            >
              <section className="containerImg">
                <img src={product.img} alt={product.name}></img>
              </section>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;

