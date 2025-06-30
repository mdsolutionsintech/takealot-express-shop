
import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';

const featuredProducts = [
  {
    id: 1,
    name: 'Samsung Galaxy S24 Ultra',
    price: 23999,
    originalPrice: 26999,
    rating: 4.8,
    reviews: 1247,
    image: '/placeholder.svg',
    badge: 'Best Seller',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Apple MacBook Air M2',
    price: 18999,
    originalPrice: 21999,
    rating: 4.9,
    reviews: 856,
    image: '/placeholder.svg',
    badge: 'New',
    category: 'Computers'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Headphones',
    price: 6999,
    originalPrice: 8999,
    rating: 4.7,
    reviews: 2134,
    image: '/placeholder.svg',
    badge: 'Sale',
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Nike Air Max 270',
    price: 2499,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 892,
    image: '/placeholder.svg',
    badge: 'Popular',
    category: 'Fashion'
  },
  {
    id: 5,
    name: 'KitchenAid Stand Mixer',
    price: 7499,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 456,
    image: '/placeholder.svg',
    badge: 'Deal',
    category: 'Home & Garden'
  },
  {
    id: 6,
    name: 'iPad Pro 12.9-inch',
    price: 15999,
    originalPrice: 18999,
    rating: 4.9,
    reviews: 634,
    image: '/placeholder.svg',
    badge: 'Premium',
    category: 'Electronics'
  }
];

const ProductGrid = () => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg">Hand-picked products with amazing deals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card-hover bg-white rounded-xl shadow-sm border overflow-hidden">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  variant={product.badge === 'Sale' ? 'destructive' : 'secondary'}
                  className="absolute top-3 left-3"
                >
                  {product.badge}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      R{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        R{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <Badge variant="destructive" className="text-xs">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
