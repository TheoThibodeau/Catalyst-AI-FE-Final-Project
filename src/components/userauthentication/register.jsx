import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const UserAuthentication = ({ updateToken }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

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
        };

        const handleUsername = (event) => {
            setUsername(event.target.value);
            };
        
return(
    <>
    <form className="form" onSubmit={handleRegister}>
            <div>💻. New User Sign Up 💻</div>
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
    </>
);
};

export default UserAuthentication;