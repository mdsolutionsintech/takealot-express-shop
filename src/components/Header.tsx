
import React, { useContext } from 'react';
import { Search, ShoppingCart, Package, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartContext } from '../contexts/CartContext';

interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Header = ({ activeView, setActiveView }: HeaderProps) => {
  const { items } = useContext(CartContext);
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setActiveView('home')}
          >
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Takealot</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for products..." 
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button
              variant={activeView === 'tracking' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveView('tracking')}
              className="hidden md:flex items-center space-x-2"
            >
              <Package className="w-4 h-4" />
              <span>Track Order</span>
            </Button>

            <Button
              variant={activeView === 'cart' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveView('cart')}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
