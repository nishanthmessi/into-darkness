import { useDispatch } from "react-redux"
import { login, logout } from "../features/user"

const Login = () => {
  const dispatch = useDispatch()

  return (
    <div className="mt-8">
      <button 
        className="px-4 py-2 rounded-md bg-red-500 text-white"
        onClick={() => {
          dispatch(login({ name: "NM", age: 23, email: "nm@mail.com" }))
        }}
      >
        Login
      </button>
      <button 
        className="px-4 py-2 rounded-md bg-gray-500 text-white"
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Login