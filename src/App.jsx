import { Routes, Route } from "react-router-dom"
import Axios from "axios"
import Home from "./pages/Home"
import PlanetInfo from "./pages/PlanetInfo"

function App() {
  Axios.defaults.baseURL = "http://localhost:8000"

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/planet-info" element={<PlanetInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
