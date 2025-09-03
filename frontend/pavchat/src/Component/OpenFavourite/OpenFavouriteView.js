import React, { useEffect, useState } from 'react'

export default function OpenFavourite({ fav }) {
  const [hover, setHover] = useState(false);


  return (
    <div className='text-center'>
      <p className='font-bold border-b-[2px]  border-gray-100'>Favourite Person</p>
      {fav.message.map((data) => (
        <div onMouseEnter={() => {
          setHover(true);
        }} onMouseLeave={()=>{
          setHover(false);
        }} className='flex items-center p-[10px] hover:bg-gray-200 cursor-pointer transition-all ease-in-out duration-100'>
          <p style={{ fontFamily: "Be Vietnam Pro" }}>{data.fullname}</p>
          {hover && (
            <img className='m-[auto] h-[20px] w-[20px]' src='./images/love.png' alt='Nofound'></img>
          )}
        </div>
      ))}

    </div>
  )
}
