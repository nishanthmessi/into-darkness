import { useEffect, useState } from "react"
import Axios from "axios"
import { useDispatch } from "react-redux"
import { planetDetails } from "../features/planet"

const Details = () => {
  const dispatch = useDispatch()

  const [planetData, setPlanetData] = useState("")
  const [quickFacts, setQuickFacts] = useState("")

  const getPlanet =  async () => {
    const res = await Axios.get(`/api/planet/63ef2095a3a6782f2ea3a935`)
    const details = res.data.data.planetDetails
    const facts = res.data.data
    setPlanetData(details)
    setQuickFacts(facts) 
    dispatch(planetDetails(facts))  
  }

  useEffect(() => {
    getPlanet()
  }, [])

  return (
    <>
    <div className='flex flex-col justify-center w-[90%] m-auto mt-10 lg:flex-row'>
      <div className='lg:w-3/4 mx-10 flex flex-col items-center text-lg text-gray-700'>
        {/* <h1 className='text-xl font-bold my-2'>In Depth</h1> */}
        <p className='max-w-2xl'>{planetData.description}</p>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Namesake</h1>
          <p className='max-w-2xl'>{planetData.namesake}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Potential for Life</h1>
          <p className='max-w-2xl'>{planetData.potentialforLife}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Size and Distance</h1>
          <p className='max-w-2xl'>{planetData.sizenDistance}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Orbit and Rotation</h1>
          <p className='max-w-2xl'>{planetData.orbitnRotation}</p>
        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Moons</h1>
          <p className='max-w-2xl'>{planetData.moons}</p>
        </div>
      </div>
      
      <div className='lg:w-[30%] mt-12 lg:mt-0'>
        <h1 className='text-3xl font-semibold mb-8 text-center lg:text-start'>Quick Facts</h1>
          <div className="uppercase flex flex-col items-center gap-4 text-center lg:text-start lg:items-start">
            <div>
              <h2 className="font-semibold text-gray-600">Distance from Sun</h2>
              <p className="text-2xl">{quickFacts.distancefromSun} kms</p>  
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">One way light time to the sun</h2>
              <p className="text-2xl ">{quickFacts.lightTimetoSun} mins</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Length of year</h2>
              <p className="text-2xl">{quickFacts.yearLength} Earth Days</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Planet type</h2>
              <p className="text-2xl">{quickFacts.planetType} Planet</p>
            </div> 
          </div>
      </div>
    </div>
    </>
  )
}

export default Details