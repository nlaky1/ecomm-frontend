import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import ReviewDetail from '../../components/admin/ReviewDetail';

const AdminReviewDetailPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <ReviewDetail />
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default AdminReviewDetailPage;
