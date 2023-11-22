import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Cargar productos desde la API
    fetch('http://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // Aquí irían las funciones para editar, eliminar y agregar productos

  return (
    <div className="container">
      <header>
        <h2>Lista de Productos</h2>
        {/* Tus datos personales aquí */}
      </header>
      <ProductList products={products} />
      {/* Botón para agregar un nuevo producto */}
    </div>
  );
}

export default App;
