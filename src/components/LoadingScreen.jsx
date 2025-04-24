import React from 'react'

export default function LoadingScreen() {
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center'>
      <div className='relative flex justify-center items-center'>
        <div className='border-2 border-white border-t-blue-500 rounded-full w-16 h-16 animate-[spin_2s_infinite_linear]'></div>
      </div>
    </div>
  )
}
  
