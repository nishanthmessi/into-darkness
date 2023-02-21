import { useState, useEffect } from "react"
import HeroImg from "../assets/mercurypng.png"
import Axios from "axios"
import { planetDetails } from "../features/planet"

const Hero = () => {
  const [planetData, setPlanetData] = useState("")

  const getPlanet =  async () => {
    const res = await Axios.get(`/api/planet/63ef2095a3a6782f2ea3a935`)
    const details = res.data.data
    setPlanetData(details)
  }

  useEffect(() => {
    getPlanet()
  }, [])

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-900 h-screen text-white">
        <div className="flex flex-col justify-center items-center md:w-1/2 p-10 gap-10">
          <h1 className="text-5xl font-semibold text-center">Welcome to {planetData.planetName}</h1>
          <p className="text-4xl text-center">{planetData.subTitle}</p>
          <p className="text-2xl my-4">It's our {planetData.planetOrder} planet.</p>
        </div>
        <div className="md:w-1/2 h-screen flex justify-center items-center">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="h-[30vh] w-[40wh] md:h-[60vh] md:w-[60wh] object-cover animate-[spin_90000ms_linear_infinite]"
          />
        </div>
      </div>
    </>
  )
}

export default Hero