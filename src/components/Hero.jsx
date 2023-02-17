import HeroImg from "../assets/mercurypng.png"

const Hero = () => {
  return (
    <>
      <div className="flex bg-gray-900 h-screen text-white">
        <div className="flex flex-col justify-center items-center w-1/2 p-10">
          <h1 className="text-5xl font-semibold mb-8">Welcome to Mercury</h1>
          <p className="text-4xl text-center">Smallest planet of the solar system</p>
          <p className="text-2xl my-4">It's our first planet</p>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="h-[70vh] w-[70wh] object-cover animate-[spin_90000ms_linear_infinite]"
          />
        </div>
      </div>
    </>
  )
}

export default Hero