import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import ProductList from '../../components/ProductList';

const AdminProductsPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <ProductList />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminProductsPage;
