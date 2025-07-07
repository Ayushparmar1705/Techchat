// in ViewModel we can write the logic like handle the submiting form etc
import React, { useState } from 'react'
import { login } from './LoginModel';
import LoginView from './LoginView';
import { useNavigate } from 'react-router-dom';

export default function LoginViewModel() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(true);
    const handleOnchange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleLogin = async () => {
        console.log("Handle Login function called...")
        setLoading(true);
        try {
            const result = await login.Loginuser(form);

            localStorage.setItem("token", result["token"])

            navigate("/dashboard");
        }
        catch (err) {
            console.log("error = ", err);
        }
        finally {
            setLoading(false);
        }
    }
    return <LoginView form={form} handleLogin={handleLogin} handleOnchange={handleOnchange} loading={loading}></LoginView>;
}
