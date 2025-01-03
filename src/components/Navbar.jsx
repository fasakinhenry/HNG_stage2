import React from 'react';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import ProfilePicture from '../assets/profile2.jpg';

const Navbar = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-red-500 text-2xl font-bold'>Find's Store</div>
        </div>
        <div className='hidden md:flex items-center space-x-4 flex-1 mx-4'>
          <input
            type='text'
            placeholder='Search all Products'
            className='w-full px-4 py-2 border rounded-md focus:outline-none'
          />
          <MagnifyingGlassIcon className='h-6 w-6 text-gray-600' />
        </div>
        <div className='flex items-center space-x-4'>
          <HeartIcon className='h-6 w-6 text-purple-600' />
          <ShoppingCartIcon className='h-6 w-6 text-purple-600' />
          <UserIcon className='h-6 w-6 text-purple-600' />
          <img
            src={ProfilePicture}
            alt='Profile'
            className='h-8 w-8 rounded-full'
          />
        </div>
      </div>
      <div className='md:hidden px-4 py-2'>
        <input
          type='text'
          placeholder='Search all Products'
          className='w-full px-4 py-2 border rounded-md focus:outline-none'
        />
      </div>
    </header>
  );
};

export default Navbar;
