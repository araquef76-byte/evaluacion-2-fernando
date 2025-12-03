import React from 'react'
import SeccionHijo from './SeccionHijo'
import mundo from '../images/image-deep-earth.jpg'
import satelite from '../images/image-curiosity.jpg'
import unavaina from '../images/image-from-above.jpg'

const SeccionPadre = () => {
  return (
    <div className='h-screen'>
        <h2>Our creations</h2>
     <SeccionHijo
     img={mundo}
     />
      <SeccionHijo
     img={satelite}
     />
      <SeccionHijo
     img={unavaina}
     />

      
    </div>
  )
}

export default SeccionPadre
