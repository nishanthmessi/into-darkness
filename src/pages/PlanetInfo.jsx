import { useState, useEffect } from "react"
import HeroImg from "../assets/mercurypng.png"
import Axios from "axios"
import Details from "../components/Details"
import Destination from "../components/Destination"

const PlanetInfo = () => {
  const [planetData, setPlanetData] = useState("")

  useEffect(() => {
    const getPlanet =  async () => {
      const res = await Axios.get(`/api/planet/63ef2095a3a6782f2ea3a935`)
      const details = res.data.data
      setPlanetData(details)
    }
    getPlanet()
  }, [])

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-900 h-screen text-white bg-hero py-10 lg:py-0">
        <div className="lg:w-1/2 h-screen flex justify-center items-center">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="h-[30vh] w-[40wh] md:h-[40vh] md:w-[50wh] xl:h-[55vh] xl:w-[60wh] object-cover animate-[spin_90000ms_linear_infinite]"
          />
        </div> 
        <div className="flex flex-col justify-center p-10 text-center lg:text-left lg:text lg:w-1/2">
          <h1 className="text-6xl font-semibold text-white mt-10">Welcome to {planetData.planetName}</h1>
          <p className="text-3xl my-4">It's our {planetData.planetOrder} planet.</p>
          <p className="text-3xl my-2">{planetData.subTitle}</p>
        </div>
      </div>
      <Details />
      <Destination />
    </>
  )
}

export default PlanetInfo