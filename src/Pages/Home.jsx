import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Carousel";

function ButtonCities() {
    const navegate = useNavigate();

    function handleClickCities(rut) {
        navegate(rut)
    }
    return (
        <button onClick={() => handleClickCities()}
        className="mt-10 bg-red-600 bg-opacity-70 text-white px-4 py-2 rounded
        hover:shadow hover:shadow-black hover:bg-opacity-100 font-bold animate-bounce">
            Explore Cities
        </button>
    )
}

export default function Home() {

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
    );
}