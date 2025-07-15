
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'

export default function Openchattingboard({ selectedUserName, setMessage, handleSendMessage, reciverId, message, getMesage , dbmessages , onlineUser}) {
    const [decodedToken , setdecodedToken] = useState("");
   useEffect(()=>{
     const token = localStorage.getItem("token");

    if(token){
        const decode = jwtDecode(token);
        setdecodedToken(decode.id);
    }
   },[decodedToken]);
   useEffect(()=>{
    if(decodedToken){
        console.log("decoded token = ",decodedToken);
    }
   },[decodedToken])
  
    return (

        <div>

            <div className='relative col-span-9 h-[100vh] bg-white rounded shadow ' style={{
                backgroundImage:
                    "url('https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png')"
            }}>

               <div className='bg-gray-50 h-[60px]'>
                 <p className='p-[2px] text-[20px]' style={{ fontFamily: "Be Vietnam Pro" }}>{selectedUserName}</p>
                 <p className='p-[2px] font-bold text-[10px]'>
                    {onlineUser.includes(reciverId)? (
                        <p className='text-green-500'>🟢 Online</p>
                    ):
                    <p className='text-gray-500'>⚪️ Offline</p>}
                 </p>
               </div>
                <div className='relative top-[80%] w-[100%]'>
                    <input onChange={(e) => { setMessage(e.target.value) }} onKeyDown={(e) => {
                        handleSendMessage(e, reciverId, message)
                    }} type='text' className='border-[2px] border-gray-300 block ml-[20px]  w-[90%] rounded-[10px] focus:outline-none focus:border-[2px] focus:border-gray-400px transition-full duration-300  focus:scale-[1.03] p-[10px]' placeholder='Enter the text to message'></input>

                </div>
                <div className='h-[70%] overflow-y-scroll'>
                    {dbmessages.length > 0 && (
                        dbmessages.map((data, index) => (

                            <div key={index} className='w-[100%] flex flex-col items-end'>
                            
                                <div

                                    className='rounded  w-fit mt-[5px]'>
                                    <p className={`${data.created_by === decodedToken?'bg-blue-200':'bg-gray-300'} rounded-[10px] p-[10px]`}>{data.message}</p>


                                </div>
                            </div>

                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
