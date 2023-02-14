import HeroImg from "../assets/mercurypng.png"

const Hero = () => {
  return (
    <>
      <div className="flex bg-gray-800 h-screen text-white">
        <div className="flex flex-col justify-center items-center w-1/2 p-10">
          <h1 className="text-4xl font-bold">Welcome to Mercury</h1>
          <p className="text-gray-200 mt-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
            mauris euismod, laoreet ante non, congue nisl.
          </p>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="h-[75vh] w-[70wh] object-cover animate-[spin_60s_linear_infinite]"
          />
        </div>
      </div>
    </>
  )
}

export default Hero