import AddCategory from '../../components/AddCategory';
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/admin/ProtectedRoute';

const AddCategoryPage = () => {
    return (
        <div>
            <ProtectedRoute>
                   <AddCategory />
            </ProtectedRoute>
           
        </div>
    );
};

export default AddCategoryPage;
