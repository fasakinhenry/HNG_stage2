// src/components/Navbar.jsx
import React from 'react';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-primary text-2xl font-bold'>Find's Store</div>
        </div>
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Search all Products'
            className='px-4 py-2 border rounded-full focus:outline-none'
          />
          <MagnifyingGlassIcon className='h-6 w-6 text-gray-600' />
        </div>
        <div className='flex items-center space-x-4'>
          <HeartIcon className='h-6 w-6 text-gray-600' />
          <ShoppingCartIcon className='h-6 w-6 text-gray-600' />
          <UserIcon className='h-6 w-6 text-gray-600' />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
