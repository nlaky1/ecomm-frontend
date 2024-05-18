import React, { useState } from 'react';
import api from '../utils/api';

const PaymentForm = ({ userId, orderId, amount }) => {
    const [paymentMethod, setPaymentMethod] = useState('Stripe');
    const [source, setSource] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const paymentData = { userId, orderId, amount, paymentMethod, source };
        try {
            await api.createPayment(paymentData);
            setSuccess(true);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Make a Payment</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success ? (
                <p>Payment Successful!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Payment Method:</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="Stripe">Stripe</option>
                            {/* Add more payment methods as needed */}
                        </select>
                    </div>
                    <div>
                        <label>Source:</label>
                        <input
                            type="text"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                            placeholder="Payment source token"
                        />
                    </div>
                    <button type="submit">Pay ${amount}</button>
                </form>
            )}
        </div>
    );
};

export default PaymentForm;
