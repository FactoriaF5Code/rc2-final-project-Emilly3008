import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProteinaAa.css';

function ProteinaAa() {
  const [productosEnCesta, setProductosEnCesta] = useState([]);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const agregarProductoACesta = (producto) => {
    // Verificar si ya hay 100 productos en la cesta
    if (productosEnCesta.length >= 100) {
      alert('No se pueden agregar más de 100 productos a la cesta');
      return;
    }

    setProductosEnCesta([...productosEnCesta, producto]);
    setMostrarMensaje(true);
    // Después de 3 segundos, ocultar el mensaje
    setTimeout(() => {
      setMostrarMensaje(false);
    }, 3000);
  };

  return (
    <div>
      <h2 className="proteinPage2">Proteina sabor chocolate</h2>
      <div className="imageContainer">
        <img src="/src/assets/1176-optimum-nutrition-100-whey-gold-standard-908g-v3.webp" alt="Proteina" className="productImage" />
      </div>
      <div className="descriptionContainer">
        <p className="description">Proporciona una fuente de proteínas completa y de alta calidad para favorecer el crecimiento muscular.</p>
      </div>
      <div className="buttonContainer">
        <button type="submit" onClick={() => agregarProductoACesta({
          nombre: 'Proteína sabor chocolate',
          imagen: '/src/assets/1176-optimum-nutrition-100-whey-gold-standard-908g-v3.webp',
          descripcion: 'Proporciona una fuente de proteínas completa y de alta calidad para favorecer el crecimiento muscular.'
        })} className="buttonProtein">
          Añadir a la cesta
        </button>
        <Link to="/comprar">
          <button type="submit" className="buttonProtein">
            Comprar
          </button>
        </Link>
      </div>
      {mostrarMensaje && <div className="mensaje">Producto añadido a la cesta</div>}
    </div>
  );
}

export default ProteinaAa;


