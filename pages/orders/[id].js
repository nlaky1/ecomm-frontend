import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/api';

const OrderDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchOrder = async () => {
                try {
                    const { data } = await api.get(`/orders/${id}`);
                    setOrder(data);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
            fetchOrder();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Order ID: {order._id}</h1>
            <p>Total Amount: ${order.totalAmount}</p>
            <p>Status: {order.orderStatus}</p>
            <div>
                {order.products.map((item) => (
                    <div key={item.product._id}>
                        <h3>{item.product.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDetail;
