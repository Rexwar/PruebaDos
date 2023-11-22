import React, { useState } from 'react';

function ProductModal({ onSave, onClose }) {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newProduct);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" value={newProduct.name} onChange={handleChange} />
        <input type="number" name="price" placeholder="Precio" value={newProduct.price} onChange={handleChange} />
        <input type="text" name="image" placeholder="URL de la imagen" value={newProduct.image} onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Guardar</button>
        <button onClick={onClose} className="btn btn-secondary">Cerrar</button>
      </form>
    </div>
  );
}

export default ProductModal;
