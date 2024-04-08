

import React, { useState } from 'react';
import './Cesta.css';

function Cesta() {
  const [productosEnCesta, setProductosEnCesta] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', cantidad: 0 });

  const agregarProducto = () => {
    setProductosEnCesta([...productosEnCesta, nuevoProducto]);
    setNuevoProducto({ nombre: '', cantidad: 0 });
  };

  const quitarProducto = (indice) => {
    const nuevaCesta = [...productosEnCesta];
    nuevaCesta.splice(indice, 1);
    setProductosEnCesta(nuevaCesta);
  };

  const actualizarCantidad = (indice, nuevaCantidad) => {
    const nuevaCesta = [...productosEnCesta];
    nuevaCesta[indice].cantidad = nuevaCantidad;
    setProductosEnCesta(nuevaCesta);
  };

  return (
    <div>
      <h2 className="proteinPage">Proteínas</h2>
      <div className="productos-container">
        <h3>Mi Carrito</h3>
        <ul>
          {productosEnCesta.map((producto, index) => (
            <li key={index}>
              <span>{producto.nombre} - Cantidad: {producto.cantidad}</span>
              <button onClick={() => quitarProducto(index)}>Quitar</button>
              <input
                type="number"
                value={producto.cantidad}
                onChange={(e) => actualizarCantidad(index, parseInt(e.target.value))}
              />
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Nombre del producto"
            value={nuevoProducto.nombre}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={nuevoProducto.cantidad}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, cantidad: parseInt(e.target.value) })}
          />
          <button onClick={agregarProducto}>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default Cesta;



