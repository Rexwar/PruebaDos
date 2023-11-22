import React from 'react';

function Product({ product, onEdit, onDelete }) {
  const handleEdit = () => {
    // Aquí podrías abrir un formulario de edición o algo similar
    // Por ahora, solo usaremos un objeto de ejemplo para la actualización
    const updatedProduct = { ...product, name: 'Nuevo Nombre' };
    onEdit(product.id, updatedProduct);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="card col align-items-center">
      <img src={product.image} alt={product.name} />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="descripcion">{product.description}</p>
      <button onClick={handleEdit} className="btn btn-primary">Editar</button>
      <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
    </div>
  );
}

export default Product;
