import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => {
        setProducts(products);
      })
      .catch(error => console.error('Error al obtener productos:', error));
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.imageUrl} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
