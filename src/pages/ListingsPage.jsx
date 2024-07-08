// src/pages/ListingsPage.jsx
import React from 'react';
import Layout from '../layouts/Layout';
import TopSection from '../components/TopSection';
import ProductCard from '../components/ProductCard';

const ListingsPage = () => {
  // Mock data for products
  const products = [
    { id: 1, name: "Bold Red Jacket", location: "From Austria", price: 27000, oldPrice: 30000, discount: 15, imageUrl: "path/to/image1.jpg" },
    { id: 2, name: "Dinner Gown", location: "From Lagos", price: 33000, oldPrice: 40000, discount: 5, imageUrl: "path/to/image2.jpg" },
    // Add more products here...
  ];

  return (
    <Layout>
      <TopSection />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ListingsPage;
