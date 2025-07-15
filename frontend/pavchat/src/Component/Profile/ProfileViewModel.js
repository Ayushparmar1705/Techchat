import { Camera, User } from "lucide-react";
import React, { useRef, useState } from "react";

export default function ProfileViewModel({ profiledata , handleLogout }) {
    const fileInputRef = useRef(null);
    const [ProfileImage, setProfileImage] = useState(null);

    const [Profiledata, setProfiledata] = useState({
        fullname: profiledata.message[0].fullname,
        email: profiledata.message[0].email,
        image: "",
    });

    const handleUpdateProfile = () => {
        console.log(Profiledata, ProfileImage);
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

    return (
        <div className="h-full w-full  flex-col">
            <div className="w-full  flex-col">
                <p className="text-center font-bold text-lg mt-4">Profile</p>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
                {/* Profile Image */}
                {ProfileImage ? (
                    <img
                        onClick={handleCameraClick}
                        className="cursor-pointer rounded-full h-[100px] w-[100px] mb-4"
                        src={ProfileImage}
                        alt="Notfound"
                    />
                ) : (
                    <User
                        onClick={handleCameraClick}
                        className="cursor-pointer hover:bg-gray-100 transition duration-200 h-[100px] w-[100px] border-2 border-gray-50 rounded-full mb-4"
                        size={50}
                    />
                )}
                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileOnChange}
                />

                {/* Profile Form */}
                <div className="flex flex-col items-center gap-4 w-full max-w-md px-4">
                    <div className="flex w-full">
                        <label className="w-1/3 text-right mr-2">Full Name:</label>
                        <input
                            type="text"
                            name="fullname"
                            className="flex-1 border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={Profiledata.fullname}
                            onChange={handleProfilechange}
                        />
                    </div>

                    <div className="flex w-full">
                        <label className="w-1/3 text-right mr-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="flex-1 border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={Profiledata.email}
                            onChange={handleProfilechange}
                        />
                    </div>

                    <button
                        className="p-2 bg-gray-100 w-full rounded hover:bg-gray-200 transition duration-200"
                        onClick={handleUpdateProfile}
                    >
                        Save
                    </button>
                </div>

                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}
