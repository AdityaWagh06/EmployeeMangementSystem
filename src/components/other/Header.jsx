import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl'>Aditya 👋</span> </h1>  
        <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-md'>Log Out</button> 
    </div>
  )
}

export default Header
