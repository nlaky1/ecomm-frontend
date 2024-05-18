import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import OrderList from '../../components/OrderList';

const AdminOrdersPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <OrderList />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminOrdersPage;
