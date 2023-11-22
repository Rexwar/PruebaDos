import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProductModal'; // Importa el componente modal
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css';


function App() {
  const [products, setProducts] = useState([]);
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const editProduct = (id, updatedProduct) => {
    // Envía una solicitud PUT a la API para actualizar el producto
    fetch(`http://127.0.0.1:8000/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(() => {
        // Actualiza el estado de los productos
        setProducts(products.map(product => product.id === id ? updatedProduct : product));
      });
  };

  const deleteProduct = id => {
    // Envía una solicitud DELETE a la API para eliminar el producto
    fetch(`http://127.0.0.1:8000/api/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Actualiza el estado de los productos
        setProducts(products.filter(product => product.id !== id));
      });
  };

  const addProduct = (newProduct) => {
    // Envía una solicitud POST a la API para crear un nuevo producto
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(product => {
        setProducts([...products, product]);
        setShowModal(false); // Cierra el modal después de agregar
      });
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Lista de Productos</h2>
        {/* Tus datos personales aquí */}
      </header>
      <button onClick={() => setShowModal(true)} className="btn btn-success">Agregar Producto</button>
      <ProductList products={products} />
      {showModal && <ProductModal onSave={addProduct} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
