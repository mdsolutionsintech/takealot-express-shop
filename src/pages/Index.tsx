
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import OrderTracking from '../components/OrderTracking';
import { CartProvider } from '../contexts/CartContext';

const Index = () => {
  const [activeView, setActiveView] = useState('home');

  const renderView = () => {
    switch (activeView) {
      case 'cart':
        return <Cart />;
      case 'tracking':
        return <OrderTracking />;
      default:
        return (
          <>
            <Hero />
            <CategoryGrid />
            <ProductGrid />
          </>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header activeView={activeView} setActiveView={setActiveView} />
        <main className="pt-16">
          {renderView()}
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;
