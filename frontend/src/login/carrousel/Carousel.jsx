import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Carousel.css"; // Asegúrate de tener los estilos CSS del carrusel

const images = [
  "imagen1.jpg",
  "imagen2.jpg",
  "imagen3.jpg",
  // Agrega más imágenes según sea necesario
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia este valor para ajustar la velocidad del carrusel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <Link to="/" key={index} className={index === currentIndex ? "active" : ""}>
            <img src={image} alt={`Image ${index + 1}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
