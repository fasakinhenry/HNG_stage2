import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListingsPage from './pages/ListingsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<ListingsPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
};

export default App;
