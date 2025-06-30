
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';

const mockOrders = [
  {
    id: 'TK2024001234',
    status: 'delivered',
    items: ['Samsung Galaxy S24 Ultra', 'Wireless Charger'],
    total: 24999,
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-17',
    trackingSteps: [
      { status: 'ordered', label: 'Order Placed', date: '2024-01-15 10:30', completed: true },
      { status: 'confirmed', label: 'Order Confirmed', date: '2024-01-15 11:15', completed: true },
      { status: 'shipped', label: 'Shipped', date: '2024-01-16 09:00', completed: true },
      { status: 'delivered', label: 'Delivered', date: '2024-01-17 14:30', completed: true },
    ]
  },
  {
    id: 'TK2024001235',
    status: 'shipped',
    items: ['Apple MacBook Air M2'],
    total: 18999,
    orderDate: '2024-01-20',
    deliveryDate: '2024-01-22',
    trackingSteps: [
      { status: 'ordered', label: 'Order Placed', date: '2024-01-20 14:20', completed: true },
      { status: 'confirmed', label: 'Order Confirmed', date: '2024-01-20 15:00', completed: true },
      { status: 'shipped', label: 'Out for Delivery', date: '2024-01-21 08:30', completed: true },
      { status: 'delivered', label: 'Delivered', date: 'Expected today', completed: false },
    ]
  }
];

const OrderTracking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(mockOrders[0]);

  const getStatusIcon = (status: string, completed: boolean) => {
    if (!completed) return <Clock className="w-5 h-5 text-gray-400" />;
    
    switch (status) {
      case 'ordered':
        return <Package className="w-5 h-5 text-blue-600" />;
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-orange-600" />;
      case 'delivered':
        return <MapPin className="w-5 h-5 text-green-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'shipped':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Order</h1>
        
        {/* Search Order */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter order number (e.g., TK2024001234)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="btn-primary">
                <Search className="w-4 h-4 mr-2" />
                Track Order
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <Card 
                  key={order.id} 
                  className={`cursor-pointer transition-all ${
                    selectedOrder.id === order.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedOrder(order)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.orderDate}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {order.items.join(', ')}
                    </div>
                    <div className="font-semibold">
                      R{order.total.toLocaleString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Order #{selectedOrder.id}</span>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Info */}
                <div>
                  <h4 className="font-semibold mb-2">Items Ordered</h4>
                  <ul className="space-y-1">
                    {selectedOrder.items.map((item, index) => (
                      <li key={index} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Tracking Timeline */}
                <div>
                  <h4 className="font-semibold mb-4">Tracking Information</h4>
                  <div className="space-y-4">
                    {selectedOrder.trackingSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(step.status, step.completed)}
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium ${
                            step.completed ? 'text-gray-900' : 'text-gray-400'
                          }`}>
                            {step.label}
                          </div>
                          <div className={`text-sm ${
                            step.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {step.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Order Date:</span>
                    <div className="font-medium">{selectedOrder.orderDate}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Expected Delivery:</span>
                    <div className="font-medium">{selectedOrder.deliveryDate}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
