import React, { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';

const ResetPassword = () => {
    const router = useRouter();
    const { token } = router.query;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            await api.post(`/auth/resetPassword/${token}`, { password });
            setMessage('Password reset successfully.');
            router.push('/login');
        } catch (err) {
            setError('Failed to reset password.');
        }
    };

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default ResetPassword;
