import React, { useState } from 'react'
import { Signupmodel } from './SignupModel';
import { toast } from "react-toastify"
import SignupView from './SignupView';
export default function SignupViewModel() {
    const [formdata, setFormdata] = useState({ username: "", email: "", password: "" });
    const [loading, setLoading] = useState(true);
    const handleOnchange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });

    }
    const signupUser = async () => {
        console.log("function is called...")
        const toastId = toast.loading("Creating account...");
        try {
            const result = await Signupmodel(formdata);
            console.log(result);
            if (!result) {
                toast.update(toastId, {
                    render: result.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
            }
            else {
                toast.update(toastId, {
                    render: "🎉 Account created",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });
            }
        }
        catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    return (
        <SignupView handleOnchange={handleOnchange} signupUser={signupUser}></SignupView>
    )
}
