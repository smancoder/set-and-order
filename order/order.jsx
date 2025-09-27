import React, { useState, useMemo } from 'react';
import { Search, Filter, Eye, Edit, Trash2, Download, Printer, X, Calendar, Phone, Mail, MapPin, Package, CreditCard, Clock, CheckCircle, AlertCircle, XCircle, Truck } from 'lucide-react';

const OrderManagementDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [deliveryFilter, setDeliveryFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Sample order data
  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-001',
      customerName: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      address: '123 Main St, New York, NY 10001',
      orderDate: '2024-01-15T10:30:00',
      totalAmount: 299.99,
      paymentMethod: 'Card',
      paymentStatus: 'Paid',
      deliveryStatus: 'Shipped',
      transactionId: 'TXN-789123456',
      items: [
        { name: 'Wireless Headphones', qty: 1, price: 199.99 },
        { name: 'Phone Case', qty: 2, price: 49.99 }
      ],
      shippingMethod: 'Express Delivery'
    },
    {
      id: 'ORD-2024-002',
      customerName: 'Sarah Johnson',
      phone: '+1 (555) 987-6543',
      email: 'sarah.j@email.com',
      address: '456 Oak Ave, Los Angeles, CA 90210',
      orderDate: '2024-01-14T14:20:00',
      totalAmount: 149.50,
      paymentMethod: 'Cash',
      paymentStatus: 'Pending',
      deliveryStatus: 'Pending',
      transactionId: null,
      items: [
        { name: 'Bluetooth Speaker', qty: 1, price: 149.50 }
      ],
      shippingMethod: 'Standard Delivery'
    },
    {
      id: 'ORD-2024-003',
      customerName: 'Mike Chen',
      phone: '+1 (555) 456-7890',
      email: 'mike.chen@email.com',
      address: '789 Pine St, Chicago, IL 60601',
      orderDate: '2024-01-13T09:15:00',
      totalAmount: 599.99,
      paymentMethod: 'Card',
      paymentStatus: 'Failed',
      deliveryStatus: 'Cancelled',
      transactionId: 'TXN-456789123',
      items: [
        { name: 'Laptop Stand', qty: 1, price: 299.99 },
        { name: 'Wireless Mouse', qty: 1, price: 79.99 },
        { name: 'USB Hub', qty: 1, price: 219.99 }
      ],
      shippingMethod: 'Express Delivery'
    }
  ]);

  // Filter orders
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPayment = paymentFilter === 'all' || order.paymentStatus.toLowerCase() === paymentFilter;
      const matchesDelivery = deliveryFilter === 'all' || order.deliveryStatus.toLowerCase() === deliveryFilter;
      
      return matchesSearch && matchesPayment && matchesDelivery;
    });
  }, [orders, searchTerm, paymentFilter, deliveryFilter]);

  const getStatusColor = (status, type) => {
    const statusMap = {
      payment: {
        paid: 'text-green-400 bg-green-400/20',
        pending: 'text-yellow-400 bg-yellow-400/20',
        failed: 'text-red-400 bg-red-400/20'
      },
      delivery: {
        pending: 'text-yellow-400 bg-yellow-400/20',
        shipped: 'text-blue-400 bg-blue-400/20',
        delivered: 'text-green-400 bg-green-400/20',
        cancelled: 'text-red-400 bg-red-400/20'
      }
    };
    return statusMap[type][status.toLowerCase()] || 'text-gray-400 bg-gray-400/20';
  };

  const getStatusIcon = (status, type) => {
    if (type === 'payment') {
      switch (status.toLowerCase()) {
        case 'paid': return <CheckCircle className="w-4 h-4" />;
        case 'pending': return <Clock className="w-4 h-4" />;
        case 'failed': return <XCircle className="w-4 h-4" />;
        default: return <AlertCircle className="w-4 h-4" />;
      }
    } else {
      switch (status.toLowerCase()) {
        case 'delivered': return <CheckCircle className="w-4 h-4" />;
        case 'shipped': return <Truck className="w-4 h-4" />;
        case 'pending': return <Clock className="w-4 h-4" />;
        case 'cancelled': return <XCircle className="w-4 h-4" />;
        default: return <Package className="w-4 h-4" />;
      }
    }
  };

  const updateOrderStatus = (orderId, field, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, [field]: newStatus } : order
    ));
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, [field]: newStatus });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ...same JSX UI code as before... */}
    </div>
  );
};

export default OrderManagementDashboard;
