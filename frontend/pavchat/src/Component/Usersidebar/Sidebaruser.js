import React, { useState } from 'react'
import {motion} from "framer-motion"
import { CloudCog, User } from 'lucide-react';
import { AddFavourite } from '../Favourite_person/FavouritePersonModel';
import { toast } from 'react-toastify';
export default function Sidebaruser({ senderId , myuser, setUserHover, userHover, setReciverId, handlesetName, onclick, loading }) {
    const [isFavourite , setIsFavourite] = useState(false);
    console.log(isFavourite);
    
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
                                    className='p-[10px] hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-[10px] flex items-center cursor-pointer '>
                                    <User
                       
                        className="block cursor-pointer hover:bg-gray-100 transition duration-200 h-[40px] w-[40px] border-2 border-gray-50 rounded-full"
                        size={50}
                    />
                                    <p
                                    
                                     className='p-[10px] w-[300px]' style={{ fontFamily: "Be Vietnam Pro" }}>{data.fullname}</p>
                                        {/* When user is hover then check the matched id for the perticular user and after show the favourite image to add the favourite person and check the id means the id is matched with the perticular user that's why write the userHover === data.id*/}
                                    {userHover === data.id && (

                                        isFavourite ? (
                                            <img src='./images/heart.png' alt='Not found' className={'h-[20px] w-[20px]'} onClick={(e) => {
                                            e.stopPropagation();
                                      
                                            AddFavourite(senderId , data.id);
                                            toast("Person Added to favourite");
                                            setIsFavourite(true);
                                            
                                        }}></img>
                                        ):(
                                             <img src='./images/heart.png' alt='Not found' className={'h-[20px] w-[20px]'} onClick={(e) => {
                                            e.stopPropagation();
                                      
                                            AddFavourite(senderId , data.id);
                                            toast("Person Added to favourite");
                                            setIsFavourite(true);
                                            
                                        }}></img>
                                        )
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
