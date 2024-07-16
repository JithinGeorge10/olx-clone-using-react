import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { addNewUser, saveDataToFirestore } from '../../utils/firestore';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const navigate=useNavigate()
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
           const userCredential= await addNewUser(email, password, username)
            await saveDataToFirestore(username, email, phone,userCredential)
            navigate('/login')
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div>
            <div className="signupParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={handleSignUp}>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                        id="username"
                        name="name"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="useremail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input
                        className="input"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button>Signup</button>
                </form>
                <a onClick={()=>{navigate('/login')}}>Login</a>
            </div>
        </div>
    );
}
