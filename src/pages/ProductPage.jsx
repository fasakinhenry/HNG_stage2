// src/pages/ProductPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.title} className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-red-600 mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-bg-color-primary text-white p-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
      {/* You may also like section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(1, 5).map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="border p-4 rounded-lg shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
