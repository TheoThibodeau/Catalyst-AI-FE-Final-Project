import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const UserAuthentication = ({ updateToken }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post('https://catalyst-x226.onrender.com/auth/users/', {
            username: username,
            password: password,
            })
            .then((res) => {
            updateToken(res.data.auth_token);
            localStorage.setItem('token', res.data.auth_token);
            });
            console.log(handleRegister)
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://catalyst-x226.onrender.com/auth/token/login/', {
            username: username,
            password: password,
            })
            .then((res) => {
            updateToken(res.data.auth_token);
            localStorage.setItem('token', res.data.auth_token);
            });
        };

    const handleLogout = () => {
        axios
            .post(
            'https://catalyst-x226.onrender.com/auth/token/logout/',
            {},
            {
            headers: {
                Authorization: `token ${token}`,
            },
            }
            )
            .then(() => {
            setToken(null);
            setLogoutMessage('Logged out successfully.');
            localStorage.removeItem('token');
            });
        };

    const handleUsername = (event) => {
        setUsername(event.target.value);
        };

    const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
    };

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        };
        
return(
    <>
    <button className="button registration-button" onClick={toggleRegistrationForm}>
        {showRegistrationForm ? 'Hide Registration Form' : 'Click For New Account'}
    </button>
    {showRegistrationForm && (
        <form className="form" onSubmit={handleRegister}>
            <div>New User Sign Up</div>
            <div>
            </div>
            <div>
            <label>Username: </label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Choose a Username..."
                value={username}
                onChange={handleUsername}
                required
            />
            </div>
            <div>
            <label>Password: </label>
            <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a Password..."
                required
            />
            </div>
            <div>
            <input type="submit" className="button" value="Register" />
            </div>
        </form>
    )}

<button className="button login-button" onClick={toggleLoginForm}>
        {showLoginForm ? 'Hide Login Form' : 'Show Login Form'}
        </button>
        {showLoginForm && (
        <form className="form" onSubmit={handleSubmit}>
            <div>
            <label>Username: </label>
            <input
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={handleUsername}
            required
            />
        </div>
        <div>
            <label>Password: </label>
            <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div>
            <input type="submit" className="button" value="Login" />
        </div>
        </form>
    )}

    <button className="button" onClick={handleLogout}>
        Logout
    </button>
    {logoutMessage && <div>{logoutMessage}</div>}

    </>
);
};

export default UserAuthentication;