import React from 'react'
import { Link } from "react-router-dom"
export default function SignupView({ handleOnchange, signupUser }) {
    return (
        <div className='flex justify-center items-center bg bg-green-50 h-[100vh] max-[900px]:flex max-[900px]:flex-col max-[900px]:w-[100%]'>
            <div className='p-[10px] h-[500px] w-[500px] flex flex-col justify-center items-center max-[900px]:flex max-[900px]:flex-col max-[900px]:w-[100%]'>
                <img className='h-[400px] w-[200px]' src='https://illustrations.popsy.co/amber/digital-nomad.svg' alt='Nofound'></img>
                <p className='text-center font-bold text-pink-500'>Join in our community</p>
                <p className='text-center font-bold text-pink-500'>Connect with your friends and enjoye your life</p>
            </div>
            <div className='shadow text-center bg-white p-[10px] rounded-[10px] h-[500px] w-[700px] rounded flex flex-col justify-center items-center max-[900px]:flex max-[900px]:flex-col max-[900px]:w-[100%]'>

                <p className='font-bold text-[20px]'>Create Account</p>

                <div className='relative p-[10px]'>

                    <input onChange={handleOnchange} type='text' className="peer w-[400px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400 transition-all max-[900px]:w-full" placeholder='' name='fullname'></input>
                    <label className=' absolute left-4  px-1 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-pink-500 peer-focus:bg-white
                                -top-2 text-sm"'>FullName</label>

                </div>
                <div className='relative p-[10px]'>
                    <input onChange={handleOnchange} type='email' className="peer w-[400px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400 transition-all max-[900px]:w-full" placeholder='' name='email'></input>
                    <label className='absolute left-4  px-1 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-pink-500 peer-focus:bg-white
                                -top-2 text-sm"'>Email</label>
                </div>
                <div className='relative p-[10px]'>
                    <input onChange={handleOnchange} type='password' className="peer w-[400px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400 transition-all max-[900px]:w-full" placeholder='' name='password'></input>
                    <label className=' absolute left-4  px-1 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-pink-500 peer-focus:bg-white
                                -top-2 text-sm"'>Password</label>


                </div>
                <div className=''>
                    <button onClick={signupUser} className='p-[10px] w-[200px] bg-pink-400 rounded-[5px] hover:bg-pink-300'>Sign Up</button>
                </div>
                <div className='relative top-4'>
                    <p>Alredy have an account ? <Link to="/auth/login" className='border-b-[2px]'>Login</Link></p>
                </div>
            </div>

        </div>
    )
}
