import React from 'react'
import interactive from '../images/image-interactive.jpg'

const SeccionMain = () => {
  return (
    <div className='h-screen ' >
        <figure className='relative mt-22 ml-18'>
            <img src={interactive}/>
        </figure>
        <div className='relative bg-white w-150 h-90 -top-70 left-165 pt-20 pl-20 pr-15'>
          <h2 className='text-6xl font-extralight mb-8'>the leader interactive VR </h2>
          <p className='text-gray-500'> Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.
</p>
        </div>
      
    </div>
  )
}

export default SeccionMain
