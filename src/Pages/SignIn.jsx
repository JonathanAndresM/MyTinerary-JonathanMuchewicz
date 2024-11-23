import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/actions/authAction"
import { useNavigate } from "react-router-dom"


export default function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authState = useSelector((state) => state.authReducer)
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCredentials({ ...credentials, [name]: value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(login(credentials))
    }

    const handleLoginGoogle = () => {
        window.location.href = "http://localhost:8080/api/auth/signin/google"
    }

    return (
        <>
            <div className="bg-home-main bg-cover bg-center h-svh px-4 flex flex-col items-center justify-center text-white text-center">
                <div>
                    <h2 className="text-3xl lg:text-6xl text-blue-500 font-bold text-shadow"
                    >Welcome to MyTinerary - Login</h2>
                </div>
                {authState.loading && <p>Loading...</p>}
                {authState.error && <p
                    className="text-red-600 text-base font-semibold text-shadow-full mt-5"
                >{authState.error}</p>}
                <div className="max-w-xl w-full mt-6 bg-black bg-opacity-25 rounded-xl p-4">
                    <form onSubmit={handleLogin}>
                        <div className="mb-5">
                            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" value={credentials.email} onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@example.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password" name="password" value={credentials.password} onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5"
                                placeholder="password" required />
                        </div>
                        <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
                    </form>
                    <button type="submit" onClick={handleLoginGoogle}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5">
                        Login Google
                    </button>
                    <p className="text-base font-semibold">{"You still don't have an account?  "}<button type="button" onClick={() => navigate("/sign-up")}
                        className="text-black bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center mt-5">
                        Register
                    </button></p>
                </div>


            </div>
        </>
    )
}