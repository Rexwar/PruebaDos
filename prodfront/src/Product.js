import React from 'react';

function Product({ product }) {
  return (
    <div className="card col align-items-center">
      <img src={product.image} alt={product.name} />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="descripcion">{product.description}</p>
      {/* Botones para editar y eliminar */}
    </div>
  );
}

export default Product;
