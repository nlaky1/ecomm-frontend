import React, { useState } from 'react';
import api from '../utils/api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/forgotPassword', { email });
            setMessage('Password reset link sent to your email.');
        } catch (err) {
            setError('Failed to send password reset link.');
        }
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;
