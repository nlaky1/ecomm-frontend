import { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const { data } = await api.get('/admin/auth/me');
                setAdmin(data);
            } catch (err) {
                setAdmin(null);
            } finally {
                setLoading(false);
            }
        };
        fetchAdmin();
    }, []);

    const login = async (credentials) => {
        const { data } = await api.post('/admin/auth/login', credentials);
        setAdmin(data);
    };

    const logout = async () => {
        await api.post('/admin/auth/logout');
        setAdmin(null);
    };

    return (
        <AdminAuthContext.Provider value={{ admin, loading, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export default AdminAuthContext;
