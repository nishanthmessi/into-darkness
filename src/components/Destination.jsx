import { useSelector } from "react-redux"

const Destination = () => {
  const planet = useSelector((state) => state.planet.value)

  console.log(planet)

  return (
    <div>
      <h1>Destination</h1>
      <p>{planet.planetName}</p>
    </div>
  )
}

export default Destination