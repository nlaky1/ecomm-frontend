import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import api from '../utils/api';

const EditProfile = () => {
    const { user, loading, setUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updates = { name, email };
            if (password) {
                updates.password = password;
            }
            const { data } = await api.put('/auth/updateProfile', updates);
            setUser(data);
            setMessage('Profile updated successfully!');
        } catch (err) {
            setMessage('Failed to update profile.');
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Update Profile</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default EditProfile;
