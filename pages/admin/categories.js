import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import CategoryList from '../../components/CategoryList';

const AdminCategoriesPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <CategoryList />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminCategoriesPage;
