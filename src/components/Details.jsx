import Axios from "axios"
import { useEffect, useState } from "react"

const Details = () => {
  return (
    <>
    <div className='flex justify-center w-[90%] m-auto mt-10'>
      <div className='w-3/4 mx-10 flex flex-col items-center'>
        {/* <h1 className='text-xl font-bold my-2'>In Depth</h1> */}
        <p className='max-w-2xl text-xl'></p>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Namesake</h1>
          <p className='max-w-2xl text-xl'></p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Potential for Life</h1>
          <p className='max-w-2xl text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem labore ab autem unde quibusdam dolorem sapiente voluptatum adipisci dolorum.</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Size and Distance</h1>
          <p className='max-w-2xl text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem labore ab autem unde quibusdam dolorem sapiente voluptatum adipisci dolorum.</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Orbit and Rotation</h1>
          <p className='max-w-2xl text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem labore ab autem unde quibusdam dolorem sapiente voluptatum adipisci dolorum.</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Moons</h1>
          <p className='max-w-2xl text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem labore ab autem unde quibusdam dolorem sapiente voluptatum adipisci dolorum.</p>
        </div>
      </div>
      
      <div className='w-[30%]'>
        <h1 className='text-3xl font-semibold mb-8'>Quick Facts</h1>
          <div className="uppercase flex flex-col gap-4">
            <div>
              <h2>Distance from Sun</h2>
              <p className="text-2xl">36384739 km</p>  
            </div>
            <div>
              <h2>One way light time to the sun</h2>
              <p className="text-2xl">354354545 mins</p>
            </div>
            <div>
              <h2>Length of years</h2>
              <p className="text-2xl">3435</p>
            </div>
            <div>
              <h2>Planet type</h2>
              <p className="text-2xl">Gas Planet</p>
            </div> 
          </div>
      </div>
    </div>
    </>
  )
}

export default Details