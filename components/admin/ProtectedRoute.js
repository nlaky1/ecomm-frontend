import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminAuthContext from '../../context/AdminAuthContext';
import CircularProgress from '@mui/material/CircularProgress';

const ProtectedRoute = ({ children }) => {
    const { admin, loading } = useContext(AdminAuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !admin) {
            router.push('/admin/login');
        }
    }, [admin, loading, router]);

    if (loading || !admin) {
        return <CircularProgress />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
