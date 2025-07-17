import React from 'react'
import {motion} from "framer-motion"
export default function Sidebaruser({ myuser, setUserHover, userHover, setReciverId, handlesetName, onclick, loading }) {

    return (
        <div>
            <div className='p-[10px]'>
                <div>
                    <input type='search' placeholder='Enter the user name to search' name='name' className='rounded-[10px] border-[2px] border-gray-100 block p-[5px] w-[300px] m-[auto] focus:scale-[1.03] focus:outline-none' onChange={(e) => { handlesetName(e) }}></input>
                </div>

                {

                    loading ? (
                        <div className='w-[300px]'>
                            {/* Show the loading unless all the user is not loaded */}
                            <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[40px] bg-gray-100 animate-pulse'></div>
                            <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[40px] bg-gray-100 animate-pulse'></div>
                            <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[40px] bg-gray-100 animate-pulse'></div>
                            <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[40px] bg-gray-100 animate-pulse'></div>
                            <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[40px] bg-gray-100 animate-pulse'></div>

                        </div>
                    ) : (
                        myuser.length > 0 ? (
                            myuser.map((data, index) => (

                                <div 
                                 key={index} onClick={() => {
                                    onclick(data.fullname, data.id);
                                    
                                    setReciverId(data.id);

                                }}
                                    onMouseEnter={() => { setUserHover(data.id) }} onMouseLeave={() => { setUserHover(null) }}
                                    className='p-[10px] hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-[10px] flex items-center cursor-pointer'>
                                    <img className='h-[30px] w-[30px]' src='../images/user.png' alt='Nofound'></img>
                                    <p
                                    
                                     className='p-[10px] w-[300px]' style={{ fontFamily: "Be Vietnam Pro" }}>{data.fullname}</p>

                                    {userHover === data.id && (

                                        <i className="relative left-[5px] fa-solid fa-star text-yellow-400 " onClick={(e) => {
                                            e.stopPropagation();
                                            console.log(e);

                                        }}></i>
                                    )}
                                </div>


                            ))
                        ) : (
                            <p className='text-center'>No such user found</p>
                        )
                    )

                }

            </div>

        </div>
    )
}
