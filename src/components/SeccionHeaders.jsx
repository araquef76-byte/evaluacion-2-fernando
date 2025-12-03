import React from 'react'
import logo from  '../assets/logo.svg'

const SeccionHeaders = () => {
  return (
    <div className="h-screen bg-[url('src/images/image-hero.jpg')]">
      
    <div className='h-25 flex justify-between items-center pl-20 pr-20' >

         <figure>
            <img src={logo} alt="logo" />
         </figure>

         <nav className='w-120 flex justify-between text-white p-2'>
            <a href="#"className='hover:underline'> About</a>
            <a href="#"className='hover:underline'> Careers</a>
            <a href="#"className='hover:underline'>Events</a>
            <a href="#"className='hover:underline'>Products</a> 
            <a href="#"className='hover:underline'> Support</a>

         </nav>

    </div>

    <div className='inline-block mt-40 ml-30 w-170 h-65  pl-15 pr-15 pt-3 pb-3 border-3 border-white' >
    <h1 className='text-white text-7xl'>Immersive experiences that deliver</h1>

    </div>

    </div>
   
  )
}

export default SeccionHeaders
