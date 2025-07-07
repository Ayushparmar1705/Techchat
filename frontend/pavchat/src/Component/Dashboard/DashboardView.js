import React, {useState } from 'react'
export default function DashboardView({ myuser, loading, token, onclick, selectedUserName, handleSendMessage }) {
    const [message, setMessage] = useState("");
    const [reciverId, setReciverId] = useState(null);
    return (
        loading ? (
            <p>Loading chatboard...</p>

        ) : (
            <div className='grid grid-cols-12 '>
                <div className='col-span-3  h-[100vh] bg-gray-50 bg-cover'>
                    <div className='flex justify-center'>
                        <img src='https://cdn-icons-png.flaticon.com/512/4712/4712027.png' alt='Nofound' className='h-[20px] w-[20px] '></img>
                        <p className='text-black ml-2' >Techchat</p>
                    </div>
                    <div className='p-[10px]'>
                        {myuser.map((data) => (
                            <div onClick={() => {
                                onclick(data.fullname, data.id);
                                setReciverId(data.id);
                            }} className='p-[10px] hover:bg-white transition-all duration-300 ease-in-out rounded-[10px] flex items-center cursor-pointer'>
                                <img className='h-[30px] w-[30px]' src='../images/user.png' alt='Nofound'></img>
                                <p className='p-[10px]'>{data.fullname}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='col-span-9  h-[100vh] bg-cover' >

                    {selectedUserName ? (
                        <div className='relative col-span-9 h-[100vh] bg-white rounded shadow' style={{
                            backgroundImage:
                                "url('https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png')"
                        }}>
                            <p className='p-[2px] font-bold text-[25px]'>{selectedUserName}</p>
                            <p className='p-[2px] font-bold text-[10px] border-b-[2px] border-gray-50'>Online</p>
                            <div className='relative top-[80%] w-[100%]'>
                                <input onChange={(e) => { setMessage(e.target.value) }} onKeyDown={(e) => {
                                    handleSendMessage(e, reciverId, message)
                                }} type='text' className='border-[2px] border-gray-100 block m-[auto] w-[500px] rounded-[10px] focus:outline-none focus:border-[2px] focus:border-gray-200 transition-full duration-300  focus:scale-[1.03] p-[10px]' placeholder='Enter the text to message'></input>
                            </div>
                        </div>


                    ) : (<div className='flex justify-center items-center h-[100vh] flex-col'>
                        <img src='https://cdn-icons-png.flaticon.com/512/4712/4712027.png' alt='Nofound' className='h-[50px] w-[50px] animate-bounce '></img>
                        <p className='animate-pulse'>Select a user to start chatting</p>
                    </div>)}

                </div>
            </div>
        )

    )
}
