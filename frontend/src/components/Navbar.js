// This file defines the routes for user-related operations.
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f0f0f0' }}>
            <div>
                <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
                <Link to="/tasks" style={{ marginRight: '1rem' }}>Task Lists</Link>
            </div>
            <button onClick={handleLogout}>Sign Out</button>
        </nav>
    );
}

export default Navbar;
