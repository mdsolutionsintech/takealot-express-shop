
import React from 'react';
import { Smartphone, Laptop, Home, Shirt, Baby, Car, GamepadIcon, BookOpen } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Smartphone, color: 'bg-blue-500', items: '45k+' },
  { name: 'Computers', icon: Laptop, color: 'bg-purple-500', items: '12k+' },
  { name: 'Home & Garden', icon: Home, color: 'bg-green-500', items: '89k+' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-500', items: '156k+' },
  { name: 'Baby & Kids', icon: Baby, color: 'bg-yellow-500', items: '34k+' },
  { name: 'Auto & DIY', icon: Car, color: 'bg-red-500', items: '67k+' },
  { name: 'Gaming', icon: GamepadIcon, color: 'bg-indigo-500', items: '23k+' },
  { name: 'Books', icon: BookOpen, color: 'bg-orange-500', items: '78k+' },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg">Discover millions of products across all categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="card-hover bg-gray-50 rounded-xl p-6 text-center border">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.items} items</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
