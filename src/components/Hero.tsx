
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero Banner */}
      <div className="gradient-bg text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shop Everything.
              <br />
              <span className="text-yellow-300">Delivered Fast.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              South Africa's leading online marketplace with millions of products and lightning-fast delivery.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600">1-3 days nationwide</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-sm text-gray-600">Multiple payment options</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Trusted Reviews</h3>
                <p className="text-sm text-gray-600">4.5/5 customer rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
