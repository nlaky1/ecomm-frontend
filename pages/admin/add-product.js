import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import AddProduct from '../../components/AddProduct';

const AdminAddProductPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <AddProduct />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminAddProductPage;
