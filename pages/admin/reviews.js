import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import ReviewList from '../../components/admin/ReviewList';

const AdminReviewsPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <ReviewList />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminReviewsPage;
