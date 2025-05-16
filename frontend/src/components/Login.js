import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        axios.post(`${API_URL}/api/login`, {
            email,
            password
        })
        .then(response => {
            const data = response.data;
            //console.log('Backend response:', data);
            if (data.token) {
                console.log('login successful');
                // Optionally store token
                localStorage.setItem('token', data.token);
                // Redirect to /home
                navigate('/home');
            } else {
                console.log('login failed');
            }
        })
        .catch(err => {
            console.error('Error:', err);
        });
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div style={{ maxWidth: 400, margin: '50px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
            </form>
            <div style={{ marginTop: 16 }}>
               <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}

export default Login;