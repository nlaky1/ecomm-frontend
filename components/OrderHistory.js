import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import api from '../utils/api';

const OrderHistory = () => {
    const { user, loading } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            if (user) {
                try {
                    const { data } = await api.get(`/orders/user/${user._id}`);
                    setOrders(data);
                } catch (err) {
                    setError('Failed to fetch orders.');
                }
            }
        };
        fetchOrders();
    }, [user]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Order History</h1>
            {orders.map((order) => (
                <div key={order._id}>
                    <h3>Order ID: {order._id}</h3>
                    <p>Total Amount: ${order.totalAmount}</p>
                    <p>Status: {order.orderStatus}</p>
                    <div>
                        {order.products.map((item) => (
                            <div key={item.product._id}>
                                <h4>{item.product.name}</h4>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
