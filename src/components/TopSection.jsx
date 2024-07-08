import React from 'react';

const TopSection = () => {
  return (
    <section className='relative bg-cover bg-center h-96 landing-image'>
      <div className='container mx-auto px-8 py-16 h-full flex items-center'>
        <div className='text-left'>
          <h1 className='text-5xl font-bold text-primary mb-4'>
            Stand Out in Bold Red Jacket
          </h1>
          <p className='text-lg text-gray-700 mb-8'>
            Elevate Your Style with Our Bold Red Jacket
          </p>
          <button className='px-6 py-3 bg-primary text-white'>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
