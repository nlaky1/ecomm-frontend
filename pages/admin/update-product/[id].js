import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import UpdateProduct from '../../../components/UpdateProduct';

const AdminUpdateProductPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <UpdateProduct />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminUpdateProductPage;
