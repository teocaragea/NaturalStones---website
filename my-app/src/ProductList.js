import React from 'react';
import ProductCard from './ProductCard';

function ProductList({products}) {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-12">
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
