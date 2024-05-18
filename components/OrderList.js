import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../redux/actions/orderActions';

const OrderList = () => {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {orders.map((order) => (
                <div key={order._id}>
                    <h3>Order ID: {order._id}</h3>
                    <p>Total Amount: ${order.totalAmount}</p>
                    <p>Status: {order.orderStatus}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderList;
