import React from 'react';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const ProductCard = ({ product }) => {
  const {
    name,
    location,
    price,
    oldPrice,
    discount,
    rating,
    reviews,
    imageUrl,
  } = product;

  // Function to render stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <StarIconSolid key={i} className='w-5 h-5 text-yellow-500' />
        ) : (
          <StarIconOutline key={i} className='w-5 h-5 text-yellow-500' />
        )
      );
    }
    return stars;
  };

  return (
    <div className='border rounded-lg overflow-hidden shadow-lg'>
      <img src={imageUrl} alt={name} className='w-full h-64 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-gray-600'>{location}</p>
        <div className='flex items-center my-2'>
          {renderStars()}
          <span className='ml-2 text-gray-600'>({reviews})</span>
        </div>
        <div className='flex items-center'>
          <span className='text-lg font-bold text-primary'>
            ₦{price}
          </span>
          {oldPrice && (
            <span className='ml-2 text-gray-600 line-through'>₦{oldPrice}</span>
          )}
          {discount && (
            <span className='ml-2 text-primary'>{discount}%</span>
          )}
        </div>
        <button className='mt-4 w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
