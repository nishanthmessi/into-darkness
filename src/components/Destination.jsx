import { useSelector } from "react-redux"

const Destination = () => {
  const planet = useSelector((state) => state.planet.value)

  return (
    <div className="flex justify-center mt-10 h-[50vh] bg-bottom-section text-white">
      <h2 className="text-3xl font-bold my-10">More Destinations</h2>
      {/* <p>{planet.planetName}</p> */}
    </div>
  )
}

export default Destination