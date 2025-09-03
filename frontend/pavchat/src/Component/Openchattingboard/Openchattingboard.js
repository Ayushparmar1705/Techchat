
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'

export default function Openchattingboard({ selectedUserName, setMessage, handleSendMessage, reciverId, message , dbmessages , onlineUser}) {
    const [decodedToken , setdecodedToken] = useState("");
    const [isShow , setisShow] = useState("");
    const [message_id , setMessageId] = useState("");
   useEffect(()=>{
     const token = localStorage.getItem("token");

    if(token){
        const decode = jwtDecode(token);
        setdecodedToken(decode.id);
    }
   },[]);

  
    return (

        <div>

            <div className='relative col-span-9 h-[100vh] bg-white rounded shadow ' style={{
                backgroundImage:
                    "url('https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png')"
            }}>

               <div className='bg-gray-50 h-[60px]'>
                 <p className='p-[2px] text-[20px]' style={{ fontFamily: "Be Vietnam Pro" }}>{selectedUserName}</p>
                 <p className='p-[2px] font-bold text-[10px]'>
                    {onlineUser.includes(Number(reciverId))? (
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

                            <div  key={index} className={`flex ${data.created_by === decodedToken?'justify-end':'justify-start'}`}>
                            
                                <div  onMouseEnter={()=>{
                                        setisShow(data.created_by);
                                        setMessageId(data.message_id);
                                    }} onMouseLeave={()=>{
                                          setisShow("")
                                    }}  className='h-[70px] flex items-center'>
                                    <div  className={`rounded-[10px] mt-[5px]  ${data.created_by === decodedToken?'bg-pink-500 text-white':'bg-blue-500 text-white'}`}>
                                        <div className={`shadow-2xl   ${data.created_by === decodedToken?'w-fit text-right':'w-fit  text-left'} rounded-[10px] h-[60px]  p-[10px]`}>
                                           <p>{data.message}</p>
                                          
                                         {isShow === data.created_by && data.message_id === message_id && (
                                         <p className='text-gray-100'>{data.created_on}</p>
                                       )}
                                    
                                        </div>
                                    </div>
                                      
                                   


                                </div>
                            </div>

                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
