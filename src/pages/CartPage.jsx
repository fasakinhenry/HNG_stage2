import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import CheckoutPopup from '../components/CheckoutPopup';

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleBuyNow = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className='container mx-auto px-4 py-10'>
      <h2 className='text-2xl font-bold mb-6'>Shopping Cart</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          {cart.map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-between p-4 border-b'
            >
              <div className='flex items-center'>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className='w-20 h-20 object-cover'
                />
                <div className='ml-4'>
                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                  <p className='text-gray-600'>{item.location}</p>
                  <div className='flex items-center'>
                    <span className='text-lg font-bold text-primary'>
                      ₦{item.price}
                    </span>
                    {item.oldPrice && (
                      <span className='ml-2 text-gray-600 line-through'>
                        ₦{item.oldPrice}
                      </span>
                    )}
                    {item.discount && (
                      <span className='ml-2 text-primary'>
                        {item.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className='p-2 border'
                >
                  -
                </button>
                <span className='px-4'>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className='p-2 border'
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='ml-4 p-2 border text-red-500'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='p-4 border rounded-lg shadow-md'>
          <h3 className='text-xl font-bold mb-4'>Order details</h3>
          <div className='flex justify-between mb-2'>
            <span>Subtotal ({cart.length} items)</span>
            <span>₦{calculateTotal()}</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Shipping and handling fees</span>
            <span>₦0</span>
          </div>
          <div className='flex justify-between mb-4'>
            <span>Discount</span>
            <span>₦0</span>
          </div>
          <div className='flex justify-between font-bold'>
            <span>Grand Total</span>
            <span>₦{calculateTotal()}</span>
          </div>
          <button
            onClick={handleBuyNow}
            className='mt-4 w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark'
          >
            Buy Now
          </button>
        </div>
      </div>
      {/* You may also like section */}
      <div className='mt-10'>
        <h2 className='text-2xl font-bold mb-4'>You may also like</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.slice(1, 5).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className='border p-4 rounded-lg shadow-md'>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className='w-full h-48 object-cover mb-4'
                />
                <h3 className='text-lg font-bold mb-2'>{product.name}</h3>
                <p className='text-gray-700'>₦{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CheckoutPopup
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={calculateTotal()}
      />
    </div>
  );
};

export default CartPage;
