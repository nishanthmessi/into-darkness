import { useSelector } from "react-redux"

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)

  return (
    <>
      <div className='flex flex-col gap-5' style={{ background: theme }}>
        <h1 className="text-3xl font-bold">Welcome to Profile</h1>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Email: {user.email}</h1>
      </div>
    </>
  )
}

export default Profile