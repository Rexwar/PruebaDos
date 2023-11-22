import React from 'react';
import Product from './Product';

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="row align-items-start">
      {products.map(product => (
        <Product key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProductList;
