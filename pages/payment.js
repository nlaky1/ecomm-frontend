import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PaymentForm from '../components/PaymentForm';

const PaymentPage = () => {
    const router = useRouter();
    const { userId, orderId, amount } = router.query;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId && orderId && amount) {
            setLoading(false);
        }
    }, [userId, orderId, amount]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <PaymentForm userId={userId} orderId={orderId} amount={amount} />
        </div>
    );
};

export default PaymentPage;
