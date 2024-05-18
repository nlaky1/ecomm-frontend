import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import UpdateCategory from '../../../components/UpdateCategory';

const AdminUpdateCategoryPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <UpdateCategory />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminUpdateCategoryPage;
