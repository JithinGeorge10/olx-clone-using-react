import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { signInToFirebase } from '../../utils/firestore';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await signInToFirebase(email, password)
            console.log(userCredential)
            navigate('/')
        } catch (error) {
            handleAuthError(error.code)
        }
    }

    const handleAuthError = (errorCode) => {
        switch (errorCode) {
            case 'auth/invalid-email':
                alert('Invalid email address.');
                break;
            case 'auth/user-disabled':
                alert('User account is disabled.');
                break;
            case 'auth/user-not-found':
                alert('No user found with this email.');
                break;
            case 'auth/wrong-password':
                alert('Incorrect password.');
                break;
            case 'auth/invalid-credential':
                alert('Check mail and password');
                break;
            default:
                alert('Login failed. Please try again.');
                break;
        }
    };

    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={handleLogin}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="fname"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        id="lname"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <a onClick={() => { navigate('/signup') }}>Signup</a>
            </div>
        </div>
    );
}

export default Login;
