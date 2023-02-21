import Hero from "./components/Hero"
import Details from "./components/Details"
import Destination from "./components/Destination"
import Axios from "axios"

function App() {
  Axios.defaults.baseURL = "http://localhost:8000"

  return (
    <div className="">
      <Hero />
      <Details />
      <Destination />
    </div>
  )
}

export default App
