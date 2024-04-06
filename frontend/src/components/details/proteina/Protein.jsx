
import { Link } from 'react-router-dom';
import "../../catalogue/Catalogue.css";


function Proteinas() {
  // Datos de ejemplo de productos de proteínas
  const productosProteinas = [
    {
      id: 1,
      nombre: "Proteína 1",
      descripcion: "Incrementa tu masa muscular con nuestra proteína de suero de leche de alta calidad.",
      imagen: "/src/assets/1176-optimum-nutrition-100-whey-gold-standard-908g-v3.webp",
    },
    // Otros productos...
  ];

  return (
    <div>
      <h2 className="proteinPage">Proteínas</h2>
      <div className="productsContainer">
        {productosProteinas.map((producto) => (
          <div key={producto.id} className="product">
            {/* Enlace a la página de detalles con el ID del producto */}
            <Link to={`/details/${producto.id}`}>
              <img src={producto.imagen} alt={producto.nombre} />
            </Link>
            <p>{producto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proteinas;
