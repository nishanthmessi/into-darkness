import { useState, useEffect } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getPlanetId } from "../features/planet"

const Home = () => {
  const [planets, setPlanets] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const getPlanet =  async () => {
      const res = await Axios.get(`/api/planets`)
      const planet = res.data.data
      setPlanets(planet)
    }
    getPlanet()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-home">
      <h1 className="text-8xl font-bold text-white mb-6">Solar Realm</h1>
      <div>

      </div>
      <p className="text-gray-200 text-xl">"Our planetary system is located in an outer spiral arm of the Milky Way galaxy."</p>
      <h2 className="text-white mt-14 mb-6 text-xl font-semibold">Check out the planets in our solar system</h2>
      <div className="flex gap-3">
        {
          planets.map((planet) => (
            <div key={planet._id} className="flex">
              <Link 
                to= {`/${planet.planetName.toLowerCase()}`}
                onClick={() => dispatch(getPlanetId(planet._id))}
                className="px-10 py-4 bg-zinc-800 hover:bg-zinc-900 rounded-md text-white"
              >
                <h2 className="text-lg">{planet.planetName}</h2>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home