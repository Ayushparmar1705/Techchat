import React, { useEffect, useState } from 'react'
import ProfileViewModel from '../Profile/ProfileViewModel';
import Sidebaruser from '../Usersidebar/Sidebaruser';
import { User } from "lucide-react"
import Openchattingboard from '../Openchattingboard/Openchattingboard';
import { MessageCircle } from 'lucide-react';


export default function MessagesView({ myuser, loading, onclick, selectedUserName, handleSendMessage, getMesage, handlesetName, profiledata , dbmessages}) {
    // this state used to when user start chatting all chatting data stored insode message and after storing the database
    const [message, setMessage] = useState("");
    // this state used to set the reciver id
    const [reciverId, setReciverId] = useState(null);
    // create the variable for the navigate to the div
    const [moveToProfileAndMoveToChat, setmoveToProfileAndMoveToChat] = useState(true);
    // this state used to when user hover show the Favourite icon

    const [userHover, setUserHover] = useState(false);





    function MovetochattoProfile() {
        setmoveToProfileAndMoveToChat(true);

        let scroll = document.querySelector(".sidebar-scroll");
        scroll.scrollTop = 0;
    }
    function MovetoProfiletoChat() {
        setmoveToProfileAndMoveToChat(false);
    }

    return (

        <div className='flex h-screen'>
            <div className='w-[100px]  bg-gray-50'>


                <div className='group flex flex-col justify-between items-center h-[100px] mt-[20px]'>
                    <User size={28} onClick={MovetochattoProfile}></User>
                    <MessageCircle size={28} onClick={MovetoProfiletoChat}></MessageCircle>



                </div>


            </div>
            <div className='grid grid-cols-12 flex-1 '>
            {/* pending to understand why it's used */}

                <div className='col-span-3  border-[2px] border-gray-50 shadow overflow-y-scroll  sidebar-scroll '>
                    <div className='flex justify-center'>
                        <img src='https://cdn-icons-png.flaticon.com/512/4712/4712027.png' alt='Nofound' className='h-[20px] w-[20px] '></img>
                        <p className='text-black ml-2' style={{ fontFamily: "Be Vietnam Pro" }} >Techchat</p>



                    </div>
                    {/* write code for toggle between profile page and chat page */}
                    {moveToProfileAndMoveToChat ? (
                        <div className='h-full w-full '>

                            <>
                                {/* Show the side bar all the user */}
                                <Sidebaruser myuser={myuser} setUserHover={setUserHover} userHover={userHover} setReciverId={setReciverId} handlesetName={handlesetName} onclick={onclick} loading={loading} />
                                {/* create the code for the open profile page */}
                                {/* <div className='sticky bottom-0 bg-gray-200 '>

                                        <div className=' group rounded-full h-[60px] w-[60px] flex justify-center items-center' onClick={dropdown}>
                                            <img className='cursor-pointer rounded-full h-[40px] w-[45px]' src='../images/profile.jpg' alt='Nofound' ></img>
                                            <p className='hidden absolute left-[60px] bg-gray-100 shadow rounded p-[2px] group-hover:block font-bold'>Your Profile</p>

                                        </div>

                                    </div> */}
                            </>

                        </div>
                    ) : (
                        <>
                            {/* Load the profile view model component where write code for the profile  */}
                            <ProfileViewModel profiledata={profiledata}></ProfileViewModel>
                        </>

                    )}

                </div>
                <div className='col-span-9 h-screen w-full flex flex-col bg-cover' >
                    {/* write code for the open chatting board when click on perticular user */}
                    {selectedUserName ? (
                        <Openchattingboard selectedUserName={selectedUserName} setMessage={setMessage} handleSendMessage={handleSendMessage} reciverId={reciverId} message={message} getMesage={getMesage} dbmessages={dbmessages}></Openchattingboard>


                    ) : (
                        <>
                            {/* Show the message when nothing user selected */}
                            <div className='flex justify-center items-center h-[100vh] flex-col'>
                                <img src='https://cdn-icons-png.flaticon.com/512/4712/4712027.png' alt='Nofound' className='h-[50px] w-[50px] animate-bounce '></img>
                                <p className='animate-pulse'>Select a user to start chatting</p>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}
