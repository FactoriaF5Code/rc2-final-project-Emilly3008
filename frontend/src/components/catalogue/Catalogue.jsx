
import "./Catalogue.css";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

function Catalogue() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategoryClick = (category) => {
    console.log("Categoría clickeada:", category);
  };

  return (
    
    <div className="bodyContainer">
      <button className="searchButton" onClick={() => console.log("Botón clickeado")}></button>

      <div className="catalogueContainer">
        <section className="bannerContainer">
          <div className="banner">
            <div className="bannerContent">
              <h2>¡GymElite: Esculpe tu cuerpo con nuestro enfoque en músculos y definición. Entrenamiento personalizado, clases grupales vibrantes y equipo de vanguardia. Únete hoy para una vida más fuerte y definida!</h2>
            </div>
          </div>
        </section>

        <div className="searchContainer">
          <input
            className="searchInput"
            type="search"
            placeholder="Buscar..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="searchIcon" onClick={toggleDropdown}>
            <SearchIcon />
          </span>
         
        </div>

        <div className="products">
          {/* Renderizar productos aquí */}
        </div>
      </div>
    </div>
  );
}


export default Catalogue;