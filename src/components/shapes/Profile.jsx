import React from 'react'
import './shapes.css'

export default function ProfileIcon() {
  return (
    <div>
      <div className='w-[30px] profile h-[30px] relative rounded-[50%] border-[1.2px] flex flex-col justify-center items-center border-white'>
            <div className='w-[9.5px] circle h-[9.5px] bg-white rounded-[50%]'/>
            <div className='w-[19px] h-[6.5px] bg-white rounded-[45%] absolute bottom-0  transform translateX(-50%)'></div>

      </div>
    </div>
  )
}
