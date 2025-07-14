// in View write the code to actuall render in out web page
import React, { useState } from 'react'
import { Link } from "react-router-dom"
export default function LoginView({ form, loading, handleOnchange, handleLogin }) {
    const [Eye, setEye] = useState(true);
    return (
        <div className='flex justify-center items-center bg-white h-[100vh] max-[900px]:w-[100%] max-[900px]:flex max-[900px]:flex-col-reverse'>

            <div className='shadow text-center bg-white p-[10px] rounded-[10px] h-[500px] w-[700px] rounded flex flex-col justify-center items-center max-[900px]:w-[100%]'>

                <p className='font-bold text-[20px]'>Login</p>


                <div className='relative p-[10px]'>
                    <input onChange={handleOnchange} type='email' className="peer w-[400px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400 transition-all max-[900px]:w-full" placeholder='' name='email'></input>
                    <label className='absolute left-4  px-1 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-pink-500 peer-focus:bg-white
                                -top-2 text-sm"'>Email</label>
                </div>
                <div className='relative p-[10px]'>
                    <input onChange={handleOnchange} type={Eye ? "text" : "password"} className="peer w-[400px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400 transition-all max-[900px]:w-full" placeholder='' name='password'></input>
                    <button type='button' className='absolute right-4 top-7' onClick={() => { setEye(!Eye) }}>
                        {Eye ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        ) :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 011.658-3.033m16.184 0A10.05 10.05 0 0121.542 12a10.05 10.05 0 01-1.658 3.033M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18" />
                            </svg>}

                    </button>



                    <label className=' absolute left-4  px-1 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-pink-500 peer-focus:bg-white
                                -top-2 text-sm' >Password</label>


                </div>
                <div className=''>
                    <button onClick={handleLogin} className='p-[10px] w-[200px] bg-pink-400 rounded-[5px] hover:bg-pink-300 max-[900px]:w-[100%]'>Login</button>
                </div>
                <div className='relative top-4'>
                    <p>Not member ? <Link to="/auth/signup" className='border-b-[2px]'>Sign up</Link></p>
                </div>

            </div>
            <div className='p-[10px] h-[500px] w-[500px] flex flex-col justify-center items-center max-[900px]:w-[100%]'>
                 <img src='https://cdn-icons-png.flaticon.com/512/4712/4712027.png' alt='Nofound' className='h-[50px] w-[50px] '></img>
                <p className='text-center font-bold'>Login to Techchat</p>

            </div>
        </div>
    )
}
