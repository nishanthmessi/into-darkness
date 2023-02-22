import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-gray-700 flex flex-col justify-center items-center h-screen">
      <h1 className="text-white">Home</h1>
      <div>
        <Link 
          to='/planet-info'
        >
          <h2>Mercury</h2>
        </Link>
      </div>
    </div>
  )
}

export default Home