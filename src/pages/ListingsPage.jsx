import React from 'react';
import TopSection from '../components/TopSection';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ListingsPage = () => {
  return (
    <>
      <TopSection />
      <div className='container mx-auto px-8 py-10'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-6'>Products</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListingsPage;
