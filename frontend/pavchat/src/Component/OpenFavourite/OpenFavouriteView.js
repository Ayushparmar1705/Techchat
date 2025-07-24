import React, { useEffect } from 'react'

export default function OpenFavourite({fav}) {
  
  return (
    <div className='text-center'>
      <p className='font-bold border-b-[2px]  border-gray-100'>Favourite Person</p>
      {fav.message.map((data)=>(
        <div className='p-[10px] hover:bg-gray-200 cursor-pointer transition-all ease-in-out duration-100'>
          <p>{data.fullname}</p>
        </div>
      ))}
       
    </div>
  )
}
