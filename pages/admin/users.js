import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import UserList from '../../components/UserList';

const AdminUsersPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <UserList />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminUsersPage;
