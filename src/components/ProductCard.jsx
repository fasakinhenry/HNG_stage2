import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className='border rounded-lg shadow-sm p-4 flex flex-col'>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-48 object-cover rounded-lg'
      />
      <h2 className='text-lg font-semibold mt-2'>{product.name}</h2>
      <p className='text-gray-500'>{product.location}</p>
      <p className='text-red-600 mt-2'>{product.price}</p>
      <button className='mt-auto bg-red-600 text-white py-2 px-4 rounded-lg'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
