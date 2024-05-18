import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api, { loginUser, registerUser, getUserProfile } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            try {
                const { data } = await getUserProfile();
                setUser(data);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUserLoggedIn();
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await loginUser({ email, password });
            setUser(data.user);
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const register = async (name, email, password) => {
        try {
            await registerUser({ name, email, password });
            login(email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        await api.post('/auth/logout');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
