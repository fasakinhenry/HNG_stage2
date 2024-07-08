// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white text-gray-700'>
      <div className='container mx-auto py-10  px-8'>
        {/* Subscribe Section */}
        <div className='flex flex-col items-center mb-8 md:flex-row md:justify-between'>
          <h2 className='text-xl font-bold mb-4 md:mb-0'>
            Fear of Missing Out?
          </h2>
          <form className='flex'>
            <input
              type='email'
              placeholder='Your Email Address'
              className='p-2 border border-gray-300 rounded-l-md focus:outline-none'
            />
            <button className='bg-primary text-white p-2 rounded-r-md'>
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Footer Links Section */}
        <div className='grid grid-cols-1 gap-6 text-center md:grid-cols-5 md:text-left'>
          <div className='md:col-span-1'>
            <h3 className='font-bold'>Get to us</h3>
            <address>
              Visit us at Shop F19/23, Road 3, Ikota Shopping Complex, VGC,
              Lekki-Epe Expressway, Lagos, Nigeria
              <br />
              +234 (0) 9064945445
            </address>
          </div>
          <div className='md:col-span-1'>
            <h3 className='font-bold'>Shop</h3>
            <ul>
              <li>Real Estate</li>
              <li>Furniture</li>
              <li>Decor</li>
              <li>Bedding</li>
              <li>Outdoor</li>
            </ul>
          </div>
          <div className='md:col-span-1'>
            <h3 className='font-bold'>Popular Brands</h3>
            <ul>
              <li>Ikea</li>
              <li>Ashley Furniture</li>
              <li>Crate & Bard</li>
              <li>Pottery Barn</li>
              <li>Havens</li>
              <li>Basset Furniture</li>
            </ul>
          </div>
          <div className='md:col-span-1'>
            <h3 className='font-bold'>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Community</li>
              <li>Blog</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className='md:col-span-1'>
            <h3 className='font-bold'>Social</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bg-white py-4'>
        <div className='container mx-auto text-center md:flex md:justify-between px-8'>
          <p>Lagos, Nigeria</p>
          <p>Local Time - 07:00 AM</p>
          <p>&copy; 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
