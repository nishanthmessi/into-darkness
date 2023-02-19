import Hero from "./components/Hero"
import Details from "./components/Details"
import Axios from "axios"

function App() {
  Axios.defaults.baseURL = "http://localhost:8000"

  return (
    <div className="">
      <Hero />
      <Details />
    </div>
  )
}

export default App
