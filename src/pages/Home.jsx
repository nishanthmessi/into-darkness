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
    <div className="bg-gray-700 flex flex-col justify-center items-center h-screen">
      <h1 className="text-white">Home</h1>
        {
          planets.map((planet) => (
            <div key={planet._id}>
              <Link 
                to= {`/planet-info/${planet.planetName.toLowerCase()}`}
                onClick={() => dispatch(getPlanetId(planet._id))}
              >
                <h2>{planet.planetName}</h2>
              </Link>
            </div>
          ))
        }
    </div>
  )
}

export default Home