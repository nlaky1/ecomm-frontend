import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AdminAuthContext from '../../context/AdminAuthContext';
import { TextField, Button, Container, Typography } from '@mui/material';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AdminAuthContext);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
            router.push('/admin/products');
        } catch (err) {
            alert('Failed to login');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Admin Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default AdminLogin;
