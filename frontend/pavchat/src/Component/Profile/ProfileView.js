import React, { useRef, useState } from 'react'
import ProfileViewModel from './ProfileViewModel'
import {updateProfile} from "./ProfileModel";
export default function ProfileView({ profiledata, handleLogout }) {
    const fileInputRef = useRef(null);
    const [ProfileImage, setProfileImage] = useState(null);

    const [Profiledata, setProfiledata] = useState({
        fullname: profiledata.message[0].fullname,
        email: profiledata.message[0].email,
        image: "",
    });


    const handleUpdateProfile = async () => {
        await updateProfile(Profiledata);
    };

    const handleProfilechange = (e) => {
        const { name, value } = e.target;
        setProfiledata((prev) => ({ ...prev, [name]: value }));
    };

    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleFileOnChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const render = new FileReader();
            render.onloadend = () => {
                setProfileImage(render.result);
            };
            render.readAsDataURL(file);
        }
    };
    return <ProfileViewModel ProfileImage={ProfileImage} handleUpdateProfile={handleUpdateProfile} handleProfilechange={handleProfilechange} handleCameraClick={handleCameraClick} handleFileOnChange={handleFileOnChange} handleLogout={handleLogout} profiledata={profiledata} fileInputRef={fileInputRef} Profiledata={Profiledata}></ProfileViewModel>

}
