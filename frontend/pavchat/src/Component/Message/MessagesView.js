import React, { useState } from 'react'
export default function MessagesView({ myuser, loading, token, onclick, selectedUserName, handleSendMessage, getMesage, dbmessages }) {
    const [message, setMessage] = useState("");
    const [reciverId, setReciverId] = useState(null);
    const [openProfile, setOpenProfile] = useState(true);

    function dropdown() {
        setOpenProfile(!openProfile);
    }
    return (

        <div className='grid grid-cols-12 '>

            <div className='col-span-3  h-[100vh] bg-gray-50 bg-cover'>
                <div className='flex justify-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/4712/4712027.png' alt='Nofound' className='h-[20px] w-[20px] '></img>
                    <p className='text-black ml-2' >Techchat</p>
                </div>
                {openProfile ? (
                    <div>
                        {loading ? (
                            <div className='w-[full] '>
                                <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[50px] bg-gray-100 animate-pulse'></div>
                                <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[50px] bg-gray-100 animate-pulse'></div>
                                <div className='w-[200px] m-[auto] rounded-[10px] mt-[10px] h-[50px] bg-gray-100 animate-pulse'></div>

                            </div>
                        ) : (
                            <div className='p-[10px]'>
                                {myuser.map((data, index) => (
                                    <div key={index} onClick={() => {
                                        onclick(data.fullname, data.id);
                                        setReciverId(data.id);
                                    }} className='p-[10px] hover:bg-white transition-all duration-300 ease-in-out rounded-[10px] flex items-center cursor-pointer'>
                                        <img className='h-[30px] w-[30px]' src='../images/user.png' alt='Nofound'></img>
                                        <p className='p-[10px]'>{data.fullname}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className='fixed bottom-4'>


                            <div className='group rounded-full h-[60px] w-[60px] flex justify-center items-center' onClick={dropdown}>
                                <img className='rounded-full h-[40px] w-[45px]' src='../images/profile.jpg' alt='Nofound' ></img>
                                <p className='hidden fixed left-[50px] group-hover:block'>Profile</p>

                            </div>
                        </div>
                    </div>
                ) : (

                    <div className='fixed bottom-4'>


                        <div className='group rounded-full h-[60px] w-[60px] flex justify-center items-center' onClick={dropdown}>
                            <img className='h-[40px] w-[40px]' src='../images/chat.png' alt='Nofound'></img>
                            <p className='hidden fixed left-[50px] group-hover:block'>Chat</p>

                        </div>
                    </div>

                )}

            </div>
            <div className='col-span-9  h-[100vh] bg-cover' >

                {selectedUserName ? (
                    <div className='relative col-span-9 h-[100vh] bg-white rounded shadow overflow-y-scroll' style={{
                        backgroundImage:
                            "url('https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png')"
                    }}>

                        <p className='p-[2px] font-bold text-[25px]'>{selectedUserName}</p>

                        <p className='p-[2px] font-bold text-[10px] border-b-[2px] border-gray-50'>
                            Online
                        </p>
                        <div className='relative top-[80%] w-[100%]'>
                            <input onChange={(e) => { setMessage(e.target.value) }} onKeyDown={(e) => {
                                handleSendMessage(e, reciverId, message)
                            }} type='text' className='border-[2px] border-gray-100 block m-[auto] w-[500px] rounded-[10px] focus:outline-none focus:border-[2px] focus:border-gray-200 transition-full duration-300  focus:scale-[1.03] p-[10px]' placeholder='Enter the text to message'></input>

                        </div>
                        <div className='h-[70%] overflow-y-scroll'>
                            {dbmessages.map((data, index) => (
                                <div key={index} className='w-[100%] flex flex-col items-end'>
                                    <div

                                        className='rounded  bg-gray-100 w-fit mt-[5px]'>
                                        <p

                                            className='text-right p-[10px] mt-[10px]' key={index}>{data.message}</p>

                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>


                ) : (<div className='flex justify-center items-center h-[100vh] flex-col'>
                    <img src='https://cdn-icons-png.flaticon.com/512/4712/4712027.png' alt='Nofound' className='h-[50px] w-[50px] animate-bounce '></img>
                    <p className='animate-pulse'>Select a user to start chatting</p>
                </div>)}

            </div>
        </div>
    )
}
