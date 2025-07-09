// in ViewModel we can write the logic like handle the submiting form etc
import React, { useState } from 'react'
import { login } from './LoginModel';
import LoginView from './LoginView';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
export default function LoginViewModel() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(true);
    const handleOnchange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleLogin = async () => {
        
        setLoading(true);
        try {
            const result = await login.Loginuser(form);
            console.log(result);
            if(result.length>0){
                localStorage.setItem("token", result["token"])
                navigate("/dashboard");
                
            }else{
                toast(result.message);
            }

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
