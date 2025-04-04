import React, { useState, useEffect } from "react";

export default function FormValidationComponent() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    
    useEffect(() => {
        if (!email) {
            setEmailError("")
            return;
        }

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setEmailError(isValidEmail ? "":'Please enter a valid email');
    },[email])
    useEffect(() => {
        if (!password) {
            setPasswordError("")
            return;
        }

        const isValidPassword = password.length >= 8;
        setPasswordError(isValidPassword ? "":'Password must be at least 8 characters');
    },[password])
    return (
        <form>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </form>
    )
}
