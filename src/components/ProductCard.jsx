import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const {
    id,
    title,
    location,
    price,
    oldPrice,
    discount,
    rating,
    reviews,
    image,
  } = product;

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

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click event
    addToCart(product);
    navigate('/cart');
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className='border rounded-lg overflow-hidden shadow-lg cursor-pointer'
      onClick={handleCardClick}
    >
      <img src={image} alt={title} className='w-full h-64 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-gray-600'>{location}</p>
        <div className='flex items-center my-2'>
          {renderStars()}
          <span className='ml-2 text-gray-600'>({reviews})</span>
        </div>
        <div className='flex items-center'>
          <span className='text-lg font-bold text-primary'>₦{price}</span>
          {oldPrice && (
            <span className='ml-2 text-gray-600 line-through'>₦{oldPrice}</span>
          )}
          {discount && <span className='ml-2 text-primary'>{discount}%</span>}
        </div>
        <button
          onClick={handleAddToCart}
          className='mt-4 w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
