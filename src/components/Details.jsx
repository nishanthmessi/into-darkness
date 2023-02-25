const Details = ({ planetData }) => {
  const planetInfo = planetData.planetDetails
  const planetFacts = planetData

  return (
    <>
    <div className='flex flex-col justify-center w-[90%] m-auto mt-10 lg:flex-row'>
      <div className='flex flex-col text-lg lg:w-2/5 mx-10 text-gray-700'>
        {/* <h1 className='text-xl font-bold my-2'>In Depth</h1> */}
        <p className='max-w-2xl'>{planetInfo.description}</p>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Namesake</h1>
          <p className='max-w-2xl'>{planetInfo.namesake}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Potential for Life</h1>
          <p className='max-w-2xl'>{planetInfo.potentialforLife}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Size and Distance</h1>
          <p className='max-w-2xl'>{planetInfo.sizenDistance}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Orbit and Rotation</h1>
          <p className='max-w-2xl'>{planetInfo.orbitnRotation}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Moons</h1>
          <p className='max-w-2xl'>{planetInfo.moons}</p>
        </div>
      </div>
      
      <div className='lg:w-[1/5] mt-12 lg:mt-0 '>
      <h1 className='text-3xl font-semibold mb-8 text-center lg:text-start'>Quick Facts</h1>
        <div className="uppercase flex flex-col items-center gap-4 text-center lg:text-start lg:items-start">
          <div>
            <h2 className="font-semibold text-gray-600">Distance from Sun</h2>
            <p className="text-2xl">{planetFacts.distancefromSun} kms</p>  
          </div>
          <div>
            <h2 className="font-semibold text-gray-600">One way light time to the sun</h2>
            <p className="text-2xl ">{planetFacts.lightTimetoSun} mins</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-600">Length of year</h2>
            <p className="text-2xl">{planetFacts.yearLength} Earth Days</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-600">Planet type</h2>
            <p className="text-2xl">{planetFacts.planetType} Planet</p>
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Details