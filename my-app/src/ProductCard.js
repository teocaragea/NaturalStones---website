import React from 'react';
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail`, { state: { product: product } });
  };

  return (
    <div className="card h-100 d-flex justify-content-between" key={product.id} id="card">
      <img src={require(`./assets/img/bratari/Bratara${product.id}.jpeg`)} alt={product.name} className="img-fluid" />
      <div className="card-body overflow-hidden">
        <h3 className="card-text">{product.name}</h3>
        <h4 className="mb-0">Preț: {product.price} lei</h4>
      </div>
      <a className="card-footer btn-get-started scrollto" onClick={handleClick}>Mai multe detalii</a>
    </div>
  );
}

export default ProductCard;
