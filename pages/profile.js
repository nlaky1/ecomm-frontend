import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const Profile = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Profile</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;
