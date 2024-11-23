import { useNavigate } from "react-router-dom"
import Carousel from "../Components/Carousel"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setUser } from "../store/actions/authAction"

const loginWithToken = async (token) => {
    try {
        const response = await axios.get("http://localhost:8080/api/auth/validateToken",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        )
        console.log(response.data)

        return response.data.response
    } catch (error) {
        console.error("Error validando el token", error)
        return null
    }
}


function ButtonCities() {
    const navigate = useNavigate()

    function handleClickCities(rut) {
        navigate(rut)
    }
    return (
        <button onClick={() => handleClickCities("/Cities")}
            className="mt-10 bg-red-600 bg-opacity-70 text-white px-4 py-2 rounded
        hover:shadow hover:shadow-black hover:bg-opacity-100 font-bold animate-bounce">
            Explore Cities
        </button>
    )
}

export default function Home() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)

        const token = params.get("token")
        if (token) {
            localStorage.setItem("token", token)

            loginWithToken(token)
                .then((user) => {
                    dispatch(setUser({ user, token }))
                })
        }
        navigate("/home")
    }, [dispatch, navigate])


    return (
        <>
            <div className="bg-home-main bg-cover bg-center h-svh flex items-center justify-center text-white text-center">
                <div>
                    <h2 className="text-3xl lg:text-6xl text-blue-500 font-bold text-shadow"
                    >Welcome to MyTinerary</h2>
                    <p className="mt-2 text-black text-xl lg:text-3xl font-bold text-shadow-white"
                    >Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <ButtonCities rutes={"/Cities"}></ButtonCities>
                </div>
            </div>
            <Carousel></Carousel>
        </>
    )
}